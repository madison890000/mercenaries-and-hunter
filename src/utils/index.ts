
export const saveItem = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

export const getItem = (key: string, type = 'string') => {
  return new Promise(resolve => {
    const data = window.localStorage.getItem(key);
    resolve(data);
  });
};
