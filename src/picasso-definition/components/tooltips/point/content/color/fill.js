export default function getFill({ node }) {
  const { data, attrs } = node;

  if (data.fillColor) {
    return data.fillColor;
  }

  if (attrs && attrs.fill) {
    return attrs.fill;
  }

  return undefined;
}
