import getMeasureValue from './measure-value';

export default function createNormalSection({ measureProperties, nodes, dataset, create, util }) {
  const [first] = nodes;

  const header = create.text({
    value: first.data.label,
    style: {
      bold: true,
    },
  });

  const color = create.color({
    nodes,
    property: 'color',
  });

  const measures = nodes
    .map((node) =>
      measureProperties
        .map((property) => {
          const data = node.data[property];
          const { key, field } = data.source;

          return create.measure({
            label: util.dataset.title(key, field),
            value: getMeasureValue({ dataset, data }),
          });
        })
        .flat()
    )
    .flat();

  return [header, color, ...measures];
}
