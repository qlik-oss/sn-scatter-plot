const specFiles = ['src/**/*.spec.js'];

module.exports = {
  glob: specFiles,
  src: [],
  watchGlob: specFiles,
  coverage: true,
  warnings: true,
  mocha: {
    bail: false,
    reporter: 'min',
  },
  mocks: [
    ['**/d3-color/src/index.js', '{ hcl() {} }'],
    ['**/d3-scale/src/index.js', '{}'],
    ['**/hammer.js', '{}'],
    [
      '**/dist/conversion.js',
      `{
      colorChart: {
        importProperties() {},
        exportProperties() {},
      },
    }`,
    ],
  ],
  babel: {
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-react',
      ],
    },
  },
};
