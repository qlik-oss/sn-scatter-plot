import extend from 'extend';
import rtlUtils from '../../../../utils/rtl-utils';
import createBaseTooltip from '../base-tooltip';
import KEYS from '../../../../constants/keys';

const TOOLTIPPERS = {
  [KEYS.COMPONENT.POINT]: true,
};

// Get the title of the prop passed (can be a dimension or a measure)
const getDataTitle = (dataset, prop) => {
  const dataField = dataset(prop.source.key).field(prop.source.field);
  return dataField.title();
};

export default function createPointTooltip({ models, rtl = false }) {
  const { themeModel, layoutModel, colorService } = models;
  const { hasSizeMeasure } = layoutModel.meta;
  const baseTooltip = createBaseTooltip({
    key: KEYS.COMPONENT.POINT_TOOLTIP,
    rtl,
  });

  const style = themeModel.query.getStyle();

  // Creates a color symbol <div> element; fill is measure or dimension color
  const getColorSymbol = ({ context, fill }) =>
    context.h('div', {
      style: {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        backgroundColor: fill,
        margin: '0 8px',
      },
    });

  // Get the color row element with color symbol
  const getColorRow = ({ context }) => {
    const colorLabel = colorService.getSettings().label;
    const labelDir = rtlUtils.detectTextDirection(colorLabel);
    const labelContent = rtl ? [':', colorLabel] : [colorLabel, ':'];
    const colorValueLabel = context.node.data.color.label;
    const valueDir = rtlUtils.detectTextDirection(colorValueLabel);
    const { fill } = context.node.attrs;
    const colorContent = rtl
      ? [colorValueLabel, getColorSymbol({ context, fill })]
      : [getColorSymbol({ context, fill }), colorValueLabel];

    return [
      { content: labelContent, style: { 'text-align': rtl ? 'right' : 'left', direction: labelDir } },
      {
        content: colorContent,
        style: { 'text-align': rtl ? 'left' : 'right', direction: valueDir, 'vertical-align': 'middle' },
      },
    ];
  };

  // Gets the title row element of the tooltip
  const getTitleRow = ({ node }) => {
    const contentDir = rtlUtils.detectTextDirection(node.data.label);
    return [
      {
        content: node.data.label,
        style: { 'font-weight': 'bold', 'text-align': rtl ? 'right' : 'left', direction: contentDir },
        colspan: 2,
      },
      {},
    ];
  };

  // Get the measure row element, with color symbol when coloring by measure
  const getMeasureRow = (context, prop, showColorSymbol) => {
    const measureTitle = getDataTitle(context.resources.dataset, context.node.data[prop]);
    const valueLabel = context.node.data[prop].label;
    const validValueLabel = valueLabel === '' || valueLabel === 'NaN' ? '-' : valueLabel;
    const labelDir = rtlUtils.detectTextDirection(measureTitle);
    const labelContent = rtl ? [':', measureTitle] : [measureTitle, ':'];
    const valueDir = rtlUtils.detectTextDirection();
    const { fill } = context.node.attrs;
    let valueContent;
    if (showColorSymbol) {
      valueContent = rtl
        ? [validValueLabel, getColorSymbol({ context, fill })]
        : [getColorSymbol({ context, fill }), validValueLabel];
    } else {
      valueContent = validValueLabel;
    }

    return [
      { content: labelContent, style: { 'text-align': rtl ? 'right' : 'left', direction: labelDir } },
      {
        content: valueContent,
        style: { 'text-align': rtl ? 'left' : 'right', direction: valueDir, 'vertical-align': 'middle' },
      },
    ];
  };

  const shouldShowColorSymbol = (context, prop) => {
    const dataTitle = getDataTitle(context.resources.dataset, context.node.data[prop]);
    return dataTitle === colorService.getSettings().label;
  };

  // checks that measure row and color row have not the same content
  const isSameMeasureAndColorRow = ({ measureRow, colorRow }) =>
    colorRow &&
    measureRow &&
    colorRow[0].content[0] === measureRow[0].content[0] &&
    colorRow[0].content[1] === measureRow[0].content[1] &&
    colorRow[1].content[rtl ? 0 : 1] === measureRow[1].content[0];

  const extractData = ({ context }) => {
    const { node } = context;
    const titleRow = getTitleRow({ node });
    const measures = ['x', 'y'];
    if (hasSizeMeasure) {
      measures.push('size');
    }
    const hideColRow =
      !shouldShowColorSymbol(context, 'selectionDimension') &&
      !(colorService.getSettings().label === 'Object.ChartTooltip.ColorExpression');
    const colorRow = hideColRow ? false : getColorRow({ context });
    const measureRows = measures.map((m) => getMeasureRow(context, m, shouldShowColorSymbol(context, m)));
    const filteredMeasureRows = measureRows.filter((measureRow) => !isSameMeasureAndColorRow({ measureRow, colorRow }));

    return [titleRow, colorRow, ...filteredMeasureRows].filter(Boolean);
  };

  return extend(true, baseTooltip, {
    settings: {
      filter: (nodes) => nodes.filter((node) => node.data && TOOLTIPPERS[node.key]),
      extract: (context) => extractData({ context }),
      placement: 'bounds',
    },
    style: {
      content: {
        fontFamily: style.fontFamily,
      },
    },
  });
}
