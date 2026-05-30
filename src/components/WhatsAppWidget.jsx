import React, { useState } from 'react';

const WhatsAppWidget = () => {
  const [hovered, setHovered] = useState(false);
  const url = 'https://wa.me/923160285386?text=Hello!%20I%20found%20your%20website%20and%20would%20like%20to%20enquire%20about%20your%20visa%20and%20immigration%20services.';

  return (
    
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed z-50 flex items-center transition-all duration-300"
      style={{
        bottom: '28px',
        right: '24px',
        gap: '10px',
        textDecoration: 'none'
      }}
    >
      {/* Tooltip */}
      <div className="transition-all duration-300 whitespace-nowrap"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(10px)',
          background: '#0a1628',
          color: 'white',
          padding: '8px 14px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: '600',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          pointerEvents: 'none'
        }}>
        Chat with us
      </div>

      {/* Button */}
      <div style={{ position: 'relative' }}>
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full animate-ping"
          style={{ background: 'rgba(37,211,102,0.3)', animationDuration: '2s' }} />
        <div className="absolute inset-0 rounded-full animate-ping"
          style={{ background: 'rgba(37,211,102,0.15)', animationDuration: '2s', animationDelay: '0.5s' }} />

        {/* Main button */}
        <div
          className="relative flex items-center justify-center rounded-full transition-all duration-300"
          style={{
            width: '58px',
            height: '58px',
            background: hovered
              ? 'linear-gradient(135deg, #20c55a, #25d366)'
              : 'linear-gradient(135deg, #25d366, #20c55a)',
            boxShadow: hovered
              ? '0 8px 30px rgba(37,211,102,0.6)'
              : '0 4px 20px rgba(37,211,102,0.4)',
            transform: hovered ? 'scale(1.12)' : 'scale(1)'
          }}
        >
          {/* WhatsApp SVG Icon */}
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path
              d="M15 2C7.82 2 2 7.82 2 15c0 2.28.6 4.44 1.65 6.32L2 28l6.84-1.62A12.93 12.93 0 0015 28c7.18 0 13-5.82 13-13S22.18 2 15 2z"
              fill="white"
            />
            <path
              d="M21.5 18.3c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z"
              fill="#25d366"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppWidget;
