export default function createHeatMapSection({ translator, nodes, create }) {
  const [node] = nodes;

  return [
    create.measure({
      label: translator.get('properties.compression.density'),
      value: node.data.binDensity.label,
    }),
  ];
}
