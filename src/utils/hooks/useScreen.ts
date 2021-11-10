import { useEffect, useState } from 'react';

export const useScreen = () => {
  const getScreen = () => {
    if (typeof window !== 'undefined' && window.screen) {
      return window.screen;
    }
    return undefined;
  };

  const [screen, setScreen] = useState<Screen | undefined >(getScreen());

  useEffect(() => {
    function handleResize() {
      setScreen(getScreen());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [screen];
};
