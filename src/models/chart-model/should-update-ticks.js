import KEYS from '../../constants/keys';

const shouldUpdateTicks = (chart, getCurrentYTicks, getYTicks) => {
  if (typeof getCurrentYTicks === 'function' && getYTicks) {
    const formatter = chart.formatters()[KEYS.SCALE.Y];
    const currentYTicks = getCurrentYTicks()?.filter((t) => !t.isMinor);
    if (!currentYTicks) return false;
    const preCalcYTicks = getYTicks().filter((t) => !t.isMinor);
    const currentLength = Math.max(...currentYTicks.map((t) => formatter(t.value).toString().length));
    const preCalcLength = Math.max(...preCalcYTicks.map((t) => formatter(t.value).toString().length));
    return preCalcLength > currentLength;
  }
  return false;
};

export default shouldUpdateTicks;
