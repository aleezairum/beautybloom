export default function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="gradient-text text-shadow-glow">Illuminate</span><br />
              <span className="text-white">Your Beauty</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              The next generation of photonic skincare technology for radiant, age-defying results that transform your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToProducts}
                className="px-8 py-4 bg-transparent border-2 border-orange-500 text-white rounded-full font-bold hover:bg-orange-500 hover:bg-opacity-20 transition-all duration-300 hover:animate-glow hover-scale"
              >
                <i className="fas fa-sparkles mr-2"></i>
                Discover Collection
              </button>
              <button className="px-8 py-4 bg-transparent text-white rounded-full font-bold flex items-center justify-center space-x-2 hover:text-orange-500 transition-colors duration-300 hover-scale">
                <span>Explore Technology</span>
                <i className="fa-solid fa-circle-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-orange-500 opacity-10 blur-3xl animate-float" style={{animationDelay: "0s"}}></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 rounded-full bg-orange-400 opacity-5 blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-orange-500 opacity-8 blur-3xl animate-float" style={{animationDelay: "4s"}}></div>
      </div>
    </section>
  );
}
