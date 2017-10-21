module.exports = {
  verbose: true,
  // testRegex: './tests/.*.js$',
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['<rootDir>/*/__mocks__/*'],
  collectCoverageFrom: ['src/**/*.js'],
  testMatch: ['<rootDir>/tests/**/*.js'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['js', 'json'],
};
