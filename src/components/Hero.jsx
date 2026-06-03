{/* ANIMATED ROTATING GLOBE WITH STARS */}
<div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 pointer-events-none">
  {/* Rotating Orbit */}
  <svg
    className="absolute inset-0 w-full h-full"
    style={{
      animation: 'rotateOrbit 30s linear infinite',
    }}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Globe Circle */}
    <circle
      cx="100"
      cy="100"
      r="60"
      fill="none"
      stroke="rgba(201,165,90,0.2)"
      strokeWidth="2"
      strokeDasharray="5,5"
    />
    
    {/* Stars orbiting around globe */}
    {[0, 72, 144, 216, 288].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 100 100)`}>
        <circle cx="100" cy="30" r="3" fill="#c9a55a" opacity="0.8" />
        <circle cx="100" cy="30" r="5" fill="#c9a55a" opacity="0.3" />
      </g>
    ))}
  </svg>

  {/* Center Globe */}
  <div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full shadow-2xl"
    style={{
      background: 'radial-gradient(circle at 30% 30%, rgba(201,165,90,0.4), rgba(59,79,202,0.2))',
      border: '2px solid rgba(201,165,90,0.3)',
      animation: 'rotateSelf 20s linear infinite reverse',
      boxShadow: '0 0 60px rgba(201,165,90,0.4), inset 0 0 30px rgba(59,79,202,0.2)'
    }}
  >
    {/* Globe Grid Pattern */}
    <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Latitude lines */}
      {[20, 40, 60, 80].map((y) => (
        <line
          key={`lat-${y}`}
          x1="0"
          y1={y}
          x2="100"
          y2={y}
          stroke="rgba(201,165,90,0.2)"
          strokeWidth="0.5"
        />
      ))}
      {/* Longitude lines */}
      {[20, 40, 60, 80].map((x) => (
        <line
          key={`lon-${x}`}
          x1={x}
          y1="0"
          x2={x}
          y2="100"
          stroke="rgba(201,165,90,0.2)"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  </div>

  {/* Glow Ring */}
  <div
    className="absolute inset-0 rounded-full"
    style={{
      border: '1px solid rgba(201,165,90,0.1)',
      boxShadow: '0 0 80px rgba(201,165,90,0.3)',
      animation: 'pulse 4s ease-in-out infinite'
    }}
  />
</div>

{/* Add to <style> tag at bottom of component: */}
<style>{`
  @keyframes rotateOrbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes rotateSelf {
    from { transform: rotateZ(0deg) rotateX(20deg) rotateY(30deg); }
    to { transform: rotateZ(360deg) rotateX(20deg) rotateY(30deg); }
  }
`}</style>
