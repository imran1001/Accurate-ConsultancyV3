import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

const WA_NUMBERS = [
  { label: 'Sales & Visa Enquiries', number: '923160285386', display: '+92 316 0285386' },
  { label: 'Support & Follow-up',    number: '923030411114', display: '+92 303 0411114' },
];

const WA_MESSAGE = encodeURIComponent(
  'Hello! I found your website and I would like to know more about your visa and immigration services.'
);

/**
 * Floating WhatsApp widget — fixed bottom-right, always on top.
 * Opens a small chooser panel when clicked so the user can pick
 * which number to open in WhatsApp.
 */
export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3"
      aria-label="WhatsApp contact widget"
    >
      {/* ── Chooser Panel ──────────────────────────── */}
      {open && (
        <div
          className="w-72 bg-white rounded-2xl shadow-2xl border border-gray-100
                     overflow-hidden animate-fade-up"
          role="dialog"
          aria-label="Choose a WhatsApp number"
        >
          {/* Header */}
          <div className="bg-[#25D366] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* WhatsApp SVG icon (no external dependency) */}
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
                         flex items-center justify-center transition-colors"
            >
              <X size={14} className="text-white" />
            </button>
          </div>

          {/* Number options */}
          <div className="p-4 space-y-2.5">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">
              Choose a number to chat
            </p>
            {WA_NUMBERS.map(({ label, number, display }) => (
              <a
                key={number}
                href={`https://wa.me/${number}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${label}: ${display}`}
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-100
                           hover:border-[#25D366]/50 hover:bg-green-50
                           transition-all duration-200 group"
              >
                <div
                  className="w-10 h-10 bg-[#25D366]/10 group-hover:bg-[#25D366]/20
                              rounded-full flex items-center justify-center shrink-0
                              transition-colors"
                >
                  <svg
                    viewBox="0 0 32 32"
                    fill="#25D366"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M16.002 3C9.375 3 4 8.373 4 15c0 2.387.68 4.614 1.856 6.502L4 29l7.686-1.822A12.938 12.938 0 0016.002 28C22.629 28 28 22.627 28 16S22.629 3 16.002 3zm0 23.5c-2.118 0-4.1-.593-5.789-1.623l-.415-.248-4.558 1.08 1.117-4.43-.27-.44A10.46 10.46 0 015.5 16c0-5.79 4.712-10.5 10.502-10.5S26.5 10.21 26.5 16 21.79 26.5 16.002 26.5zm5.77-7.87c-.316-.158-1.87-.921-2.159-1.027-.29-.106-.5-.158-.71.158-.21.316-.814 1.027-.998 1.237-.184.21-.368.237-.684.079-.316-.158-1.334-.491-2.54-1.567-.938-.836-1.571-1.869-1.755-2.185-.184-.316-.02-.487.138-.644.143-.142.316-.37.474-.554.158-.184.21-.316.316-.527.105-.21.053-.395-.026-.554-.079-.158-.71-1.713-.973-2.345-.256-.615-.516-.532-.71-.542l-.605-.01c-.21 0-.553.079-.843.395-.29.316-1.105 1.08-1.105 2.634s1.131 3.054 1.289 3.264c.158.21 2.226 3.395 5.392 4.762.754.325 1.342.519 1.8.664.757.24 1.447.206 1.991.125.607-.09 1.87-.765 2.133-1.503.263-.738.263-1.37.184-1.503-.079-.132-.29-.21-.605-.368z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 truncate">{label}</p>
                  <p className="text-sm font-semibold text-gray-800">{display}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-center text-[11px] text-gray-300 pb-3">
            Opens WhatsApp in a new tab
          </p>
        </div>
      )}

      {/* ── Floating Button ────────────────────────── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
        aria-expanded={open}
        className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center
                   bg-[#25D366] hover:bg-[#1da851]
                   transition-all duration-300 hover:scale-110 active:scale-95
                   focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        {open ? (
          <X size={26} className="text-white" aria-hidden="true" />
        ) : (
          <svg
            viewBox="0 0 32 32"
            fill="white"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path d="M16.002 3C9.375 3 4 8.373 4 15c0 2.387.68 4.614 1.856 6.502L4 29l7.686-1.822A12.938 12.938 0 0016.002 28C22.629 28 28 22.627 28 16S22.629 3 16.002 3zm0 23.5c-2.118 0-4.1-.593-5.789-1.623l-.415-.248-4.558 1.08 1.117-4.43-.27-.44A10.46 10.46 0 015.5 16c0-5.79 4.712-10.5 10.502-10.5S26.5 10.21 26.5 16 21.79 26.5 16.002 26.5zm5.77-7.87c-.316-.158-1.87-.921-2.159-1.027-.29-.106-.5-.158-.71.158-.21.316-.814 1.027-.998 1.237-.184.21-.368.237-.684.079-.316-.158-1.334-.491-2.54-1.567-.938-.836-1.571-1.869-1.755-2.185-.184-.316-.02-.487.138-.644.143-.142.316-.37.474-.554.158-.184.21-.316.316-.527.105-.21.053-.395-.026-.554-.079-.158-.71-1.713-.973-2.345-.256-.615-.516-.532-.71-.542l-.605-.01c-.21 0-.553.079-.843.395-.29.316-1.105 1.08-1.105 2.634s1.131 3.054 1.289 3.264c.158.21 2.226 3.395 5.392 4.762.754.325 1.342.519 1.8.664.757.24 1.447.206 1.991.125.607-.09 1.87-.765 2.133-1.503.263-.738.263-1.37.184-1.503-.079-.132-.29-.21-.605-.368z"/>
          </svg>
        )}
      </button>

      {/* Pulse ring when closed */}
      {!open && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-16 h-16 rounded-full
                     bg-[#25D366] opacity-40 animate-ping pointer-events-none"
        />
      )}
    </div>
  );
}
