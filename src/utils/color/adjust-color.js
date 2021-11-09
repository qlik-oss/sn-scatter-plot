import { hcl } from 'd3-color';

export function makeDarker(c) {
  const color = hcl(c);
  color.l -= 40;
  return color.toString();
}

export function makeBrighter(c) {
  const color = hcl(c);

  if (color.l < 30) {
    color.l += 30;
  } else if (color.l < 50) {
    color.l += 10;
  } else {
    color.l += 5;
  }

  return color.toString();
}
