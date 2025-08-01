import React from "react";

const PolygonCard = () => {
  return (
    <svg
      viewBox="0 0 450 500"
      width="450"
      height="500"
      className="rounded-xl"
      style={{
        WebkitBackdropFilter: "blur(10px) saturate(180%)",
        backdropFilter: "blur(10px) saturate(180%)",
      }}
    >
      {/* Main Polygon with border */}
      <polygon
        points="
          0,165
          51,162
          83.7,206.25
          174.51,206.25
          219.825,162.5
          450,161.05
          450,315
          346.32,315
          259.2,377.5
          0,377.5"
        fill="rgba(255, 255, 255, 0.05)"
        stroke="rgba(255, 255, 255, 0.4)"
        strokeWidth="2"
      />

      {/* Overlay rectangle to hide left border */}
      <rect
        x="0"
        y="165"
        width="2"         // Match strokeWidth
        height="212.5"     // From y=165 to y=377.5
        fill="rgba(0,0,0,1)" // Match your background to hide it cleanly
      />
    </svg>
  );
};

export default PolygonCard;
