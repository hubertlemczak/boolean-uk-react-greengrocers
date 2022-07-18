import { useEffect, useState } from 'react';

export const useLocalStorage = (str, initialValue) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(str)) return JSON.parse(localStorage.getItem(str));
    if (typeof initialValue === 'function') return initialValue();
    else return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(str, JSON.stringify(value));
  }, [str, value]);

  return [value, setValue];
};
