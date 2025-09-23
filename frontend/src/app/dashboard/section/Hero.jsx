import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [visible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hide) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [hide]);

  if (!visible) return null;

  return (
    <section
      className={`
        max-w-6xl mx-auto text-center overflow-hidden
        transition-all duration-200 ease-in-out
        ${hide ? 'opacity-0 max-h-0' : 'opacity-100 max-h-[150px]'}
      `}
      style={{ transitionProperty: 'opacity, max-height' }}
    >
      <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800 bg-clip-text text-transparent">
        Welcome to Secure Spend
      </h1>
    </section>
  );
};

export default HeroSection;
