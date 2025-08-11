import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import type { Anime } from "../types/Anime";
import { useAnime } from "../context/AnimeContext";
import AnimeCard from "../components/AnimeCard";

const AnimesByGenre = () => {
  const params = useParams();
  const navigate = useNavigate();
  const genre = params.genre;
  const [animeList, setAnimeList] = useState<Anime[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { fetchAnimeByGenre } = useAnime();

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        setIsLoading(true);
        const fetchedAnimeList = await fetchAnimeByGenre(genre!);
        console.log(fetchedAnimeList);
        // Ensure we handle both array and single anime responses
        if (Array.isArray(fetchedAnimeList)) {
          setAnimeList(fetchedAnimeList);
        } else {
          setAnimeList([fetchedAnimeList]);
        }
      } catch (e) {
        console.log(`error:${e}`);
        setAnimeList([]);
      } finally {
        setIsLoading(false);
      }
    };
    if (genre) {
      fetchAnimeData();
    }
  }, [genre, fetchAnimeByGenre]);

  if (isLoading) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Attack on Titan Loading Screen */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            {/* Titan Silhouette Animation */}
            <div className="relative mb-8">
              <div className="animate-pulse">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  className="text-red-600 mx-auto"
                >
                  <path
                    fill="currentColor"
                    d="M12 2L13.09 6.26L17 5L15.74 9.09L20 8L18.74 12.26L23 11L21.74 15.09L26 14L24.74 18.26L29 17L27.74 21.09L32 20L30.74 24.26L35 23L12 12L13 2Z"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 bg-red-600/20 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-2xl font-bold text-red-400 mb-4">調査中...</h2>
            <p className="text-gray-400 text-lg">
              Scouting for {genre} anime...
            </p>
            <div className="mt-6 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-red-900 text-8xl font-bold transform -rotate-12">
            ⚔️
          </div>
          <div className="absolute bottom-20 right-10 text-gray-800 text-9xl font-bold transform rotate-12">
            🏰
          </div>
        </div>
      </div>
    );
  }

  if (!animeList || animeList.length === 0) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="mb-8">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              className="text-red-600 mx-auto mb-4"
            >
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-red-400 mb-4">
            No {genre} Anime Found
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            The Survey Corps couldn't find any anime in this category.
          </p>
          <Link
            to="/"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 font-bold"
          >
            Return to Base
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Attack on Titan Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Military Wall Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full h-64 text-gray-700"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Floating Military Emblems */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${12 + Math.random() * 8}s`,
              }}
            >
              <div className="text-red-800/20 transform rotate-45">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2L13.09 6.26L17 5L15.74 9.09L20 8L18.74 12.26L23 11L21.74 15.09L26 14L24.74 18.26L29 17L27.74 21.09L32 20L30.74 24.26L35 23L12 12L13 2Z"
                    transform="scale(0.7)"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Military Symbols Background */}
        <div className="absolute top-16 right-16 text-red-900/10 text-9xl font-bold transform rotate-12 select-none">
          ⚔️
        </div>
        <div className="absolute bottom-24 left-16 text-gray-800/10 text-8xl font-bold transform -rotate-12 select-none">
          🛡️
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDMxLDQxLDU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-30"></div>
      </div>

      {/* Military Navigation Header */}
      <nav className="relative z-10 backdrop-blur-xl bg-gradient-to-br from-slate-800/40 to-gray-900/40 border-b-2 border-red-800/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-2xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-orange-400 bg-clip-text text-transparent hover:from-red-300 hover:to-orange-300 transition-all duration-300"
              >
                ⚔️ MangaMax
              </Link>
              <div className="text-gray-400 text-lg">
                / <span className="text-red-400 font-semibold">{genre}</span>{" "}
                Division
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-4 py-2 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Retreat</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 text-center py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4 font-serif">
              {genre} Anime Division
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">
              進撃の{genre} • Attack on {genre}
            </h2>

            {/* Mission Stats */}
            <div className="flex justify-center items-center space-x-8 mt-6">
              <div className="backdrop-blur-xl bg-gradient-to-br from-red-900/20 to-gray-900/20 border border-red-800/30 rounded-xl px-6 py-3">
                <div className="text-2xl font-bold text-red-400">
                  {animeList.length}
                </div>
                <div className="text-sm text-gray-400">Targets Located</div>
              </div>
              <div className="backdrop-blur-xl bg-gradient-to-br from-red-900/20 to-gray-900/20 border border-red-800/30 rounded-xl px-6 py-3">
                <div className="text-2xl font-bold text-orange-400">100%</div>
                <div className="text-sm text-gray-400">Mission Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Anime Grid */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-red-400 text-center mb-8 flex items-center justify-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L13.09 6.26L17 5L15.74 9.09L20 8L18.74 12.26L23 11L21.74 15.09L26 14L24.74 18.26L29 17L27.74 21.09L32 20L30.74 24.26L35 23L12 12L13 2Z" />
            </svg>
            Battle Ready {genre} Anime Squadron
            <svg
              className="w-6 h-6 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L13.09 6.26L17 5L15.74 9.09L20 8L18.74 12.26L23 11L21.74 15.09L26 14L24.74 18.26L29 17L27.74 21.09L32 20L30.74 24.26L35 23L12 12L13 2Z" />
            </svg>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {animeList.map((anime) => (
              <div
                key={anime._id}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <AnimeCard anime={anime} />
              </div>
            ))}
          </div>

          {/* Mission Complete Section */}
          <div className="text-center mt-16">
            <div className="backdrop-blur-xl bg-gradient-to-br from-red-900/20 to-gray-900/20 border border-red-800/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-red-400 mb-4">
                Mission Report
              </h4>
              <p className="text-gray-300 mb-6">
                Successfully located {animeList.length} {genre} anime targets.
                All units are battle-ready and awaiting your command.
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="/"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 font-bold"
                >
                  Return to HQ
                </Link>
                <button className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 font-bold">
                  Load More Targets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimesByGenre;
