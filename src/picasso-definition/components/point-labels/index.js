import KEYS from '../../../constants/keys';
import NUMBERS from '../../../constants/numbers';
import MODES from '../../../constants/modes';
import compensateForLayoutChanges from '../animations/labels/compensate';

const LABEL_MODE = {
  NONE: 0,
  AUTO: 1,
  ALL: 2,
  FALLBACK: 1,
};

export default function createPointLabels({ models, animationsEnabled }) {
  const { layoutService, themeService, chartModel, styleModel } = models;
  const labels = layoutService.getLayoutValue('labels', {});
  if (labels.mode === LABEL_MODE.NONE) {
    return false;
  }

  const style = themeService.getStyles();
  const labelStyle = styleModel.query.label.getStyle();
  const viewHandler = chartModel.query.getViewHandler();
  const { transform } = viewHandler;

  const pointLabelsComponent = {
    type: 'point-label',
    key: KEYS.COMPONENT.POINT_LABELS,
    layout: {
      minimumLayoutMode: MODES.POINT_LABELS,
    },
    settings: {
      label: (node) => node.data.label,
      mode: labels.mode,
      maxVisibleBubblesForLabeling: layoutService.meta.isMaxVisibleBubblesEnabled
        ? NUMBERS.LARGE_NUM_DATA_POINTS
        : undefined,
      // debugMode: true,
    },
    style: {
      fontFamily: labelStyle.fontFamily,
      fontSize: labelStyle.fontSize,
      fill: labelStyle.fill,
      backgroundColor: style.backgroundColor,
    },
    animations: {
      enabled: animationsEnabled,
      trackBy: (node) => `${node.type} ${node.pointValue}`,
      compensateForLayoutChanges,
    },
    rendererSettings: {
      transform,
      canvasBufferSize: (rect) => ({
        width: rect.computedPhysical.width + 100,
        height: rect.computedPhysical.height + 100,
      }),
    },
  };

  return pointLabelsComponent;
}
