export default function getLabel({ colorSettings, context, node }) {
  if (colorSettings.label) {
    return colorSettings.label;
  }

  const { color } = node.data;

  if (colorSettings.type !== 'color' && color) {
    const { dataset } = context.resources;
    const { key, field } = color.source;

    return dataset(key).field(field).title();
  }

  return undefined;
}
