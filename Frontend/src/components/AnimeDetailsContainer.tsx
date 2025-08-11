import { useEffect, useState } from "react";

import type { Anime } from "../types/Anime";
import { useAnime } from "../context/AnimeContext";

const AnimeDetailsContainer = ({ id }: { id: string }) => {
  const [anime, setAnime] = useState<Anime | null>(null);

  const { fetchAnimeById } = useAnime();
  const getAnimeById = async () => {
    const fetchedAnime = await fetchAnimeById(id!);
    console.log(fetchedAnime);

    setAnime(fetchedAnime);
  };

  useEffect(() => {
    getAnimeById();
  }, [id]);

  if (!anime) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-300 mx-auto mb-4"></div>
          <p className="text-orange-200 text-xl font-bold">
            アニメを読み込み中... (Loading Anime)
          </p>
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
          {[...Array(10)].map((_, i) => (
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
                  width="20"
                  height="20"
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
          魂
        </div>
        <div className="absolute bottom-20 left-10 text-orange-300/10 text-8xl font-bold transform -rotate-12 select-none">
          道
        </div>

        {/* Hexagon Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iaGV4IiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsMTQ2LDYwLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIHBvaW50cz0iMzAsMTUgNDUsMjIuNSA0NSwzNy41IDMwLDQ1IDE1LDM3LjUgMTUsMjIuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNoZXgpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header Section with Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 bg-clip-text text-transparent mb-2 font-serif">
            {anime.title}
          </h1>
          {anime.title_japanese && (
            <h2 className="text-2xl md:text-3xl font-bold text-orange-200/80 mb-2">
              {anime.title_japanese}
            </h2>
          )}
          {anime.title_english && anime.title_english !== anime.title && (
            <h3 className="text-xl text-orange-200/60">
              {anime.title_english}
            </h3>
          )}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Basic Info */}
          <div className="lg:col-span-1">
            {/* Anime Image Card */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-orange-100/10 to-red-100/10 border-2 border-orange-300/30 rounded-3xl p-6 shadow-2xl mb-6">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={anime.image_jpg_large_url || anime.image_jpg_url}
                  alt={anime.title}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {anime.airing && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    🔴 Airing
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-orange-100/10 to-red-100/10 border-2 border-orange-300/30 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-orange-200 mb-4 flex items-center">
                <span className="mr-2">📊</span>
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-orange-200/80">Type:</span>
                  <span className="text-yellow-200 font-semibold">
                    {anime.type}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-200/80">Episodes:</span>
                  <span className="text-yellow-200 font-semibold">
                    {anime.episodes || "Unknown"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-200/80">Status:</span>
                  <span
                    className={`font-semibold ${
                      anime.status === "Finished Airing"
                        ? "text-green-300"
                        : "text-blue-300"
                    }`}
                  >
                    {anime.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-200/80">Duration:</span>
                  <span className="text-yellow-200 font-semibold">
                    {anime.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-200/80">Source:</span>
                  <span className="text-yellow-200 font-semibold">
                    {anime.source}
                  </span>
                </div>
                {anime.rating && (
                  <div className="flex justify-between items-center">
                    <span className="text-orange-200/80">Rating:</span>
                    <span className="text-yellow-200 font-semibold">
                      {anime.rating}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trailer Section */}
            {anime.trailer_youtube_id && (
              <div className="backdrop-blur-xl bg-gradient-to-br from-orange-100/10 to-red-100/10 border-2 border-orange-300/30 rounded-3xl p-6 shadow-2xl">
                <h3 className="text-2xl font-bold text-orange-200 mb-6 flex items-center">
                  <span className="mr-3">🎬</span>
                  Trailer - 予告編
                </h3>
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${anime.trailer_youtube_id}`}
                    title={`${anime.title} Trailer`}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {/* Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* External Links Card */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-orange-100/10 to-red-100/10 border-2 border-orange-300/30 rounded-3xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-orange-200 mb-4 flex items-center">
                  <span className="mr-2">🔗</span>
                  Links
                </h3>
                <div className="space-y-3">
                  <a
                    href={anime.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    View on MyAnimeList
                  </a>
                  {anime.trailer_url && (
                    <a
                      href={anime.trailer_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Watch Trailer
                    </a>
                  )}
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-orange-100/10 to-red-100/10 border-2 border-orange-300/30 rounded-3xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-orange-200 mb-4 flex items-center">
                  <span className="mr-2">ℹ️</span>
                  Details
                </h3>
                <div className="space-y-3 text-sm">
                  {anime.title_synonyms && (
                    <div>
                      <span className="text-orange-200/80">Synonyms:</span>
                      <span className="ml-2 text-yellow-200">
                        {anime.title_synonyms}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <span className="text-orange-200/80">
                      Currently Airing:
                    </span>
                    <span
                      className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                        anime.airing
                          ? "bg-green-500 text-white"
                          : "bg-gray-500 text-white"
                      }`}
                    >
                      {anime.airing ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailsContainer;
