import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-[#081326] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#081326] via-[#0c1d3d] to-[#112857]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-semibold">
              EST. 2006 • Trusted Global Immigration Partner
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight">
              Your Gateway To
              <span className="block text-[#D4AF37]">
                Global Opportunities
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-xl">
              Expert visa, immigration, study abroad, and travel solutions
              helping individuals and families achieve their international goals
              with confidence.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#consultation"
                className="px-8 py-4 rounded-lg bg-[#D4AF37] text-[#081326] font-semibold hover:scale-105 transition"
              >
                Book Free Consultation
              </a>

              <a
                href="#services"
                className="px-8 py-4 rounded-lg border border-white/20 hover:bg-white/10 transition"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]">19+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]">2000+</h3>
                <p className="text-gray-400">Approved Cases</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]">90%</h3>
                <p className="text-gray-400">Success Rate</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#D4AF37]">50+</h3>
                <p className="text-gray-400">Destinations</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <img
                src="/world-map.png"
                alt="Global Immigration Network"
                className="w-full"
              />

              <div className="absolute top-6 left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-sm text-gray-500">
                  Approved Cases
                </div>
                <div className="text-3xl font-bold text-[#081326]">
                  2,000+
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-sm text-gray-500">
                  Countries Served
                </div>
                <div className="text-3xl font-bold text-[#081326]">
                  50+
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
