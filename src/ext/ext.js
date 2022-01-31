import conversion from 'qlik-object-conversion';
import pp from './property-definition';
import dataDefinition from '../qae/data-definition';
import softDefinition from './explore-definition';

const isValidLayout = (layout) => !!((layout?.qHyperCube?.qSize?.qcy || 0) > 0);

export default function ext(env) {
  return {
    definition: pp(env),
    softDefinition,
    support: {
      snapshot: isValidLayout,
      export: true,
      exportData: true,
      sharing: false,
      viewData: true,
    },
    importProperties: (exportFormat, initialProperties, extension) =>
      conversion.colorChart.importProperties({
        exportFormat,
        initialProperties,
        dataDefinition: dataDefinition(env),
        defaultPropertyValues: {
          defaultDimension: extension.getDefaultDimensionProperties(),
          defaultMeasure: extension.getDefaultMeasureProperties(),
        },
      }),
    exportProperties: (propertyTree) => conversion.colorChart.exportProperties({ propertyTree }),
  };
}
