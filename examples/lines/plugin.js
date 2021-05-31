// eslint-disable-next-line no-unused-vars
const linePlugin = {
  info: {
    name: 'line-plugin',
    type: 'component-definition',
  },
  fn: () => {
    const componentDefinition = {
      key: 'new-linecomp',
      type: 'line',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            x: { field: 'qMeasureInfo/0' },
            y: { field: 'qMeasureInfo/1' },
          },
        },
        sort: (a, b) => (a.x.value > b.x.value ? 1 : -1), // sort ascending
      },
      settings: {
        coordinates: {
          minor: {
            scale: 'y',
            ref: 'y',
          },
          major: {
            scale: 'x',
            ref: 'x',
          },
        },
        layers: {
          // curve: 'monotone',
          line: {
            stroke: 'red',
            strokeWidth: 3,
          },
        },
      },
    };
    return componentDefinition;
  },
};
