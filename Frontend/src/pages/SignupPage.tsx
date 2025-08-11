import { useState, type FormEvent } from "react";
import { useAuth } from "../context/AuthContext.tsx";
import { useNavigate } from "react-router-dom";
import "../styles/animations.css";

interface RegisterForm{
  username:string,
  email:string,
  password:string
}

const SignupPage = () => {
    const [formData,setFormData] = useState<RegisterForm>(
      {
        username:'',
        email:'',
        password:''
      }
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const {createUser} = useAuth()
    const navigate = useNavigate()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit =async(e: FormEvent<HTMLFormElement>)=>{

    e.preventDefault();
    setIsLoading(true)
    setError("")

    try {
      await createUser(formData);
      navigate("/login");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }


return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900">
      {/* Japanese Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Traditional Japanese Wave Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-64 text-orange-300">
            <path fill="currentColor" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,112C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
                animationDuration: `${6 + Math.random() * 8}s`
              }}
            >
              <div className="text-orange-300/20 transform rotate-45">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 6.26L17 5L15.74 9.09L20 8L18.74 12.26L23 11L21.74 15.09L26 14L24.74 18.26L29 17L27.74 21.09L32 20L30.74 24.26L35 23L12 12L13 2Z" transform="scale(0.5)"/>
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
                animationDuration: `${8 + Math.random() * 12}s`
              }}
            >
              <div className="text-pink-300/30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C21 10.1 20.1 11 19 11C17.9 11 17 10.1 17 9C17 7.9 17.9 7 19 7C20.1 7 21 7.9 21 9ZM7 9C7 10.1 6.1 11 5 11C3.9 11 3 10.1 3 9C3 7.9 3.9 7 5 7C6.1 7 7 7.9 7 9ZM14.5 16C15.6 16 16.5 16.9 16.5 18C16.5 19.1 15.6 20 14.5 20C13.4 20 12.5 19.1 12.5 18C12.5 16.9 13.4 16 14.5 16ZM9.5 16C10.6 16 11.5 16.9 11.5 18C11.5 19.1 10.6 20 9.5 20C8.4 20 7.5 19.1 7.5 18C7.5 16.9 8.4 16 9.5 16Z"/>
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

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-4">
          {/* Header Section with Japanese/Naruto Style */}
          <div className="text-center transform transition-all duration-1000 ease-out animate-fade-in-up">
            <div className="mb-8">
              {/* Ninja Headband Style Icon */}
              <div className="relative inline-flex items-center justify-center w-28 h-28 mt-4">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full shadow-2xl animate-bounce-slow"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-orange-900 to-red-900 rounded-full"></div>
                <div className="relative z-10 flex items-center justify-center">
                  {/* Konoha Symbol Style */}
                  <svg className="w-16 h-16 text-orange-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4V8C16.2 8.6 18 10.6 18 13C18 15.4 16.2 17.4 14 18V20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20V18C7.8 17.4 6 15.4 6 13C6 10.6 7.8 8.6 10 8V4C10 2.9 10.9 2 12 2M12 10C10.3 10 9 11.3 9 13C9 14.7 10.3 16 12 16C13.7 16 15 14.7 15 13C15 11.3 13.7 10 12 10Z"/>
                  </svg>
                </div>
                {/* Headband Stripes */}
                <div className="absolute -left-8 top-1/2 w-16 h-3 bg-gradient-to-r from-orange-600 to-red-600 transform -translate-y-1/2 rounded-full"></div>
                <div className="absolute -right-8 top-1/2 w-16 h-3 bg-gradient-to-r from-red-600 to-orange-600 transform -translate-y-1/2 rounded-full"></div>
              </div>
              
              <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 bg-clip-text text-transparent mb-2 font-serif">
                忍者登録
              </h2>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent mb-4">
                Join MangaMax
              </h3>
              
              {/* Japanese Style Divider */}
              <div className="flex items-center justify-center space-x-4 ">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
                <div className="text-orange-300 text-2xl">卍</div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
              </div>
              
           
              
    
            </div>
          </div>
          
          {/* Japanese Style Scroll Card */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-orange-100/10 to-red-100/10 border-2 border-orange-300/30 rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-orange-500/25 overflow-hidden animate-slide-up">
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
              {error && (
                <div className="mb-4 bg-red-600/20 border-2 border-red-400/40 text-red-100 px-4 py-3 rounded-lg text-sm backdrop-blur-sm animate-shake">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </div>
                </div>
              )}
            
            <form className="" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <div className="group">
                  <label htmlFor="username" className="block text-sm font-medium text-orange-200/90 mb-2 transition-colors group-hover:text-orange-100">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Ninja Name (忍者名)
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      className="block w-full px-4 py-3 bg-orange-100/10 border-2 border-orange-300/30 rounded-lg text-orange-100 placeholder-orange-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 backdrop-blur-sm hover:bg-orange-100/20 focus:scale-105"
                      placeholder="Enter your ninja name"
                      value={formData.username}
                      onChange={handleInputChange}
                      disabled={isLoading}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-orange-200/90 mb-2 transition-colors group-hover:text-orange-100">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      Contact Scroll (連絡先)
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full px-4 py-3 bg-orange-100/10 border-2 border-orange-300/30 rounded-lg text-orange-100 placeholder-orange-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 backdrop-blur-sm hover:bg-orange-100/20 focus:scale-105"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isLoading}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="password" className="block text-sm font-medium text-orange-200/90 mb-2 transition-colors group-hover:text-orange-100">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Secret Jutsu (秘密術)
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="block w-full px-4 py-3 bg-orange-100/10 border-2 border-orange-300/30 rounded-lg text-orange-100 placeholder-orange-200/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300 backdrop-blur-sm hover:bg-orange-100/20 focus:scale-105"
                      placeholder="Create your secret password"
                      value={formData.password}
                      onChange={handleInputChange}
                      disabled={isLoading}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                {/* Ninja Scroll Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-4 px-6 border-2 border-orange-400/50 text-lg font-bold rounded-lg text-orange-100 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 hover:from-orange-700 hover:via-red-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 overflow-hidden font-serif"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-orange-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="bg-gradient-to-r from-orange-100 to-yellow-100 bg-clip-text text-transparent">
                          忍者登録中...
                        </span>
                      </>
                    ) : (
                      <span className="bg-gradient-to-r from-orange-100 to-yellow-100 bg-clip-text text-transparent flex items-center">
                        忍者になる (Become a Ninja)
                        <svg className="ml-2 w-5 h-5 text-orange-200 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    )}
                  </div>
                </button>

             
              </div>

              <div className="text-center pt-4">
                <p className="text-orange-200/80">
                  Already a ninja?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/login')}
                    className="font-semibold text-orange-100 hover:text-yellow-200 transition-colors duration-300 underline decoration-orange-400 underline-offset-4 hover:decoration-yellow-400 transform hover:scale-105 inline-block"
                  >
                    里に戻る (Return to Village)
                  </button>
                </p>
              </div>
            </form>
            </div>
          </div>

          {/* Japanese Style Footer */}
          <div className="text-center text-orange-300/60 text-sm animate-fade-in">
            <p>By joining, you agree to follow the 
              <span className="text-orange-200 hover:text-orange-100 transition-colors cursor-pointer"> Way of the Ninja</span> and our 
              <span className="text-orange-200 hover:text-orange-100 transition-colors cursor-pointer"> Village Rules</span>
            </p>
            <div className="mt-2 text-orange-400/40 text-xs">
              道は忍にあり - The way lies in the ninja
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage