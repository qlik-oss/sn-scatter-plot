const path = require('path');
const crypto = require('crypto');

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
    flags: {
      panZoom: true,
      DATA_BINNING: true,
      NUM_BUBBLES: true,
      PROGRESSIVE_RENDERING: true,
      CLIENT_IM_3050: true,
      SENSECLIENT_PS_17478: true,
      STYLINGPANEL_BARCHART: true,
      CLIENT_IM_747: true,
    },
  },
};
