const path = require('path');

const sourcePath = [__dirname, 'test', 'rendering', 'data'];
const source = path.resolve(...sourcePath);
const mes_2_color_dim = require(path.resolve(source, 'mes_2_color_dim.json')); // eslint-disable-line

module.exports = {
  serve: {
    renderConfigs: [
      {
        id: 'mes_2_color_dim',
        render: {
          options: {
            renderer: 'svg',
          },
          properties: mes_2_color_dim,
        },
      },
    ],
  },
};
