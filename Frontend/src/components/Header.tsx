import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import routes from "../routes/routes";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate(routes.home);
  };

  return (
    <header className="bg-gradient-to-r from-black via-red-950 to-black border-b-2 border-red-600 shadow-lg shadow-red-900/20 glass">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to={routes.home}
              className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors duration-300 font-cinzel"
            >
              <span className="text-red-600 font-japanese text-glow-red animate-text-flicker">
                漫画
              </span>
              <span className="text-white text-emboss">MAX</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to={routes.home}
                className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-red-950/50 font-japanese text-shadow-lg hover:text-shadow-glow"
              >
                ホーム (Home)
              </Link>

              {user && (
                <Link
                  to={routes.favourites}
                  className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-red-950/50 font-japanese text-shadow-lg hover:text-shadow-glow flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  お気に入り (Favorites)
                </Link>
              )}

              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-300 text-sm font-japanese">
                    こんにちは, {user.username}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-japanese text-shadow-lg"
                  >
                    ログアウト (Logout)
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    to={routes.login}
                    className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-red-950/50 font-japanese text-shadow-lg hover:text-shadow-glow"
                  >
                    ログイン (Login)
                  </Link>
                  <Link
                    to={routes.signup}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-japanese text-shadow-lg animate-glow-pulse"
                  >
                    サインアップ (Sign Up)
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 rounded-lg mt-2">
              <Link
                to={routes.home}
                className="text-gray-300 hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム (Home)
              </Link>

              {user && (
                <Link
                  to={routes.favourites}
                  className="text-gray-300 hover:text-red-400 flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  お気に入り (Favorites)
                </Link>
              )}

              {user ? (
                <div className="border-t border-gray-700 pt-2">
                  <div className="text-gray-300 text-sm px-3 py-2 font-japanese">
                    こんにちは, {user.username}
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  >
                    ログアウト (Logout)
                  </button>
                </div>
              ) : (
                <div className="border-t border-gray-700 pt-2 space-y-1">
                  <Link
                    to={routes.login}
                    className="text-gray-300 hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ログイン (Login)
                  </Link>
                  <Link
                    to={routes.signup}
                    className="bg-red-600 hover:bg-red-700 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    サインアップ (Sign Up)
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
