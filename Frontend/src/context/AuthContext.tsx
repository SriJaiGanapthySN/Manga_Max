/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { AuthContextType, AuthFormData, User } from "../types/Auth.d.ts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL:
    "https://manga-max-yv8r-2yb30ee3g-srijaiganapthysns-projects.vercel.app/api/auth",
});

const authcontext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentUser = async () => {
      setLoading(true);
      try {
        const res = await api.get("/current");
        console.log(res.data);

        setUser(res.data.user);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    if (token) {
      getCurrentUser();
    }
  }, [token]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }
  }, []);
  const createUser = async (FormData: AuthFormData): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await api.post("/register", FormData);
      if (response.status === 201) {
        console.log("User created successfully:", response.data);
        navigate("/login");
        return true;
      }
      return false;
    } catch (e: unknown) {
      console.log(e);
      if (typeof e === "object" && e !== null && "response" in e) {
        const response = (
          e as { response?: { status: number; data?: { message?: string } } }
        ).response;
        if (response?.status === 400) {
          throw new Error(
            response.data?.message ||
              "Invalid registration data. Please check your information."
          );
        } else if (response?.status === 409) {
          throw new Error("User already exists with this email.");
        } else if (response?.status === 500) {
          throw new Error("Server error. Please try again later.");
        }
      }
      if (
        typeof e === "object" &&
        e !== null &&
        "code" in e &&
        (e as { code: string }).code === "NETWORK_ERROR"
      ) {
        throw new Error("Network error. Please check your connection.");
      }
      throw new Error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (
    formData: Omit<AuthFormData, "username">
  ): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      console.log(response);

      if (response.status === 200) {
        setUser(response.data.user);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        navigate("/");
        return true;
      }
      return false;
    } catch (e: unknown) {
      console.log(e);
      if (typeof e === "object" && e !== null && "response" in e) {
        const response = (e as { response?: { status: number } }).response;
        if (response?.status === 400 || response?.status === 401) {
          throw new Error(
            "Invalid email or password. Please check your credentials."
          );
        } else if (response?.status === 500) {
          throw new Error("Server error. Please try again later.");
        }
      }
      if (
        typeof e === "object" &&
        e !== null &&
        "code" in e &&
        (e as { code: string }).code === "NETWORK_ERROR"
      ) {
        throw new Error("Network error. Please check your connection.");
      }
      throw new Error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    navigate("/login");
  };

  return (
    <authcontext.Provider
      value={{ loginUser, logoutUser, createUser, user, loading, token }}
    >
      {children}
    </authcontext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(authcontext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { useAuth };
