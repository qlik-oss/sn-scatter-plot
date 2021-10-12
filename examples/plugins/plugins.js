/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const pointPlugin = {
  info: {
    name: 'point-plugin',
    type: 'component-definition',
  },
  fn: ({ layout, keys }) => {
    const componentDefinition = {
      key: keys.COMPONENT.POINT,
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

function createAxisPlugin(axisName) {
  return {
    info: {
      name: `${axisName}-plugin`,
      type: 'component-definition',
    },
    fn: ({ keys }) => {
      const componentDefinition = {
        type: 'axis',
        key: keys.COMPONENT[axisName],
        layout: {
          dock: axisName === 'X_AXIS' ? 'top' : 'right',
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
}

const linePlugin = {
  info: {
    name: 'line-plugin',
    type: 'component-definition',
  },
  fn: ({ keys }) => {
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
            scale: keys.SCALE.Y,
            ref: 'y',
          },
          major: {
            scale: keys.SCALE.X,
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

const pluginSet1 = [pointPlugin];
const pluginSet2 = [createAxisPlugin('X_AXIS'), createAxisPlugin('Y_AXIS')];
const pluginSet3 = [linePlugin];
