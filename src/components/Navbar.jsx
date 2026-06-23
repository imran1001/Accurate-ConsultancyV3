import { useState, useEffect } from 'react'; import { Phone, Mail, ChevronRight } from 'lucide-react';

export default function Navbar() { const [isOpen, setIsOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const [activeSection, setActiveSection] = useState('hero');

useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 20);

  const sections = ['hero', 'services', 'destinations', 'about', 'consultation'];
  const scrollPosition = window.scrollY + 140;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        setActiveSection(section);
        break;
      }
    }
  }
};

window.addEventListener('scroll', handleScroll, { passive: true });
return () => window.removeEventListener('scroll', handleScroll);

}, []);

const scrollTo = (id) => { const el = document.getElementById(id); if (el) { const top = el.getBoundingClientRect().top + window.pageYOffset - 90; window.scrollTo({ top, behavior: 'smooth' }); } setIsOpen(false); };

const navItems = [ { label: 'Services', id: 'services' }, { label: 'Destinations', id: 'destinations' }, { label: 'About', id: 'about' }, { label: 'Contact', id: 'consultation' }, ];

return (

  {/* ===== HIGH-CONTRAST SLIM UTILITY STRIP ===== */}
  


    


      
        
        +92 316 0285386
      
      
      @accurate-consultancy.com" 
        className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors group/utility"
      >
        <Mail size={12} className="text-[#D4AF37] group-hover/utility:text-white transition-colors" />
        info@accurate-consultancy.com
      
    
  

  {/* ===== MAIN NAV ===== */}
  
    


      



        {/* ===== BRAND LOGO (Corner Anchored) ===== */}
        

scrollTo('hero')} >

        {/* ===== DESKTOP LINKS ===== */}
        


          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
               scrollTo(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? 'text-[#D4AF37] bg-[#D4AF37]/[0.08]'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
                
              
            );
          })}
        



        {/* ===== DESKTOP "GHOST" CTA ===== */}
        


           scrollTo('consultation')}
            className="group relative px-6 py-3 border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white bg-transparent hover:bg-[#D4AF37]/10 font-black text-[10px] uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(214,175,55,0.05)] hover:shadow-[0_0_25px_rgba(214,175,55,0.2)] hover:-translate-y-0.5"
          >
            Book Consultation
            
          
        



        {/* ===== MOBILE TRIGGER ===== */}
        


           setIsOpen(!isOpen)}
            type="button"
            className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300 focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle main menu"
          >
            


              
              
              
            


            {!isOpen && (
              
            )}
          
        


      


    



    {/* ===== MOBILE DRAWER ===== */}
    


      


        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
             scrollTo(item.id)}
              className={`block w-full text-left px-4 py-4 rounded-md uppercase tracking-widest transition-all duration-200 ${
                isActive ? 'text-[#D4AF37] bg-[#D4AF37]/15 border-l-2 border-[#D4AF37]' : 'text-gray-100 hover:text-white active:bg-white/10'
              }`}
              style={{ animation: isOpen ? `mobileNavFadeSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s both` : 'none' }}
            >
              


                {item.label}
                {isActive && }
              


            
          );
        })}

        


           scrollTo('consultation')}
            className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-gray-950 font-black text-xs uppercase tracking-widest rounded-sm text-center shadow-lg active:scale-[0.98] transition-transform"
          >
            Book Consultation
          

          {/* HIGH-VISIBILITY MOBILE DETAILS */}
          


            
               
              +92 316 0285386
            
            


            @accurate-consultancy.com" 
              className="hover:text-[#D4AF37] active:text-[#D4AF37] py-1 flex items-center gap-2 justify-center sm:justify-start group/mob"
            >
              <Mail size={13} className="text-[#D4AF37] group-hover/mob:text-white transition-colors" /> 
              info@accurate-consultancy.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <style>{`
    @keyframes mobileNavFadeSlide {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
</header>
