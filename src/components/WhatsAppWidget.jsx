import { useState } from 'react';
import { X } from 'lucide-react';

const WA_NUMBERS = [
  { label: 'Sales & Visa Enquiries', number: '923160285386', display: '+92 316 0285386' },
  { label: 'Support & Follow-up',   number: '923030411114', display: '+92 303 0411114' },
];

const WA_MESSAGE = encodeURIComponent(
  'Hello! I found your website and I would like to know more about your visa and immigration services.'
);

/**
 * Clean, merged Floating WhatsApp widget.
 * Combines dual-pulse anchor button tracking with a multi-agent routing menu panel.
 */
export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-7 right-6 z-[90] flex flex-col items-end gap-3 select-none"
      aria-label="WhatsApp contact widget"
    >
      {/* ── CHOOSER PANEL ──────────────────────────── */}
      {open && (
        <div
          className="w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 
                     overflow-hidden transition-all duration-300 transform translate-y-0 animate-fade-up"
          role="dialog"
          aria-label="Choose a WhatsApp number"
        >
          {/* Header */}
          <div className="bg-[#25D366] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 32 32"
                fill="white"
                className="w-7 h-7 shrink-0"
                aria-hidden="true"
              >
                <path d="M16.002 3C9.375 3 4 8.373 4 15c0 2.387.68 4.614 1.856 6.502L4 29l7.686-1.822A12.938 12.938 0 0016.002 28C22.629 28 28 22.627 28 16S22.629 3 16.002 3zm0 23.5c-2.118 0-4.1-.593-5.789-1.623l-.415-.248-4.558 1.08 1.117-4.43-.27-.44A10.46 10.46 0 015.5 16c0-5.79 4.712-10.5 10.502-10.5S26.5 10.21 26.5 16 21.79 26.5 16.002 26.5zm5.77-7.87c-.316-.158-1.87-.921-2.159-1.027-.29-.106-.5-.158-.71.158-.21.316-.814 1.027-.998 1.237-.184.21-.368.237-.684.079-.316-.158-1.334-.491-2.54-1.567-.938-.836-1.571-1.869-1.755-2.185-.184-.316-.02-.487.138-.644.143-.142.316-.37.474-.554.158-.184.21-.316.316-.527.105-.21.053-.395-.026-.554-.079-.158-.71-1.713-.973-2.345-.256-.615-.516-.532-.71-.542l-.605-.01c-.21 0-.553.079-.843.395-.29.316-1.105 1.08-1.105 2.634s1.131 3.054 1.289 3.264c.158.21 2.226 3.395 5.392 4.762.754.325 1.342.519 1.8.664.757.24 1.447.206 1.991.125.607-.09 1.87-.765 2.133-1.503.263-.738.263-1.37.184-1.503-.079-.132-.29-.21-.605-.368z"/>
              </svg>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Accurate Consultancy</p>
                <p className="text-white/80 text-xs">Typically replies within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp panel"
              className="w-7 h-7 bg-white/20 hover:bg-white/40 rounded-full
                         flex items-center justify-center transition-colors focus:outline-none"
            >
              <X size={14} className="text-white" />
            </button>
          </div>

          {/* Connection List */}
          <div className="p-4 space-y-2.5 bg-white">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">
              Choose a department to chat
            </p>
            {WA_NUMBERS.map(({ label, number, display }) => (
              <a
                key={number}
                href={`https://wa.me/${number}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${label}: ${display}`}
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-100
                           hover:border-[#25D366]/40 hover:bg-green-50/50 hover:shadow-sm
                           transition-all duration-200 group no-underline"
              >
                <div className="w-9 h-9 bg-[#25D366]/10 group-hover:bg-[#25D366]/20
                                rounded-full flex items-center justify-center shrink-0
                                transition-colors"
                >
                  <svg
                    viewBox="0 0 32 32"
                    fill="#25D366"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M16.002 3C9.375 3 4 8.373 4 15c0 2.387.68 4.614 1.856 6.502L4 29l7.686-1.822A12.938 12.938 0 0016.002 28C22.629 28 28 22.627 28 16S22.629 3 16.002 3zm0 23.5c-2.118 0-4.1-.593-5.789-1.623l-.415-.248-4.558 1.08 1.117-4.43-.27-.44A10.46 10.46 0 015.5 16c0-5.79 4.712-10.5 10.502-10.5S26.5 10.21 26.5 16 21.79 26.5 16.002 26.5zm5.77-7.87c-.316-.158-1.87-.921-2.159-1.027-.29-.106-.5-.158-.71.158-.21.316-.814 1.027-.998 1.237-.184.21-.368.237-.684.079-.316-.158-1.334-.491-2.54-1.567-.938-.836-1.571-1.869-1.755-2.185-.184-.316-.02-.487.138-.644.143-.142.316-.37.474-.554.158-.184.21-.316.316-.527.105-.21.053-.395-.026-.554-.079-.158-.71-1.713-.973-2.345-.256-.615-.516-.532-.71-.542l-.605-.01c-.21 0-.553.079-.843.395-.29.316-1.105 1.08-1.105 2.634s1.131 3.054 1.289 3.264c.158.21 2.226 3.395 5.392 4.762.754.325 1.342.519 1.8.664.757.24 1.447.206 1.991.125.607-.09 1.77-.765 2.133-1.503.263-.738.263-1.37.184-1.503-.079-.132-.29-.21-.605-.368z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-gray-400 font-medium truncate leading-none mb-1">{label}</p>
                  <p className="text-sm font-semibold text-gray-800 tracking-wide">{display}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Footer Note */}
          <div className="bg-gray-50 border-t border-gray-100 py-2.5 text-center">
            <p className="text-[10px] text-gray-400">
              Opens WhatsApp in a new tab
            </p>
          </div>
        </div>
      )}

      {/* ── MAIN ACTION TRIGGER BUTTON ──────────────── */}
      <div className="flex items-center gap-2.5">
        {/* Animated Hover Tooltip text */}
        <div 
          className={`transition-all duration-300 bg-[#0a1628] text-white px-3.5 py-2 
                     rounded-full text-xs font-semibold shadow-lg pointer-events-none whitespace-nowrap
                     ${hovered && !open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
        >
          Chat with us
        </div>

        <div className="relative">
          {/* Dual Ripple / Pulse Effects (Active when widget panel is closed) */}
          {!open && (
            <>
              <div 
                className="absolute inset-0 rounded-full animate-ping pointer-events-none bg-[#25D366] opacity-30" 
                style={{ animationDuration: '2s' }} 
              />
              <div 
                className="absolute inset-0 rounded-full animate-ping pointer-events-none bg-[#25D366] opacity-15" 
                style={{ animationDuration: '2s', animationDelay: '0.5s' }} 
              />
            </>
          )}

          <button
            onClick={() => setOpen((prev) => !prev)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label={open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
            aria-expanded={open}
            className="w-[58px] h-[58px] rounded-full shadow-2xl flex items-center justify-center text-white relative z-10
                       bg-gradient-to-br from-[#25d366] to-[#20c55a] hover:from-[#20c55a] hover:to-[#25d366]
                       transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[#25d366]/40
                       focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
          >
            {open ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                <path
                  d="M15 2C7.82 2 2 7.82 2 15c0 2.28.6 4.44 1.65 6.32L2 28l6.84-1.62A12.93 12.93 0 0015 28c7.18 0 13-5.82 13-13S22.18 2 15 2z"
                  fill="white"
                />
                <path
                  d="M21.5 18.3c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z"
                  fill="#25d366"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
