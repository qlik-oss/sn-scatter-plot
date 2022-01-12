/* eslint react/prop-types: 0 */
import React from 'react';

function getFontSize(size) {
  if (size === 'extra-large') {
    return '28px';
  }
  if (size === 'large') {
    return '20px';
  }
  if (size === 'small') {
    return '12px';
  }
  return '16px';
}

export default function SvgIcon({ d, size, width, style = {}, viewBox = '0 0 16 16', fill }) {
  const s = {
    fontSize: getFontSize(size),
    display: 'inline-block',
    fontStyle: 'normal',
    lineHeight: '0',
    textAlign: 'center',
    textTransform: 'none',
    verticalAlign: '-.125em',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    padding: `${(width - parseInt(getFontSize(size), 10)) / 2}px`,
    ...style,
  };
  return (
    <i style={s}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox={viewBox}
        fill={fill ? fill() : 'currentColor'}
        pointerEvents="none"
      >
        <path d={d} />
      </svg>
    </i>
  );
}
