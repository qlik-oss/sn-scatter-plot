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
