import { useEffect, useState } from 'react';

type Debounce<T> = {
  value: T;
  delay: number;
};
export const useDebounce = <T>({ value, delay }: Debounce<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
};
