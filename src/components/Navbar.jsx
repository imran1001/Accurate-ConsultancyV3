<div className="flex items-center justify-between">
          
          {/* ===== LEFT: DESKTOP LINKS (Now on the left) ===== */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive 
                      ? 'text-[#D4AF37] drop-shadow-[0_0_8px_rgba(214,175,55,0.3)]' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-full transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* ===== RIGHT: BRAND LOGO (Now on the right) ===== */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group relative ml-auto"
            onClick={() => scrollTo('hero')}
          >
            <div className="relative flex items-center">
              <div 
                className="absolute inset-0 blur-2xl opacity-50 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(214,175,55,0.45), transparent 70%)',
                  transform: 'scale(1.8)',
                }}
              />
              <img
                src="/logo.webp"
                alt="Accurate Consultancy Logo"
                width="240"
                height="80"
                className="relative h-14 sm:h-17 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-[1.02]"
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(214,175,55,0.18))',
                }}
              />
            </div>
          </div>
          
          {/* Note: You may want to move the "Book Consultation" button to the far left or adjust spacing 
              since the logo is now occupying the right-hand visual weight. */}
        </div>
