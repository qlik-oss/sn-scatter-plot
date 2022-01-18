export default function getPixelRatio(canvasContext) {
  const backingStoreRatio =
    canvasContext.webkitBackingStorePixelRatio ||
    canvasContext.mozBackingStorePixelRatio ||
    canvasContext.msBackingStorePixelRatio ||
    canvasContext.oBackingStorePixelRatio ||
    canvasContext.backingStorePixelRatio ||
    1;
  return (window.devicePixelRatio || 1) / backingStoreRatio;
}
