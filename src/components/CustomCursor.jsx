import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      // Links only
      const links = document.querySelectorAll('a');
      links.forEach(el => {
        el.addEventListener('mouseenter', () => setCursorVariant('link'));
        el.addEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };

    document.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Add listeners after a short delay to ensure DOM is ready
    setTimeout(addHoverListeners, 100);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // No smoothing: main cursor follows instantly for precise feel

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      scale: 1,
      border: '2px solid #33A395',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      mixBlendMode: 'normal',
    },
    link: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      scale: 1.1,
      border: '2px solid #66C7B8',
      backgroundColor: 'transparent',
      boxShadow: '0 0 0 6px rgba(51, 163, 149, 0.15)',
      mixBlendMode: 'normal',
    },
  };

  const currentVariant = variants[cursorVariant];

  if (!isVisible) return null;

  return (
    <div
      className="custom-cursor fixed pointer-events-none z-[9999] transition-all duration-200 ease-out"
      style={{
        left: currentVariant.x,
        top: currentVariant.y,
        width: `${currentVariant.width}px`,
        height: `${currentVariant.height}px`,
        backgroundColor: currentVariant.backgroundColor,
        borderRadius: '50%',
        transform: `scale(${currentVariant.scale})`,
        mixBlendMode: currentVariant.mixBlendMode,
        border: currentVariant.border,
        boxShadow: currentVariant.boxShadow,
      }}
    />
  );
};

export default CustomCursor;
