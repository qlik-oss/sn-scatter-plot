const path = require('path');
const fs = require('fs-extra');
const defaultTheme = require('@qlik/sense-themes-default/dist/sense/theme.json');

const sourcePath = [__dirname, 'test', 'rendering', 'data'];
const source = path.resolve(...sourcePath);
const renderConfigs = fs.readdirSync('test/rendering/data').map((file) => ({
  id: file.replace('.json', ''),
  render: {
    options: { renderer: 'svg' },
    properties: require(path.resolve(source, file)), // eslint-disable-line
  },
}));

module.exports = {
  serve: {
    renderConfigs,
    flags: {
      panZoom: true,
    },
    themes: [{ id: 'sense', theme: defaultTheme }],
  },
};
