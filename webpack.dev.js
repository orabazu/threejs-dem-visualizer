const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map', // TODO add multiple webpack conf
  performance: {
    hints: "warning"
  },
});