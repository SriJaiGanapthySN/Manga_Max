import React, { useState, type FormEvent } from "react";
import type { AuthFormData } from "../types/Auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/animations.css";

const LoginPage = () => {
  const [formData, setFormData] = useState<Omit<AuthFormData, "username">>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { loginUser, loading } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const success = await loginUser(formData);
      if (success) {
        console.log("Login successful");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-900 via-rose-900 to-pink-900">
      {/* One Piece Japanese Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Ocean Wave Pattern */}
        <div className="absolute inset-0 opacity-15">
          <svg
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full h-64 text-red-300"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            viewBox="0 0 1440 320"
            className="absolute bottom-8 w-full h-48 text-red-400"
          >
            <path
              fill="currentColor"
              fillOpacity="0.5"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,112C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Floating Pirate Ships */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
              }}
            >
              <div className="text-red-300/20">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 17h18l-2-6h-14l-2 6zm2.2-4h13.6l.9 2h-15.4l.9-2zm-2.2-2h18v-2h-18v2zm3-4h12v-2h-12v2zm2-4h8v-2h-8v2z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Treasure Coins */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
              }}
            >
              <div className="text-yellow-300/25">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path
                    d="M12 6v6l4 2"
                    stroke="rgba(0,0,0,0.3)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Japanese Calligraphy - One Piece Style */}
        <div className="absolute top-10 right-10 text-red-300/10 text-8xl font-bold transform rotate-12 select-none">
          海
        </div>
        <div className="absolute bottom-20 left-10 text-pink-300/10 text-7xl font-bold transform -rotate-12 select-none">
          夢
        </div>

        {/* Compass Rose Pattern */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-red-300 animate-bounce-slow"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M50 5 L55 45 L50 50 L45 45 Z" fill="currentColor" />
            <path d="M95 50 L55 45 L50 50 L55 55 Z" fill="currentColor" />
            <path d="M50 95 L45 55 L50 50 L55 55 Z" fill="currentColor" />
            <path d="M5 50 L45 55 L50 50 L45 45 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Anchor Pattern */}
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-10">
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full text-red-300 animate-float"
          >
            <path
              fill="currentColor"
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C12.8 7 13.5 7.7 13.5 8.5V10H15V8.5C15 6.8 13.7 5.5 12 5.5S9 6.8 9 8.5V10H10.5V8.5C10.5 7.7 11.2 7 12 7ZM12 11L6 17H9L12 14L15 17H18L12 11Z"
            />
          </svg>
        </div>

        {/* Marine/Navy Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ibWFyaW5lIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNDgsMTEzLDExMywwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI21hcmluZSkiIC8+PC9zdmc+')] opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-4">
          {/* Header Section - One Piece Style */}
          <div className="text-center transform transition-all duration-1000 ease-out animate-fade-in-up">
            <div className="mb-8">
              {/* Pirate Flag Style Icon */}
              <div className="relative inline-flex items-center justify-center w-28 h-28 mt-4">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-rose-500 to-red-700 rounded-full shadow-2xl animate-bounce-slow"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-red-900 to-rose-900 rounded-full"></div>
                <div className="relative z-10 flex items-center justify-center">
                  {/* Straw Hat Style Symbol */}
                  <svg
                    className="w-16 h-16 text-red-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
                {/* Pirate Bandana Stripes */}
                <div className="absolute -left-8 top-1/2 w-16 h-3 bg-gradient-to-r from-red-600 to-rose-600 transform -translate-y-1/2 rounded-full"></div>
                <div className="absolute -right-8 top-1/2 w-16 h-3 bg-gradient-to-r from-rose-600 to-red-600 transform -translate-y-1/2 rounded-full"></div>
              </div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-300 via-rose-300 to-pink-300 bg-clip-text text-transparent mb-2 font-serif">
                海賊帰還
              </h2>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-red-200 to-rose-200 bg-clip-text text-transparent mb-4">
                Welcome Back, Pirate
              </h3>

              {/* One Piece Style Divider */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-400"></div>
                <div className="text-red-300 text-2xl">⚓</div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-red-400 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* One Piece Style Treasure Map Card */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-red-100/10 to-rose-100/10 border-2 border-red-300/30 rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-red-500/25 overflow-hidden animate-slide-up">
            {/* Glass Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/5 to-rose-50/5"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-rose-600"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-rose-600 to-red-600"></div>

            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-red-300/50"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-red-300/50"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-red-300/50"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-red-300/50"></div>

            <div className="relative z-10">
              {error && (
                <div className="mb-4 bg-red-600/20 border-2 border-red-400/40 text-red-100 px-4 py-3 rounded-lg text-sm backdrop-blur-sm animate-shake">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {error}
                  </div>
                </div>
              )}

              <form className="" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-red-200/90 mb-2 transition-colors group-hover:text-red-100"
                    >
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-red-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                        Crew Member ID
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="例：monkey.d.luffy@crew.com"
                      className="block w-full px-4 py-3 bg-red-100/10 border-2 border-red-300/30 rounded-lg text-red-100 placeholder-red-200/50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 backdrop-blur-sm hover:bg-red-100/20 focus:scale-105"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-red-200/90 mb-2 transition-colors group-hover:text-red-100"
                    >
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-red-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        Secret Fruit (秘密の実)
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="block w-full px-4 py-3 bg-red-100/10 border-2 border-red-300/30 rounded-lg text-red-100 placeholder-red-200/50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 backdrop-blur-sm hover:bg-red-100/20 focus:scale-105"
                        placeholder="Enter your secret password"
                        value={formData.password}
                        onChange={handleInputChange}
                        disabled={loading}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  {/* Pirate Ship Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex justify-center py-4 px-6 border-2 border-red-400/50 text-lg font-bold rounded-lg text-red-100 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:via-rose-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 overflow-hidden font-serif"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-6 w-6 text-red-100"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span className="bg-gradient-to-r from-red-100 to-rose-100 bg-clip-text text-transparent">
                            船に乗る...(Sailing)
                          </span>
                        </>
                      ) : (
                        <span className="bg-gradient-to-r from-red-100 to-rose-100 bg-clip-text text-transparent flex items-center">
                          船出だ！(Set Sail!)
                          <svg
                            className="ml-2 w-5 h-5 text-red-200 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  </button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-red-200/80">
                    New to the crew?{" "}
                    <button
                      type="button"
                      onClick={() => navigate("/register")}
                      className="font-semibold text-red-100 hover:text-rose-200 transition-colors duration-300 underline decoration-red-400 underline-offset-4 hover:decoration-rose-400 transform hover:scale-105 inline-block"
                    >
                      仲間になる (Join the Crew)
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* One Piece Style Footer */}
          <div className="text-center text-red-300/60 text-sm animate-fade-in">
            <p>
              By boarding, you agree to follow the
              <span className="text-red-200 hover:text-red-100 transition-colors cursor-pointer">
                {" "}
                Pirate Code
              </span>{" "}
              and our
              <span className="text-red-200 hover:text-red-100 transition-colors cursor-pointer">
                {" "}
                Ship Rules
              </span>
            </p>
            <div className="mt-2 text-red-400/40 text-xs">
              夢は終わらない - Dreams never end
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
