import KEYS from '../../../constants/keys';

function getMeasureValue({ dataset, value, measureIndex }) {
  const field = dataset(KEYS.DATA.MAIN).field(`qMeasureInfo/${measureIndex}`);
  return field.formatter()(value);
}

const ICON_SIZE = 16;
function renderIcon(h) {
  const line = h('line', {
    x1: '0px',
    y1: `${ICON_SIZE}px`,
    x2: `${ICON_SIZE}px`,
    y2: '0px',
    'stroke-width': '3px',
  });

  return h(
    'svg',
    {
      xlms: 'http://www.w3.org/2000/svg',
      width: '1em',
      height: '1em',
      viewBox: `0 0 ${ICON_SIZE} ${ICON_SIZE}`,
    },
    line
  );
}

function createHeaderRow(h, trendLineModel, index) {
  const icon = renderIcon(h);
  const label = trendLineModel.query.getLabel(index);
  const type = trendLineModel.query.getType(index);

  return [
    {
      content: icon,
      style: {
        stroke: trendLineModel.query.getStroke(index),
        width: '16px',
        'vertical-align': 'middle',
        'stroke-dasharray': trendLineModel.query.getLineDash(index),
      },
    },
    {
      content: h('div', { style: { display: 'flex', 'flex-direction': 'column' } }, [
        h('span', { style: { 'font-weight': 'bold' } }, label),
        h('span', null, type),
      ]),
      style: {},
    },
  ];
}

export default function createTrendlineSection({ dataset, translator, nodes, create, h, trendLinesService }) {
  const trendLineModel = trendLinesService.getModel();
  const [node] = nodes;

  const index = node.data.layer;
  const xVal = getMeasureValue({ dataset, value: node.data.x, measureIndex: 0 });
  const yVal = getMeasureValue({ dataset, value: node.data.y, measureIndex: 1 });

  const headerRow = create.raw({ value: createHeaderRow(h, trendLineModel, index) });

  const equation = create.text({ value: trendLineModel.query.getExpression(index) });

  const x = create.measure({
    label: translator.get('x'),
    value: xVal,
  });

  const y = create.measure({
    label: translator.get('y'),
    value: yVal,
  });

  return [headerRow, x, y, equation];
}
