/* eslint-disable no-param-reassign */

function setInitialSort(handler) {
  const meas = handler?.getMeasures() || [];

  if (meas.length === 2) {
    handler.setSorting([2, 1, 0]);
  } else if (meas.length === 3) {
    handler.setSorting([3, 2, 1, 0]);
  }
}

function setColorVars(data, handler) {
  const measures = handler?.getMeasures() || [];
  const { mode } = data.color;
  if (mode === 'byExpression' && measures.length === 0) {
    data.color.mode = 'primary';
  }
}

export default function dataDefinition({ translator }) {
  return {
    dimensions: {
      min: 1,
      max: 1,
      description() {
        return translator.get('Visualizations.Descriptions.Bubble');
      },
    },
    measures: {
      min: 2,
      max: 3,
      description(properties, index) {
        let translationProperty;
        if (index === 0) {
          translationProperty = 'properties.xAxis';
        } else if (index === 1) {
          translationProperty = 'properties.yAxis';
        } else if (index === 2) {
          translationProperty = 'Visualizations.Descriptions.Size';
        } else {
          translationProperty = 'Visualizations.Descriptions.Color';
        }
        return translator.get(translationProperty);
      },
      add(measure, data, handler) {
        setInitialSort(handler);
        measure.qSortBy.qSortByNumeric = -1;
      },
      remove(measure, data, handler) {
        setInitialSort(handler);
        setColorVars(data, handler);
      },
    },
  };
}
