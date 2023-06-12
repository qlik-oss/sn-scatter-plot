export default function getMeasureValue({ dataset, data }) {
  const { source, label, value } = data;
  const field = dataset(source.key).field(source.field);
  const measureInfo = field.raw();
  const useFormatter =
    !measureInfo.isCustomFormatted && (measureInfo.qIsAutoFormat || measureInfo.qNumFormat.qType === 'U');
  if (!useFormatter) {
    return label;
  }

  if (value === '' || Number.isNaN(value) || value === 'NaN') {
    return '-';
  }

  return field.formatter()(value);
}
