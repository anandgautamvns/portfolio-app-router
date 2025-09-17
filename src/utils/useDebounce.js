import React, { useCallback } from 'react';

export function useDebounce(func, delay) {
  let timerId;
  return useCallback((...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  }, [func, delay]);
}