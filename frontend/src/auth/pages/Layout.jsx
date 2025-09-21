import { useState, useEffect } from "react";

const AuthLayout = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="min-h-screen bg-background flex flex-col justify-center px-4 py-5 sm:px-6 lg:px-8 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "200px",
          height: "200px",
          pointerEvents: "none",
          borderRadius: "50%",
          background: `
      radial-gradient(circle at center,
        rgba(83, 211, 71, 0.6) 0%,
        rgba(83, 211, 71, 0.3) 0%,
        rgba(83, 211, 71, 0) 100%
      )
    `,
          transform: `translate3d(${mousePos.x - 100}px, ${mousePos.y - 100}px, 0) scale(1.05)`,
          transition: "transform 0.08s cubic-bezier(0.22, 1, 0.36, 1)",
          filter: "blur(50px)",
          mixBlendMode: "screen",
          zIndex: 0,
        }}
      />

      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-between relative z-10">
        <div className="bg-card py-8 px-6 shadow-sm rounded-md border relative z-20 hover:shadow-[0_0_20px_rgba(83,211,71,0.6)] transition-shadow duration-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
