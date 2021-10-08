const path = require('path');

const pkg = require(path.resolve(__dirname, '../package.json')); // eslint-disable-line

module.exports = {
  glob: ['./src/qae/object-definition.js'],
  package: path.resolve(__dirname, '../package.json'),
  api: {
    stability: 'stable',
    properties: {
      'x-qlik-visibility': 'public',
    },
    visibility: 'public',
    name: `${pkg.name}:properties`,
    version: pkg.version,
    description: 'Scatter plot generic object definition',
  },
  output: {
    file: path.resolve(__dirname, '../api-specifications/properties.json'),
  },
  parse: {
    types: {
      HyperCubeDef: {},
      NxAttrDimDef: {},
      NxAttrExprDef: {},
      NxDimension: {},
      NxInlineDimensionDef: {},
      NxInlineMeasureDef: {},
      NxMeasure: {},
      StringExpression: {},
      ValueExpression: {},
    },
  },
};
