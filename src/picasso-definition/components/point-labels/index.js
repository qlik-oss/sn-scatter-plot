import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';

const LABEL_MODE = {
  NONE: 0,
  AUTO: 1,
  ALL: 2,
  FALLBACK: 1,
};

export default function createPointLabels({ layoutService, themeService, chartModel }) {
  const labels = layoutService.getLayoutValue('labels', {});
  if (labels.mode === LABEL_MODE.NONE) {
    return false;
  }

  const style = themeService.getStyles();
  const { fontFamily, fontSize, color } = style.label?.value || {};

  const pointLabelsComponent = {
    type: 'point-label',
    key: KEYS.COMPONENT.POINT_LABELS,
    layout: {
      minimumLayoutMode: MODES.POINT_LABELS,
    },
    settings: {
      label: (node) => node.data.label,
      mode: labels.mode,
      // debugMode: true,
    },
    style: {
      fontFamily,
      fontSize,
      fill: color,
      backgroundColor: style.backgroundColor,
    },
    rendererSettings: {
      transform: () => {
        if (chartModel.query.isPanEnded()) {
          return false;
        }
        if (chartModel.query.isInteractionInProgess()) {
          const { deltaX, deltaY } = chartModel.query.getViewState().get('dataView');
          return {
            horizontalScaling: 1,
            horizontalSkewing: 0,
            verticalSkewing: 0,
            verticalScaling: 1,
            horizontalMoving: deltaX,
            verticalMoving: deltaY,
          };
        }
        return false;
      },
      canvasBufferSize: (rect) => ({
        width: rect.computedPhysical.width + 100,
        height: rect.computedPhysical.height + 0,
      }),
    },
  };

  return pointLabelsComponent;
}
