export const useStorage = () => {
  const setStorageData = (data) => {
    const keys = Object.keys(data);

    if (keys.length > 0) {
      keys.forEach((key) => {
        localStorage.setItem(key, JSON.stringify(data[key]));
      });
    }
  };

  const getStorageData = (data) => {
    const keys = Object.keys(data);

    const state = {};

    keys.forEach((key) => {
      const storageData = localStorage.getItem(key);

      if (storageData) {
        state[key] = JSON.parse(storageData);
        return;
      }

      state[key] = data[key];
    });

    return state;
  };

  const removeSorageData = (data) => {
    const keys = Object.keys(data);

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
