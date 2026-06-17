export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#031124] overflow-x-hidden pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Main Wrapper: Stack vertically on mobile, side-by-side on desktop */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 text-left z-10">
          
          {/* Tagline Badge */}
          <span className="inline-block text-xs font-semibold tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full mb-6 uppercase">
            Travel • Visa & Immigration • Business Consultancy
          </span>
          
          {/* Responsive Heading: Scaled down for mobile, large on desktop */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight break-words">
            Trusted Visa & <br className="hidden sm:inline" />
            <span className="text-[#D4AF37]">Immigration Consultants</span>
          </h1>
          
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-xl">
            Premium consultancy delivering seamless pathways to your dream destinations. 
            We help professionals, families, and businesses secure visas with uncompromising excellence.
          </p>
          
          {/* Responsive Buttons: Stack on tiny screens, inline on mobile/tablet */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-gray-900 font-bold rounded-full shadow-lg hover:opacity-90 transition-all duration-300">
              Get Started Today →
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300">
              Explore Services
            </button>
          </div>
        </div>

        {/* Right Side: Globe Graphics / Cards Wrapper */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[350px] sm:min-h-[450px]">
          {/* Your Globe Canvas / Component goes here */}
          {/* Ensure its container is set to absolute or relative max-w-full so it doesn't spill out */}
        </div>

      </div>
    </section>
  );
}
