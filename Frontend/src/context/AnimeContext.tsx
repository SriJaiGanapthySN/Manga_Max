import axios from "axios";
import {
  useEffect,
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { useAuth } from "./AuthContext";
import type { Anime } from "../types/Anime";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});

type AnimeContextType = {
  favourites: string[];
  animes: Anime[];
  loading: boolean;
  fetchAnimeById: (animeId: string) => Promise<Anime>;
  fetchAnimeByGenre: (genre: string) => Promise<Anime[]>;
  searchAnime: (query: string) => Promise<Anime[]>;
  addFavourites: (animeId: string) => Promise<void>;
  removeFavourites: (animeId: string) => Promise<void>;
  isFavorite: (animeId: string) => boolean;
};

const animeContext = createContext<AnimeContextType>({
  favourites: [],
  animes: [],
  loading: false,
  fetchAnimeByGenre: async () => [],
  fetchAnimeById: async () => ({} as Anime),
  searchAnime: async () => [],
  addFavourites: async () => {},
  removeFavourites: async () => {},
  isFavorite: () => false,
});
export const AnimeProvider = ({ children }: { children: ReactNode }) => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [favourites, setFavourites] = useState<string[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const { user } = useAuth();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }
  }, []);

  const getFavourites = useCallback(async () => {
    if (!token || !user) return;
    setloading(true);
    try {
      const response = await api.get(`/favourites`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const favoriteAnimeIds = response.data.data.map(
        (fav: { anime: { _id: string } }) => fav.anime._id
      );
      setFavourites(favoriteAnimeIds);
    } catch (e) {
      console.log(e);
    } finally {
      setloading(false);
    }
  }, [token, user]);

  useEffect(() => {
    console.log("Token:", token);
    console.log("User:", user);
    fetchAnimes();
    getFavourites();
  }, [user, token, getFavourites]);

  const fetchAnimes = async () => {
    setloading(true);
    try {
      const resposne = await api.get("/anime");
      setAnimes(resposne.data.data);
    } catch (e) {
      console.log(e);
    } finally {
      setloading(false);
    }
  };

  const fetchAnimeById = async (animeId: string) => {
    setloading(true);
    try {
      const response = await api.get(`/anime/${animeId}`);
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  };

  const fetchAnimeByGenre = async (genre: string) => {
    setloading(true);
    try {
      const response = await api.get(`/anime/genre/${genre}`);
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  };
  const addFavourites = async (animeId: string) => {
    if (!token) {
      console.log("No token available");
      return;
    }
    setloading(true);
    try {
      const response = await api.post(
        `/favourites`,
        {
          animeId: animeId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Added to favourites:", response.data.message);
      // Update local state
      setFavourites((prev) => {
        const newFavourites = [...prev, animeId];
        console.log("Updated favourites after add:", newFavourites);
        return newFavourites;
      });
    } catch (e) {
      console.log("Error adding to favourites:", e);
    } finally {
      setloading(false);
    }
  };

  const removeFavourites = async (animeId: string) => {
    if (!token) {
      console.log("No token available");
      return;
    }
    setloading(true);
    try {
      await api.delete(`/favourites/${animeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Removed from favourites:", animeId);
      // Update local state
      setFavourites((prev) => {
        const newFavourites = prev.filter((id) => id !== animeId);
        console.log("Updated favourites after remove:", newFavourites);
        return newFavourites;
      });
    } catch (e) {
      console.log("Error removing from favourites:", e);
    } finally {
      setloading(false);
    }
  };

  const isFavorite = (animeId: string): boolean => {
    const result = favourites.includes(animeId);
    console.log(
      `Checking if ${animeId} is favorite:`,
      result,
      "Favorites:",
      favourites
    );
    return result;
  };

  const searchAnime = async (query: string) => {
    setloading(true);
    try {
      const response = await api.get(`/anime/search?query=${query}`);
      return response.data.data;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <animeContext.Provider
      value={{
        favourites,
        animes,
        loading,
        fetchAnimeById,
        fetchAnimeByGenre,
        searchAnime,
        addFavourites,
        removeFavourites,
        isFavorite,
      }}
    >
      {children}
    </animeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAnime = () => {
  const context = useContext(animeContext);
  if (!context) {
    throw new Error("conctext not set anime");
  }
  return context;
};
