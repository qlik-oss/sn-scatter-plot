const computeWidth = (numDataPoints) => Math.max(0.2, Math.min(2, 2000 / numDataPoints)); // For zoom/pan from bin data to point data

const computeColor = (numDataPoints) => {
  const opacity = Math.floor(Math.max(0.4, Math.min(1, 1000 / numDataPoints)) * 255);
  const color = `#000000${opacity.toString(16)}`;
  return color;
};

export { computeWidth, computeColor };
