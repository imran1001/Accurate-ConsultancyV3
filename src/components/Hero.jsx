return (
  <section
    className="relative min-h-screen flex items-center bg-[#081326] overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#081326] via-[#0B1D3A] to-[#081326]" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-semibold mb-6">
            Trusted Since 2006 • 2000+ Successful Cases
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Trusted Visa &
            <span className="block text-[#D4AF37]">
              Immigration Consultants
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
            Helping students, professionals, families and travelers secure
            visas, study permits, work permits and immigration pathways to
            Canada, UK, Australia, Europe and other leading destinations
            worldwide.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#consultation"
              className="px-8 py-4 bg-[#D4AF37] text-[#081326] font-bold rounded-xl hover:scale-105 transition"
            >
              Book Free Consultation
            </a>

            <a
              href="#services"
              className="px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition"
            >
              Check Eligibility
            </a>
          </div>

          {/* Trust Row */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-300">
            <span>⭐⭐⭐⭐⭐ 4.9/5 Client Rating</span>
            <span>✓ 2000+ Successful Cases</span>
            <span>✓ Trusted Since 2006</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl font-bold text-[#D4AF37]">
                {yearsCount}+
              </div>
              <p className="text-slate-400 text-sm mt-2">
                Years Experience
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl font-bold text-[#D4AF37]">
                {successCount}%
              </div>
              <p className="text-slate-400 text-sm mt-2">
                Success Rate
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl font-bold text-[#D4AF37]">
                {casesCount}+
              </div>
              <p className="text-slate-400 text-sm mt-2">
                Successful Cases
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl font-bold text-[#D4AF37]">
                {countriesCount}+
              </div>
              <p className="text-slate-400 text-sm mt-2">
                Destinations
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-4">

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-5xl mb-4">🇨🇦</div>
            <h3 className="text-white font-bold text-xl">
              Canada
            </h3>
            <p className="text-slate-400 mt-2">
              Study Visa • Work Permit • PR
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-5xl mb-4">🇬🇧</div>
            <h3 className="text-white font-bold text-xl">
              United Kingdom
            </h3>
            <p className="text-slate-400 mt-2">
              Student Visa • Visitor Visa
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-5xl mb-4">🇦🇺</div>
            <h3 className="text-white font-bold text-xl">
              Australia
            </h3>
            <p className="text-slate-400 mt-2">
              Student Visa • Skilled Migration
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-5xl mb-4">🇺🇸</div>
            <h3 className="text-white font-bold text-xl">
              United States
            </h3>
            <p className="text-slate-400 mt-2">
              F1 Visa • Visitor Visa
            </p>
          </div>

        </div>

      </div>
    </div>
  </section>
);
