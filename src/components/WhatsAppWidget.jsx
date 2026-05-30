import React, { useState } from 'react';
import { X } from 'lucide-react';

const WA_NUMBERS = [
  { label: 'Sales & Visa Enquiries', number: '923160285386', display: '+92 316 0285386' },
  { label: 'Support & Follow-up',    number: '923030411114', display: '+92 303 0411114' },
];

const WA_MESSAGE = encodeURIComponent(
  'Hello! I found your website and I would like to know more about your visa and immigration services.'
);

const WhatsAppIcon = ({ size = 32, color = 'white' }) => (
  <svg viewBox="0 0 32 32" fill={color} width={size} height={size} aria-hidden="true">
    <path d="M16.002 3C9.375 3 4 8.373 4 15c0 2.387.68 4.614 1.856 6.502L4 29l7.686-1.822A12.938 12.938 0 0016.002 28C22.629 28 28 22.627 28 16S22.629 3 16.002 3zm0 23.5c-2.118 0-4.1-.593-5.789-1.623l-.415-.248-4.558 1.08 1.117-4.43-.27-.44A10.46 10.46 0 015.5 16c0-5.79 4.712-10.5 10.502-10.5S26.5 10.21 26.5 16 21.79 26.5 16.002 26.5zm5.77-7.87c-.316-.158-1.87-.921-2.159-1.027-.29-.106-.5-.158-.71.158-.21.316-.814 1.027-.998 1.237-.184.21-.368.237-.684.079-.316-.158-1.334-.491-2.54-1.567-.938-.836-1.571-1.869-1.755-2.185-.184-.316-.02-.487.138-.644.143-.142.316-.37.474-.554.158-.184.21-.316.316-.527.105-.21.053-.395-.026-.554-.079-.158-.71-1.713-.973-2.345-.256-.615-.516-.532-.71-.542l-.605-.01c-.21 0-.553.079-.843.395-.29.316-1.105 1.08-1.105 2.634s1.131 3.054 1.289 3.264c.158.21 2.226 3.395 5.392 4.762.754.325 1.342.519 1.8.664.757.24 1.447.206 1.991.125.607-.09 1.87-.765 2.133-1.503.263-.738.263-1.37.184-1.503-.079-.132-.29-.21-.605-.368z"/>
  </svg>
);

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);

  const buildUrl = (number) => {
    return 'https://wa.me/' + number + '?text=' + WA_MESSAGE;
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      aria-label="WhatsApp contact widget"
    >
      {/* Chooser Panel */}
      {open && (
        <div
          className="w-72 bg-white rounded-2xl shadow-2xl overflow-hidden"
          style={{ border: '1px solid #f0f0f0' }}
          role="dialog"
        >
          {/* Panel Header */}
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{ background: '#25D366' }}
          >
            <div className="flex items-center gap-3">
              <WhatsAppIcon size={28} color="white" />
              <div>
                <p className="text-white font-bold text-sm leading-tight">
                  Accurate Consultancy
                </p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Typically replies within minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'rgba(255,255,255,0.2)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            >
              <X size={14} className="text-white" />
            </button>
          </div>

          {/* Number Options */}
          <div className="p-4 space-y-2">
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: '#9ca3af' }}
            >
              Choose a number to chat
            </p>
            {WA_NUMBERS.map(function(item) {
              return (
                
                  key={item.number}
                  href={buildUrl(item.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200"
                  style={{ border: '1px solid #f0f0f0', display: 'flex', textDecoration: 'none' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(37,211,102,0.4)';
                    e.currentTarget.style.background = '#f0fdf4';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#f0f0f0';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(37,211,102,0.1)' }}
                  >
                    <WhatsAppIcon size={20} color="#25D366" />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: '#9ca3af' }}>{item.label}</p>
                    <p className="text-sm font-bold" style={{ color: '#0a1628' }}>{item.display}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <p className="text-center text-xs pb-3" style={{ color: '#d1d5db' }}>
            Opens WhatsApp in a new tab
          </p>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative">
        {/* Pulse ring when closed */}
        {!open && (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full animate-ping pointer-events-none"
            style={{ background: 'rgba(37,211,102,0.35)' }}
          />
        )}

        <button
          onClick={() => setOpen(function(v) { return !v; })}
          aria-label={open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
          aria-expanded={open}
          className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            background: '#25D366',
            boxShadow: '0 6px 25px rgba(37,211,102,0.5)'
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 35px rgba(37,211,102,0.7)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 6px 25px rgba(37,211,102,0.5)'}
        >
          {open
            ? <X size={26} className="text-white" />
            : <WhatsAppIcon size={32} color="white" />
          }
        </button>
      </div>
    </div>
  );
};

export default WhatsAppWidget;
