module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/src/**/__tests__/*.spec.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!d3|internmap|delaunator|robust-predicates|sinon)'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './reports/junit',
      },
    ],
  ],
  coverageReporters: ['text-summary', 'lcov'],
  coverageDirectory: './coverage',
};
