const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');
const sharedRules = require('./shared-webpack-rules');
const dev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: ['babel-polyfill', 'preset/preset.css', './src'],
  module: {
    rules: [
      ...sharedRules,
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: dev ? 'development' : 'production',
};
