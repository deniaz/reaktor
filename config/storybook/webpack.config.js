const path = require('path');

module.exports = (storybookConfig, configType) => {
  storybookConfig.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [require('postcss-flexbugs-fixes'), autoprefixer({ flexbox: 'no-2009' })],
        },
      },
    ],
  });

  storybookConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
          importLoaders: 2,
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      },
      'sass-loader',
    ],
  });

  return storybookConfig;
};
