import conversion from 'qlik-object-conversion';
import pp from './property-definition';
import dataDefinition from '../qae/data-definition';
import exploreDefinition from './explore-definition';
import { updateTrendlines, clearTrendlines } from './property-definition/trendlines-definition';

const isValidLayout = (layout) => !!((layout?.qHyperCube?.qSize?.qcy || 0) > 0);

export default function ext(env) {
  return {
    definition: pp(env),
    softDefinition: exploreDefinition(env),
    support: {
      snapshot: isValidLayout,
      export: true,
      exportData: true,
      sharing: false,
      viewData: true,
    },
    importProperties: (exportFormat, initialProperties, extension) => {
      const propertyTree = conversion.colorChart.importProperties({
        exportFormat,
        initialProperties,
        dataDefinition: dataDefinition(env),
        defaultPropertyValues: {
          defaultDimension: extension.getDefaultDimensionProperties(),
          defaultMeasure: extension.getDefaultMeasureProperties(),
        },
      });

      const props = propertyTree.qProperty;
      clearTrendlines(props);
      updateTrendlines(props);

      return propertyTree;
    },
    exportProperties: (propertyTree) => {
      const props = propertyTree.qProperty;
      clearTrendlines(props);
      return conversion.colorChart.exportProperties({ propertyTree });
    },
  };
}
