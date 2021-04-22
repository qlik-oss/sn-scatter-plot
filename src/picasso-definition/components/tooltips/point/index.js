import extend from 'extend';
import createBaseTooltip from '../base-tooltip';
import createPointTooltipContent from './content';
import getMore from './more';
import KEYS from '../../../../constants/keys';

const LIMIT = 7;

const TOOLTIPPERS = {
  [KEYS.COMPONENT.POINT]: true,
};

export default function createPointTooltip({ models, context }) {
  const { themeModel } = models;
  const { rtl, translator } = context;
  const baseTooltip = createBaseTooltip({
    key: KEYS.COMPONENT.POINT_TOOLTIP,
    rtl,
  });

  const style2 = themeModel.query.getStyle();

  const createPointContent = createPointTooltipContent({ models, rtl });

  const getTitleRow = ({ title }) => [
    {
      content: title.label,
      style: { 'font-weight': 'bold', 'text-align': rtl ? 'right' : 'left', direction: title.direction },
      colspan: 2,
    },
  ];

  const getColorRow = ({ color }) => [
    {
      content: color.label,
      style: { 'text-align': rtl ? 'right' : 'left', direction: color.labelDirection },
    },
    {
      content: color.value,
      style: { 'text-align': rtl ? 'left' : 'right', 'vertical-align': 'middle', direction: color.valueDirection },
    },
  ];

  const getMeasureRow = ({ measure }) => [
    {
      content: measure.label,
      style: { 'text-align': rtl ? 'right' : 'left', direction: measure.labelDirection },
    },
    {
      content: measure.value,
      style: { 'text-align': rtl ? 'left' : 'right', 'vertical-align': 'middle', direction: measure.valueDirection },
    },
  ];

  const getMeasureRows = ({ measures }) => measures.map((measure) => getMeasureRow({ measure }));

  const createPointContentRows = (content) => {
    const nodeRows = [];
    nodeRows.push(getTitleRow(content));
    if (content.color) {
      nodeRows.push(getColorRow(content));
    }
    nodeRows.push(...getMeasureRows(content));
    return nodeRows;
  };

  const rowContent = (inputRow, { h, style }) =>
    inputRow.map((cell) => {
      const attributes = {
        style: { ...(style.cell || {}), ...(cell.style || {}) },
        class: cell.class,
      };
      if (cell.colspan) {
        attributes.colspan = cell.colspan;
      }
      return h('td', attributes, cell.content);
    });

  return extend(true, baseTooltip, {
    settings: {
      filter: (nodes) => nodes.filter((node) => node.data && TOOLTIPPERS[node.key]),
      extract: (nodeContext) => nodeContext,
      content: ({ h, data, style }) => {
        const createTooltipRows = (nodeContext) => {
          const pointContent = createPointContent({ context: nodeContext });
          return createPointContentRows(pointContent);
        };
        const tooltipRows = [];
        const [firstNode] = data;
        const firstNodeRows = createTooltipRows(firstNode);
        tooltipRows.push(...firstNodeRows);
        const numRowsPerNode = firstNodeRows.length;
        const numVisibleNodes = Math.ceil(LIMIT / numRowsPerNode);
        const len = Math.min(numVisibleNodes, data.length);
        for (let i = 1; i < len; i++) {
          tooltipRows.push(...createTooltipRows(data[i]));
        }
        const numHiddenNodes = data.length - numVisibleNodes;
        if (numHiddenNodes > 0) {
          tooltipRows.push(getMore({ count: numHiddenNodes, rtl, translator }));
        }
        return tooltipRows.map((row) => h('tr', {}, rowContent(row, { h, style })));
      },
      placement: 'bounds',
    },
    style: {
      content: {
        fontFamily: style2.fontFamily,
      },
    },
  });
}
