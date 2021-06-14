const path = require('path');

const pkg = require(path.resolve(__dirname, '../package.json')); // eslint-disable-line

module.exports = {
  glob: ['./src/services/plugin-service/plugin-args.js'],
  package: path.resolve(__dirname, '../package.json'),
  api: {
    stability: 'experimental',
    properties: {
      'x-qlik-visibility': 'public',
    },
    visibility: 'public',
    name: `${pkg.name}:plugins`,
    version: pkg.version,
    description: 'Scatter plot plugins API definitions',
  },
  output: {
    file: path.resolve(__dirname, '../api-specifications/plugins.json'),
  },
};
