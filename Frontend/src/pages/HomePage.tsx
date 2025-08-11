import { Link, useNavigate } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import { useAnime } from "../context/AnimeContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import routes from "../routes/routes";

const HomePage = () => {
  const { animes } = useAnime();
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();
  const [query, setQuery] = useState<string>("");

  const handleButtonClick = (genre: string) => {
    navigate(`/anime/genre/${genre}`);
  };

  const handleTextSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSearch = async () => {
    if (query) {
      navigate(`/anime/searchresults?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900">
      {/* Japanese Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Traditional Japanese Wave Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full h-64 text-orange-300"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,112C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Floating Ninja Stars */}
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
              <div className="text-orange-300/20 transform rotate-45">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2L13.09 6.26L17 5L15.74 9.09L20 8L18.74 12.26L23 11L21.74 15.09L26 14L24.74 18.26L29 17L27.74 21.09L32 20L30.74 24.26L35 23L12 12L13 2Z"
                    transform="scale(0.5)"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Cherry Blossom Petals */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
              }}
            >
              <div className="text-pink-300/30">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C21 10.1 20.1 11 19 11C17.9 11 17 10.1 17 9C17 7.9 17.9 7 19 7C20.1 7 21 7.9 21 9ZM7 9C7 10.1 6.1 11 5 11C3.9 11 3 10.1 3 9C3 7.9 3.9 7 5 7C6.1 7 7 7.9 7 9ZM14.5 16C15.6 16 16.5 16.9 16.5 18C16.5 19.1 15.6 20 14.5 20C13.4 20 12.5 19.1 12.5 18C12.5 16.9 13.4 16 14.5 16ZM9.5 16C10.6 16 11.5 16.9 11.5 18C11.5 19.1 10.6 20 9.5 20C8.4 20 7.5 19.1 7.5 18C7.5 16.9 8.4 16 9.5 16Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Japanese Calligraphy Background */}
        <div className="absolute top-10 right-10 text-red-300/10 text-9xl font-bold transform rotate-12 select-none">
          火
        </div>
        <div className="absolute bottom-20 left-10 text-orange-300/10 text-8xl font-bold transform -rotate-12 select-none">
          忍
        </div>

        {/* Hexagon Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iaGV4IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsMTQ2LDYwLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIHBvaW50cz0iMzAsMTUgNDUsMjIuNSA0NSwzNy41IDMwLDQ1IDE1LDM3LjUgMTUsMjIuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNoZXgpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-10 backdrop-blur-xl bg-gradient-to-br from-orange-100/10 to-red-100/10 border-b-2 border-orange-300/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 bg-clip-text text-transparent">
              <span className="text-orange-200">忍者</span> MangaMax
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to={routes.home}
                className="text-orange-200 hover:text-yellow-200 transition-colors duration-300 font-medium border-b border-orange-200"
              >
                Anime
              </Link>
              <Link
                to={routes.favourites}
                className="text-orange-200/80 hover:text-orange-100 transition-colors duration-300"
              >
                Favourites
              </Link>
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="text-orange-200 font-medium">
                    Welcome,{" "}
                    <span className="text-yellow-300">{user.username}</span>! 🎌
                  </div>
                  <button
                    onClick={logoutUser}
                    className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="text-orange-200/80 hover:text-orange-100 transition-colors duration-300"
                  >
                    Signin
                  </Link>
                  <Link
                    to={"/register"}
                    className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 bg-clip-text text-transparent mb-4 font-serif">
              アニメ の世界
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent mb-6">
              Discover Amazing Anime
            </h2>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-orange-100/10 to-red-100/10 border-2 border-orange-300/30 rounded-2xl p-2">
                <div className="flex items-center">
                  <input
                    value={query}
                    onChange={handleTextSearch}
                    type="text"
                    placeholder="Search for anime... (アニメを検索)"
                    className="flex-1 bg-transparent text-orange-100 placeholder-orange-200/70 px-4 py-3 focus:outline-none text-lg"
                  />
                  <button
                    onClick={handleSearch}
                    className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="relative z-10 px-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Action",
              "Adventure",
              "Comedy",
              "Drama",
              "Fantasy",
              "Romance",
              "Sci-Fi",
            ].map((category) => (
              <button
                onClick={() => handleButtonClick(category)}
                key={category}
                className="px-6 py-2 backdrop-blur-xl bg-gradient-to-br from-orange-100/20 to-red-100/20 border border-orange-300/30 rounded-full text-orange-200 hover:text-white hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Anime Grid */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-orange-200 text-center mb-12">
            🔥 Featured Anime Collection 🔥 (Currently Airing)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {animes.map((anime) => (
              <AnimeCard key={anime._id} anime={anime} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
