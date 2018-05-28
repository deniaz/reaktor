module.exports = {
  rootDir: '../../',
  testMatch: ['<rootDir>/src/**/*.test.js?(x)'],
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/file-mock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
