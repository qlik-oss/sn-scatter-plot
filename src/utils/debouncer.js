export default function createDebouncer(fn, threshold = 50) {
  let timer;

  return function debounced(...args) {
    const execute = () => fn.apply(this, args);

    clearTimeout(timer);
    timer = setTimeout(execute, threshold);
  };
}
