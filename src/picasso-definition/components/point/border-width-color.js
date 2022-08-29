const computeWidth = (numDataPoints) => Math.max(0.2, 2 - Math.max(0, (numDataPoints || 0) - 1000) / 5000); // For zoom/pan from bin data to point data

const computeColor = (numDataPoints) => {
  const opacity = Math.floor(Math.max(0.3, 1 - Math.max(0, (numDataPoints || 0) - 1000) / 20000) * 255);
  const color = `#000000${opacity.toString(16)}`;
  return color;
};

export { computeWidth, computeColor };
