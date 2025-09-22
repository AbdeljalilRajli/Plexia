import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollTo = useCallback((targetId) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80; // Adjust for header
    const distance = targetPosition - startPosition;
    const duration = 800; // Adjust duration as needed (in ms)
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeInOutCubic)
      const easeInOutCubic = t => t < 0.5 
        ? 4 * t * t * t 
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage));
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }, []);

  return { scrollTo };
};
