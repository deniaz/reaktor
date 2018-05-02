const path = require('path');

const config = require('../webpack.config');

module.exports = (baseConfig, configType) => {
  config.module.rules.forEach((rule) => baseConfig.module.rules.push(rule));
  return baseConfig;
};
