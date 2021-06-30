module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        // preset added for jsx support in jest unit test
        ['@babel/preset-react'],
      ],
    },
  },
};
