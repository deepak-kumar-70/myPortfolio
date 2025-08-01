import React, { useEffect, useState } from 'react';

const CustomShape = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update SVG dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height } = dimensions;

  // Generate 150 random glowing dots
  const randomDots = Array.from({ length: 150 }).map((_, i) => ({
    cx: Math.floor(Math.random() * width),
    cy: Math.floor(Math.random() * height),
  }));

  return (
    <svg
      className="fixed top-0 left-0 z-0 w-full h-full"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      <defs>
        {/* Glow effect filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glowing white circles */}
      {randomDots.map(({ cx, cy }, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="2.5"
          fill="white"
          opacity="0.8"
          filter="url(#glow)"
        />
      ))}
    </svg>
  );
};

export default CustomShape;
