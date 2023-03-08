import extend from 'extend';
import { setValue, getValue } from 'qlik-chart-modules';
import PATHS from '../../constants/paths';

export function extractProperties(layout) {
  // Destructuring to improve performance when data are large
  const { qHyperCube, ...restOfLayout } = layout;
  const { qDataPages, qStackedDataPages, qTreeDataPages, ...restOfCube } = qHyperCube;
  const properties = extend(
    true,
    {},
    { ...restOfLayout, qHyperCube: { ...restOfCube, qDataPages: null, qStackedDataPages: null, qTreeDataPages: null } }
  );

  const { dataRelatedPropertiesPaths: ignoredPaths } = PATHS;

  ignoredPaths.forEach((path) => {
    const subPaths = path.split('[');
    if (subPaths.length === 1) {
      if (getValue(properties, path) !== undefined) {
        setValue(properties, path, null);
      }
    } else {
      const arrayPath = subPaths[0];
      const propPath = subPaths[1].split('].')[1];
      const array = getValue(properties, arrayPath, []);
      array.forEach((element) => {
        if (getValue(element, propPath) !== undefined) {
          setValue(element, propPath, null);
        }
      });
    }
  });

  return properties;
}

export function cacheProperties({ viewCache, layout }) {
  const properties = extractProperties(layout);
  viewCache.set('dataIndependentProperties', JSON.stringify(properties));
}

export function propertiesHaveChanged({ viewCache, layout }) {
  const properties = extractProperties(layout);
  return viewCache.get('dataIndependentProperties') !== JSON.stringify(properties);
}
