import KEYS from '../../../../constants/keys';
import MODES from '../../../../constants/modes';
import getGlyphCount from '../glyph-count';

export default function createXaxis({ context, layoutModel, dockModel, themeModel }) {
  const { xAxis: axis } = layoutModel.getLayout();
  const { auto, spacing } = layoutModel.getLayoutValue('gridLine', {});
  const glyphCount = getGlyphCount({ layoutModel, axis: 'X' });

  if (!axis || axis.show === 'none') {
    return [];
  }

  if (!axis) {
    return false;
  }

  const { show } = axis;

  if (show === 'none') {
    return false;
  }

  const style = themeModel.query.getStyle();

  return {
    type: 'axis',
    key: KEYS.COMPONENT.X_AXIS,
    scale: KEYS.SCALE.X,
    layout: {
      dock: dockModel.x.dock,
      minimumLayoutMode: MODES.AXIS.X,
    },
    brush: {
      consume: [
        {
          context: `highlight-${KEYS.COMPONENT.X_AXIS}`,
          data: '',
          style: {
            inactive: {
              opacity: 0.4,
            },
          },
        },
      ],
    },
    settings: {
      labels: {
        show: !(axis.show === 'title' || axis.show === 'none'),
        mode: axis.label,
        tiltAngle: context.rtl ? -40 : 40,
        maxEdgeBleed: 50,
        maxLengthPx: axis.label === 'horizontal' ? undefined : dockModel.chartSize.height / 4,
        tiltThreshold: glyphCount > 3 && glyphCount < 13 ? 1 : undefined,
        fontFamily: style.axis.label.name.fontFamily,
        fontSize: style.axis.label.name.fontSize,
        fill: style.axis.label.name.color,
      },
      line: {
        show: !auto && spacing === 0,
        stroke: style.axis.line.major.color,
      },
      ticks: {
        stroke: style.axis.line.major.color,
      },
      minorTicks: {
        stroke: style.axis.line.minor.color,
      },
      paddingEnd: 4,
    },
  };
}
