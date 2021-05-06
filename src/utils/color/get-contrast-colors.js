import isDark from './is-dark';

const lightColor = '#E6E6E6';
const darkColor = '#595959';

export default function getContrastColors(foreColor) {
  return isDark(foreColor)
    ? { backgroundColor: darkColor, color: lightColor }
    : { backgroundColor: lightColor, color: darkColor };
}
