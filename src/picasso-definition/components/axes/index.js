import KEYS from '../../../constants/keys';
import MODES from '../../../constants/modes';
import getGlyphCount from './glyph-count';

export default function createAxes({ context, layoutModel, dockModel }) {
  const { xAxis, yAxis } = layoutModel.getLayout();
  const xGlyphCount = getGlyphCount({ layoutModel, axis: 'X' });
  // const yGlyphCount = getGlyphCount({ layoutModel, axis: 'Y' });
  const { theme } = context;
  const fontFamily = theme.getStyle('object.barChart', 'axis.label.name', 'fontFamily') || 'sans-serif';
  const fontSize = theme.getStyle('object', 'axis.label.name', 'fontSize') || '12px';
  const labelFill = theme.getStyle('object', 'axis.label.name', 'color') || '#595959';
  const lineStroke = theme.getStyle('object', 'axis.line.major', 'color') || '#cccccc';

  return [
    {
      type: 'axis',
      key: KEYS.COMPONENT.XAXIS,
      scale: 'x',
      layout: {
        dock: dockModel.x.dock,
        minimumLayoutMode: MODES.AXIS.X,
      },
      brush: {
        consume: [
          {
            context: `highlight-${KEYS.COMPONENT.XAXIS}`,
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
          show: !(xAxis.show === 'title' || xAxis.show === 'none'),
          mode: xAxis.label,
          tiltAngle: context.rtl ? -40 : 40,
          maxEdgeBleed: 50,
          maxLengthPx: xAxis.label === 'horizontal' ? undefined : dockModel.chartSize.height / 4,
          maxGlyphCount: xGlyphCount,
          tiltThreshold: xGlyphCount > 3 && xGlyphCount < 13 ? 1 : undefined,
          fontFamily,
          fontSize,
          fill: labelFill,
        },
        line: {
          show: true, // !xAxis.auto && xAxis.spacing === 0,
          stroke: lineStroke,
        },
        paddingEnd: 4,
      },
    },
    {
      type: 'axis',
      key: KEYS.COMPONENT.YAXIS,
      scale: 'y',
      layout: {
        dock: dockModel.y.dock,
        minimumLayoutMode: MODES.AXIS.Y,
      },
      brush: {
        consume: [
          {
            context: `highlight-${KEYS.COMPONENT.YAXIS}`,
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
          show: !(yAxis.show === 'title' || yAxis.show === 'none'),
          mode: 'auto',
          // maxLengthPx: dockModel.chartSize.width / 7,
          // maxGlyphCount: yGlyphCount,
          fontFamily,
          fontSize,
          fill: labelFill,
        },
        line: {
          show: true, // !auto && spacing === 0,
          stroke: lineStroke,
        },
        paddingEnd: 4,
      },
    },
  ];
}
