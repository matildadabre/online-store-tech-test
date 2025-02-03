export const loadFromLocalStorage = (key: string): any | null => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const saveToLocalStorage = (key: string, data: any): void => {
  localStorage.setItem(key, JSON.stringify(data));
};
