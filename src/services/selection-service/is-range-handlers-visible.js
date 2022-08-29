import KEYS from '../../constants/keys';

const isRangeHandlersVisible = () =>
  [KEYS.BRUSH.X_RANGE, KEYS.BRUSH.Y_RANGE, KEYS.BRUSH.BIN_X_RANGE, KEYS.BRUSH.BIN_Y_RANGE].some((componentName) =>
    document.querySelector(`[data-key='${componentName}-edge-0']`)
  );

export default isRangeHandlersVisible;
