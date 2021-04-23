export default function getValue({ colorSettings, context, node }) {
  const { color } = node.data;

  if (colorSettings.type === 'color' || !color || !colorSettings.fieldType) {
    return undefined;
  }

  const { value, label } = color;

  const { key, field } = color.source;

  const { dataset } = context.resources;
  const formatter = dataset(key).field(field).formatter();

  if (formatter && colorSettings.fieldType === 'measure') {
    return Number.isNaN(value) ? '-' : formatter(color.value);
  }

  const resolved = label || value;
  return Number.isNaN(resolved) || resolved === 'NaN' ? '-' : resolved;
}
