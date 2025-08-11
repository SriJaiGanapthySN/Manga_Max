import { useEffect, useState } from "react";
import { useAnime } from "../context/AnimeContext";
import { useAuth } from "../context/AuthContext";
import AnimeCard from "../components/AnimeCard";
import type { Anime } from "../types/Anime";
import "../styles/animations.css";

const FavouritesPage = () => {
  const { user } = useAuth();
  const { loading: contextLoading, favourites, animes } = useAnime();
  const [favoriteAnimes, setFavoriteAnimes] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("FavouritesPage useEffect triggered", {
      user: !!user,
      favourites,
      animes: animes.length,
    });

    if (!user) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    // Filter the favorite animes based on the favourites array from AnimeContext
    const filteredAnimes = animes.filter((anime) =>
      favourites.includes(anime._id)
    );
    console.log(
      "Filtered favorite animes:",
      filteredAnimes.length,
      filteredAnimes.map((a) => a.title)
    );
    setFavoriteAnimes(filteredAnimes);

    setIsLoading(false);
  }, [user, favourites, animes]);

  // const handleFavoriteToggle = async (animeId: string) => {
  //   if (!user) return;

  //   try {
  //     if (isFavorite(animeId)) {
  //       await removeFavourites(animeId);
  //     } else {
  //       await addFavourites(animeId);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  if (!user) {
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

          {/* Japanese Calligraphy Background */}
          <div className="absolute top-10 right-10 text-red-300/10 text-9xl font-bold transform rotate-12 select-none">
            愛
          </div>
          <div className="absolute bottom-20 left-10 text-orange-300/10 text-8xl font-bold transform -rotate-12 select-none">
            心
          </div>

          {/* Hexagon Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iaGV4IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsMTQ2LDYwLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIHBvaW50cz0iMzAsMTUgNDUsMjIuNSA0NSwzNy41IDMwLDQ1IDE1LDM3LjUgMTUsMjIuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNoZXgpIiAvPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center transform transition-all duration-1000 ease-out animate-fade-in-up">
            {/* Traditional Japanese Card */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-orange-100/10 to-red-100/10 border-2 border-orange-300/30 rounded-2xl shadow-2xl p-12 transform transition-all duration-500 hover:scale-105 hover:shadow-orange-500/25 overflow-hidden">
              {/* Scroll Paper Texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/5 to-yellow-50/5"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 to-red-600"></div>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-orange-600"></div>

              {/* Traditional Japanese Corner Decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-orange-300/50"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-orange-300/50"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-orange-300/50"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-orange-300/50"></div>

              <div className="relative z-10">
                <div className="text-6xl mb-6">🏮</div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 bg-clip-text text-transparent mb-4">
                  Login Required
                </h1>
                <p className="text-orange-200/90 text-lg">
                  Please login to view your favorites
                </p>

                {/* Japanese Style Divider */}
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
                  <div className="text-orange-300 text-2xl">卍</div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading || contextLoading) {
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
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center transform transition-all duration-1000 ease-out animate-fade-in-up">
            {/* Traditional Loading Spinner */}
            <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full shadow-2xl animate-spin"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-orange-900 to-red-900 rounded-full"></div>
              <div className="relative z-10 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-orange-200 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4V8C16.2 8.6 18 10.6 18 13C18 15.4 16.2 17.4 14 18V20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20V18C7.8 17.4 6 15.4 6 13C6 10.6 7.8 8.6 10 8V4C10 2.9 10.9 2 12 2M12 10C10.3 10 9 11.3 9 13C9 14.7 10.3 16 12 16C13.7 16 15 14.7 15 13C15 11.3 13.7 10 12 10Z" />
                </svg>
              </div>
            </div>

            <p className="text-lg bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Loading favorites...
            </p>

            {/* Japanese Style Divider */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
              <div className="text-orange-300 text-2xl animate-pulse">卍</div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          愛
        </div>
        <div className="absolute bottom-20 left-10 text-orange-300/10 text-8xl font-bold transform -rotate-12 select-none">
          心
        </div>

        {/* Hexagon Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iaGV4IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsMTQ2LDYwLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIHBvaW50cz0iMzAsMTUgNDUsMjIuNSA0NSwzNy41IDMwLDQ1IDE1LDM3LjUgMTUsMjIuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNoZXgpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12 transform transition-all duration-1000 ease-out animate-fade-in-up">
          {/* Ninja Headband Style Icon */}
          <div className="relative inline-flex items-center justify-center w-28 h-28 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full shadow-2xl animate-bounce-slow"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-orange-900 to-red-900 rounded-full"></div>
            <div className="relative z-10 flex items-center justify-center">
              <div className="text-6xl">❤️</div>
            </div>
            {/* Headband Stripes */}
            <div className="absolute -left-8 top-1/2 w-16 h-3 bg-gradient-to-r from-orange-600 to-red-600 transform -translate-y-1/2 rounded-full"></div>
            <div className="absolute -right-8 top-1/2 w-16 h-3 bg-gradient-to-r from-red-600 to-orange-600 transform -translate-y-1/2 rounded-full"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 bg-clip-text text-transparent mb-4">
            お気に入り
          </h1>
          <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent mb-6">
            Your Favorite Anime
          </h2>

          {/* Japanese Style Divider */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-red-400"></div>
            <div className="text-orange-300 text-3xl animate-pulse">卍</div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-red-400 via-orange-400 to-transparent"></div>
          </div>
        </div>

        {favoriteAnimes.length === 0 ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center transform transition-all duration-1000 ease-out animate-fade-in-up">
              {/* Traditional Japanese Card for Empty State */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-orange-100/10 to-red-100/10 border-2 border-orange-300/30 rounded-2xl shadow-2xl p-16 transform transition-all duration-500 hover:scale-105 hover:shadow-orange-500/25 overflow-hidden">
                {/* Scroll Paper Texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/5 to-yellow-50/5"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 to-red-600"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-orange-600"></div>

                {/* Traditional Japanese Corner Decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-orange-300/50"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-orange-300/50"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-orange-300/50"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-orange-300/50"></div>

                <div className="relative z-10">
                  <div className="text-8xl mb-6 animate-bounce">💔</div>
                  <h3 className="text-3xl bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 bg-clip-text text-transparent mb-4 font-bold">
                    No favorites yet
                  </h3>
                  <p className="text-orange-200/90 text-lg mb-6">
                    Start adding some anime to your favorites!
                  </p>

                  {/* Japanese Style Divider */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
                    <div className="text-orange-300 text-2xl">卍</div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Anime Grid Container with Japanese Scroll Style */}
            <div className="relative backdrop-blur-sm bg-gradient-to-br from-orange-100/5 to-red-100/5 border border-orange-300/20 rounded-3xl shadow-xl p-8 overflow-hidden">
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/2 to-yellow-50/2"></div>

              {/* Top and bottom accent lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/50 via-red-500/50 to-orange-500/50"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/50 via-red-500/50 to-orange-500/50"></div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-fade-in">
                {favoriteAnimes.map((anime) => (
                  <AnimeCard key={anime._id} anime={anime} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;
