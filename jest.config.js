module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^shared(.*)$': '<rootDir>/src/shared$1',
    '^modules(.*)$': '<rootDir>/src/modules$1',
    '^routes(.*)$': '<rootDir>/src/routes$1',
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
