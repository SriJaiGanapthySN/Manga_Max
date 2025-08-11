const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-black via-red-950 to-gray-900 overflow-hidden bg-pattern-circuit bg-noise animate-bg-shift">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-black/20" />
        <div className="absolute inset-0 bg-pattern-dots" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-twinkle" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full animate-twinkle animation-delay-1000" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-red-600 rounded-full animate-twinkle animation-delay-2000" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-500 rounded-full animate-twinkle animation-delay-500" />
        
        {/* Floating smoke particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-900/30 rounded-full blur-sm animate-smoke-rise" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-red-800/20 rounded-full blur-sm animate-smoke-rise animation-delay-2000" />
        <div className="absolute top-1/2 left-3/4 w-5 h-5 bg-red-700/10 rounded-full blur-sm animate-smoke-rise animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up font-cinzel">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 animate-gradient-x text-outline">
              漫画MAX
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-500 font-japanese text-shadow-xl">
            究極のアニメ体験への扉
          </p>
          
          {/* English Subtitle */}
          <p className="text-lg text-red-400 mb-8 animate-fade-in-up animation-delay-1000 font-crimson italic text-shadow-glow">
            The Ultimate Anime Experience Awaits
          </p>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-1000">
            <p className="text-gray-400 text-lg leading-relaxed font-crimson text-shadow-lg">
              血と鋼の世界で織りなされる壮大な物語。運命に立ち向かう戦士たちの魂を感じよ。
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-2000">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg shadow-lg shadow-red-900/50 hover:shadow-red-600/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              <span className="relative z-10">アニメを探索</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-8 py-4 border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              トレーラーを見る
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up animation-delay-4000">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-500">1000+</div>
              <div className="text-sm text-gray-400">アニメ作品</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-500">24/7</div>
              <div className="text-sm text-gray-400">ストリーミング</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-500">4K</div>
              <div className="text-sm text-gray-400">高画質</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Side Decorations */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-red-600 to-transparent" />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-red-600 to-transparent" />
    </section>
  );
};

export default HeroSection;
