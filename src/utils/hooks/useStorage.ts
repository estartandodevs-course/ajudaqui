/* eslint-disable no-return-assign */
export const useStorage = () => {
  const setStorageData = <T>(data: Record<string, T>) => {
    if (!data) return;
    const keys = Object.keys(data);

    if (keys.length > 0) {
      keys?.forEach((key) => {
        localStorage.setItem(key, JSON.stringify(data[key]));
      });
    }
  };

  const getStorageData = <T>(keys: Array<string>) => {
    const state: Record<string, T | {} | null > = {};

    if (keys.length > 0) {
      keys.forEach((key) => {
        const data = localStorage.getItem(key);

        if (data) {
          return state[key] = JSON.parse(data);
        }
        return state[key] = null;
      });
    }

    return state;
  };

  const removeSorageData = (keys: Array<string>) => {
    keys.forEach((key) => {
      localStorage.removeItem(key);
    });
  };

  return {
    setStorageData,
    getStorageData,
    removeSorageData,
  };
};
