const path = require('path');
const sharedRules = require('../shared-webpack-rules');

module.exports = (storybookConfig, configType) => {
  storybookConfig.module.rules = [...storybookConfig.module.rules, ...sharedRules];

  return storybookConfig;
};
