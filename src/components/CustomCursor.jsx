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
      // Buttons and links
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setCursorVariant('hover'));
        el.addEventListener('mouseleave', () => setCursorVariant('default'));
      });

      // Text elements
      const textElements = document.querySelectorAll('h1, h2, h3, p, span');
      textElements.forEach(el => {
        el.addEventListener('mouseenter', () => setCursorVariant('text'));
        el.addEventListener('mouseleave', () => setCursorVariant('default'));
      });

      // LiquidEther section
      const liquidEther = document.querySelector('#home');
      if (liquidEther) {
        liquidEther.addEventListener('mouseenter', () => setCursorVariant('liquid'));
        liquidEther.addEventListener('mouseleave', () => setCursorVariant('default'));
      }

      // Glass elements (navbar, social icons)
      const glassElements = document.querySelectorAll('nav, .glass-effect');
      glassElements.forEach(el => {
        el.addEventListener('mouseenter', () => setCursorVariant('glass'));
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

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(51, 163, 149, 0.8)',
      mixBlendMode: 'difference',
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(51, 163, 149, 1)',
      mixBlendMode: 'normal',
    },
    text: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(161, 211, 172, 0.8)',
      mixBlendMode: 'difference',
      width: '4px',
      height: '32px',
      borderRadius: '2px',
    },
    liquid: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.2,
      backgroundColor: 'rgba(51, 163, 149, 0.6)',
      mixBlendMode: 'screen',
      border: '2px solid rgba(161, 211, 172, 0.8)',
    },
    glass: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      scale: 1.1,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      mixBlendMode: 'normal',
      border: '1px solid rgba(51, 163, 149, 0.6)',
      backdropFilter: 'blur(10px)',
    }
  };

  const currentVariant = variants[cursorVariant];

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor fixed pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          left: currentVariant.x,
          top: currentVariant.y,
          width: currentVariant.width || '32px',
          height: currentVariant.height || '32px',
          backgroundColor: currentVariant.backgroundColor,
          borderRadius: currentVariant.borderRadius || '50%',
          transform: `scale(${currentVariant.scale})`,
          mixBlendMode: currentVariant.mixBlendMode,
          border: currentVariant.border || 'none',
          backdropFilter: currentVariant.backdropFilter || 'none',
        }}
      />
      
      {/* Cursor trail */}
      <div
        className="cursor-trail fixed pointer-events-none z-[9998] transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          width: '16px',
          height: '16px',
          backgroundColor: 'rgba(161, 211, 172, 0.3)',
          borderRadius: '50%',
          transform: `scale(${cursorVariant === 'hover' ? 2 : 1})`,
          mixBlendMode: 'screen',
        }}
      />

      {/* Particles for special effects */}
      {cursorVariant === 'liquid' && (
        <div className="cursor-particles fixed pointer-events-none z-[9997]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
              style={{
                left: mousePosition.x + Math.cos(i * 60 * Math.PI / 180) * 30,
                top: mousePosition.y + Math.sin(i * 60 * Math.PI / 180) * 30,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CustomCursor;
