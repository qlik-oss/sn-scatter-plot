/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const pointPlugin = {
  info: {
    name: 'point-plugin',
    type: 'component-definition',
  },
  fn: ({ layout, keys }) => {
    const componentDefinition = {
      key: keys.components.point,
      type: 'point',
      settings: {
        strokeWidth: '2px',
        stroke: 'black',
        size: (d) => getSizeInLogarithmScale(d, layout),
        fill: (d) => getColorBasedOnMedian(d),
      },
    };
    return componentDefinition;
  },
};

const xAxisPlugin = {
  info: {
    name: 'x-axis-plugin',
    type: 'component-definition',
  },
  fn: () => {
    const componentDefinition = {
      type: 'axis',
      key: 'x-axis',
      layout: {
        dock: 'top',
      },
      settings: {
        labels: {
          fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
          fontSize: '15px',
          fill: 'red',
        },
        line: { stroke: 'green', strokeWidth: 2 },
        ticks: { stroke: 'blue', strokeWidth: 2 },
      },
    };
    return componentDefinition;
  },
};

const yAxisPlugin = {
  info: {
    name: 'y-axis-plugin',
    type: 'component-definition',
  },
  fn: () => {
    const componentDefinition = {
      type: 'axis',
      key: 'y-axis',
      layout: {
        dock: 'right',
      },
      settings: {
        labels: {
          fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
          fontSize: '15px',
          fill: 'red',
        },
        line: { stroke: 'green', strokeWidth: 2 },
        ticks: { stroke: 'blue', strokeWidth: 2 },
      },
    };
    return componentDefinition;
  },
};

const pluginSet1 = [pointPlugin];
const pluginSet2 = [xAxisPlugin, yAxisPlugin];
