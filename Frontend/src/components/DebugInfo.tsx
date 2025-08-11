import { useAuth } from "../context/AuthContext";
import { useAnime } from "../context/AnimeContext";

const DebugInfo = () => {
  const { user, token, loading: authLoading } = useAuth();
  const { animes, favourites, loading: animeLoading } = useAnime();

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        background: "rgba(0,0,0,0.8)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "12px",
        maxWidth: "300px",
        zIndex: 9999,
      }}
    >
      <h4>Debug Info</h4>
      <div>Auth Loading: {authLoading ? "Yes" : "No"}</div>
      <div>Anime Loading: {animeLoading ? "Yes" : "No"}</div>
      <div>
        User: {user ? `${user.username} (${user._id})` : "Not logged in"}
      </div>
      <div>Token: {token ? "Present" : "Missing"}</div>
      <div>Animes: {animes.length}</div>
      <div>Favourites: {favourites.length}</div>
      <div>Favourite IDs: {JSON.stringify(favourites)}</div>
    </div>
  );
};

export default DebugInfo;
