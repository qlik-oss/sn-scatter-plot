import extend from 'extend';
import rtlUtils from '../../../../utils/rtl-utils';
import createBaseTooltip from '../base-tooltip';
import KEYS from '../../../../constants/keys';

const TOOLTIPPERS = {
  [KEYS.COMPONENT.POINT]: true,
};

const getMeasureTitle = (dataset, prop) => {
  const measureField = dataset(prop.source.key).field(prop.source.field);
  return measureField.title();
};

export default function createPointTooltip({ models, rtl = false }) {
  const { themeModel, layoutModel } = models;
  const { hasSizeMeasure } = layoutModel.meta;
  const baseTooltip = createBaseTooltip({
    key: KEYS.COMPONENT.POINT_TOOLTIP,
    rtl,
  });

  const style = themeModel.query.getStyle();

  const getTitleRow = (node) => {
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

  const getMeasureRow = (context, prop) => {
    const measureTitle = getMeasureTitle(context.resources.dataset, context.node.data[prop]);
    const valueLabel = context.node.data[prop].label;
    const validValueLabel = valueLabel === '' || valueLabel === 'NaN' ? '-' : valueLabel;
    const labelDir = rtlUtils.detectTextDirection(measureTitle);
    const labelContent = rtl ? [':', measureTitle] : [measureTitle, ':'];
    const valueDir = rtlUtils.detectTextDirection();

    return [
      { content: labelContent, style: { 'text-align': rtl ? 'right' : 'left', direction: labelDir } },
      {
        content: validValueLabel,
        style: { 'text-align': rtl ? 'left' : 'right', direction: valueDir, 'vertical-align': 'middle' },
      },
    ];
  };

  return extend(true, baseTooltip, {
    settings: {
      filter: (nodes) => nodes.filter((node) => node.data && TOOLTIPPERS[node.key]),

      extract: (context) =>
        [
          getTitleRow(context.node),
          getMeasureRow(context, 'x'),
          getMeasureRow(context, 'y'),
          hasSizeMeasure ? getMeasureRow(context, 'size') : false,
        ].filter(Boolean),
      placement: 'bounds',
    },
    style: {
      content: {
        fontFamily: style.fontFamily,
      },
    },
  });
}
