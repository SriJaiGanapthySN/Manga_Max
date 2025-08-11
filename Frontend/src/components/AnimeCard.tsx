import type { Anime } from "../types/Anime";
import { useNavigate } from "react-router-dom";
import { useAnime } from "../context/AnimeContext";
import { useAuth } from "../context/AuthContext";

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard = (props: AnimeCardProps) => {
  const { anime } = props;
  const navigate = useNavigate();
  const { addFavourites, removeFavourites, isFavorite } = useAnime();
  const { user } = useAuth();

  const isCurrentlyFavorite = isFavorite(anime._id);

  const handleFavoriteToggle = async () => {
    if (!user) {
      console.log("User not logged in");
      return;
    }

    try {
      if (isCurrentlyFavorite) {
        console.log("Removing from favourites:", anime._id);
        await removeFavourites(anime._id);
      } else {
        console.log("Adding to favourites:", anime._id);
        await addFavourites(anime._id);
      }
    } catch (e) {
      console.log("Error toggling favourite:", e);
    }
  };

  const handleButtonClick = () => {
    navigate(`/anime/${anime._id}`);
    console.log(`navigated successfully`);
  };
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 via-red-950/20 to-black rounded-lg overflow-hidden shadow-lg shadow-red-900/20 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 transform hover:scale-105 border border-red-900/30 glass">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={anime.image_jpg_large_url || anime.image_jpg_url}
          alt={anime.title || anime.title_english}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status Badge and Favorite Button */}
        <div className="absolute top-2 right-2 flex items-center gap-2">
          {/* Favorite Button */}
          <button
            onClick={handleFavoriteToggle}
            disabled={user == null}
            className={`p-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
              isCurrentlyFavorite
                ? "bg-red-600 text-white shadow-lg shadow-red-600/50"
                : "bg-black/60 text-gray-300 hover:bg-red-600/20 hover:text-red-400"
            }`}
            aria-label={
              isCurrentlyFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <svg
              className="w-4 h-4"
              fill={isCurrentlyFavorite ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          {/* Status Badge */}
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-full font-japanese text-shadow-lg ${
              anime.airing
                ? "bg-red-600 text-white animate-glow-pulse"
                : anime.status === "Completed"
                ? "bg-gray-600 text-white"
                : "bg-yellow-600 text-white"
            }`}
          >
            {anime.airing
              ? "放送中"
              : anime.status === "Completed"
              ? "完結"
              : "未定"}
          </span>
        </div>

        {/* Type Badge */}
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-black/60 text-red-400 border border-red-600/50 font-crimson text-shadow-lg">
            {anime.type || "TV"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-red-400 transition-colors duration-300 font-cinzel text-shadow-xl">
          {anime.title_english || anime.title}
        </h3>

        {/* Japanese Title */}
        {anime.title_japanese && (
          <p className="text-sm text-gray-400 mb-2 line-clamp-1 font-japanese text-shadow-lg">
            {anime.title_japanese}
          </p>
        )}

        {/* Info Row */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-3 font-crimson">
          <span className="flex items-center text-shadow-lg">
            <svg
              className="w-4 h-4 mr-1 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {anime.episodes ? `${anime.episodes}話` : "未定"}
          </span>

          {anime.rating && (
            <span className="flex items-center text-shadow-lg">
              <svg
                className="w-4 h-4 mr-1 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {anime.rating.split(" ")[0]}
            </span>
          )}
        </div>

        {/* Duration */}
        {anime.duration && (
          <div className="text-xs text-gray-500 mb-3 font-japanese text-shadow-lg">
            時間: {anime.duration}
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={handleButtonClick}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 font-japanese text-shadow-lg animate-glow-pulse"
        >
          詳細を見る(Get Info)
        </button>
      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
};

export default AnimeCard;
