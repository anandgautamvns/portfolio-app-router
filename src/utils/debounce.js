export function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId); // Clear previous timer
    timerId = setTimeout(() => {
      func.apply(this, args); // Call the function with correct context & arguments
    }, delay);
  };
}