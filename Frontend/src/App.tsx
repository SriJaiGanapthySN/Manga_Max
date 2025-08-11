import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage.tsx";
import route from "./routes/routes.ts";
import SignupPage from "./pages/SignupPage";
import { AuthProvider } from "./context/AuthContext.tsx";
import { AnimeProvider } from "./context/AnimeContext.tsx";
import AnimeDetails from "./pages/AnimeDetails.tsx";
import AnimesByGenre from "./pages/AnimesByGenre.tsx";
import SearchResults from "./pages/SearchResults.tsx";
import FavouritesPage from "./pages/FavouritesPage.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AnimeProvider>
            <Routes>
              <Route path={route.home} element={<HomePage />} />
              <Route path={route.signup} element={<SignupPage />} />
              <Route path={route.login} element={<LoginPage />} />
              <Route path={route.animedetails} element={<AnimeDetails />} />
              <Route path={route.animebygenre} element={<AnimesByGenre />} />
              <Route path={route.searchresults} element={<SearchResults />} />
              <Route path={route.favourites} element={<FavouritesPage />} />
            </Routes>
          </AnimeProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
