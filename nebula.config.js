const path = require('path');
const fs = require('fs-extra');
const crypto = require('crypto');

const sourcePath = [__dirname, 'test', 'rendering', 'data'];
const source = path.resolve(...sourcePath);
const renderConfigs = fs.readdirSync('test/rendering/data').map((file) => ({
  id: file.replace('.json', ''),
  render: {
    options: { renderer: 'svg' },
    properties: require(path.resolve(source, file)), // eslint-disable-line
  },
}));

const { name, version } = require(path.resolve(__dirname, './package.json')); // eslint-disable-line

const versionHash = crypto.createHash('md5').update(`${name}@${version}`).digest('hex').slice(0, 4);

const replacementStrings = {
  'process.env.VERSION_HASH': JSON.stringify(versionHash),
  'process.env.PACKAGE_VERSION': JSON.stringify(version),
};

module.exports = {
  build: {
    replacementStrings,
  },
  serve: {
    renderConfigs,
    flags: {
      panZoom: true,
    },
  },
};
