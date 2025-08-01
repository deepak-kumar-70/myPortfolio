import React from "react";

const GlassPolygon = () => {
  return (
    <svg
      viewBox="0 0 1000 600"
      width="100%"
      height="400px"
      style={{
        display: "block",
        overflow: "visible",
      }}
    >
      <defs>
        {/* Glassmorphism blur filter */}
        <filter id="glassBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>

      {/* Main Glass Polygon Shape */}
      <polygon
        points="
          0,153
          195,151
          227.5,100.5
          457.5,100.5
          505,146.58
          1000,144
          1000,441
          884.7,441
          632.8,335.2
          166.6,335.2
          0,271.56
        "
        fill="rgba(255, 255, 255, 0.12)"
        stroke="rgba(255, 255, 255, 0.4)"
        strokeWidth="2"
        filter="url(#glassBlur)"
      />

      {/* Text Inside Glass */}
      <foreignObject x="150" y="170" width="700" height="200">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontFamily: "sans-serif",
            padding: "20px",
          }}
        >
         
        </div>
      </foreignObject>

      {/* Overlay to hide right stroke (simulate border removal) */}
      <rect
        x="995"             // Start near the right edge
        y="0"
        width="10"          // Slightly wider to cover stroke properly
        height="600"
        fill="#000000"      // Match your page's background
      />
    </svg>
  );
};

export default GlassPolygon;
