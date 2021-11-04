import { useState, useEffect } from 'react';

export const useWidthScreen = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });

    return () => window.removeEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return [screenWidth];
};
