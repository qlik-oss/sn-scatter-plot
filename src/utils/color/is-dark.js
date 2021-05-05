import { hcl } from 'd3-color';

export default function isDark(color) {
  return hcl(color).l < 70;
}
