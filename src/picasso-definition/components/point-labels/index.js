/* eslint-disable no-param-reassign */
import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';

const LABEL_MODE = {
  NONE: 0,
  AUTO: 1,
  ALL: 2,
  FALLBACK: 1,
};

export default function createPointLabels({ layoutService, themeService }) {
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
    animations: {
      enabled: true,
      trackBy: (node) => {
        let id;
        if (node.type === 'text') id = `label: ${node.pointValue}`;
        else if (node.type === 'line') id = `line: ${node.pointValue}`;
        else id = `rect: ${node.pointValue}`;
        return id;
      },
      compensateForLayoutChanges({ currentNodes, currentRect, previousRect }) {
        if (currentRect.x !== previousRect.x) {
          const deltaX = currentRect.x - previousRect.x;
          currentNodes.forEach((node) => {
            switch (node.type) {
              case 'text':
                node.x -= deltaX;
                break;
              case 'line':
                node.x1 -= deltaX;
                node.x2 -= deltaX;
                break;
              default:
                break;
            }
          });
        }
      },
    },
  };

  return pointLabelsComponent;
}
