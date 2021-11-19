export default function getMeasureValue({ dataset, data }) {
  const { source, label, value } = data;
  const field = dataset(source.key).field(source.field);

  if (field.raw().isCustomFormatted) {
    return label;
  }

  if (value === '' || Number.isNaN(value) || value === 'NaN') {
    return '-';
  }

  return field.formatter()(value);
}
