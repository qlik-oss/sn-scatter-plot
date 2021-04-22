import rtlUtils from '../../../../../utils/rtl-utils';

export default function createMeasureContent({ rtl }) {
  const { detectTextDirection: getDirection } = rtlUtils;

  return function create({ node, dataset, prop }) {
    const { value, label, source } = node.data[prop];
    const { key, field: fieldName } = source;
    const field = dataset(key).field(fieldName);
    const title = field.title();

    let labelValue;
    if (field.raw().isCustomFormatted) {
      labelValue = label;
    } else if (value === '' || Number.isNaN(value) || node.data?.null?.value === true) {
      labelValue = '-';
    } else {
      labelValue = field.formatter()(value);
    }

    return {
      label: rtl ? [':', title] : [title, ':'],
      value: labelValue,
      labelDirection: getDirection(title),
      valueDirection: getDirection(value),
    };
  };
}
