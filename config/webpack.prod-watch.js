const { merge } = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common.js');
const excludePatterns = require('./webpack.excludes');
const { modifyConfigJson } = require('./utils');

/**
 * @type {import('webpack').Configuration}
 */
const config = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: paths.base,
    filename: 'runtime/js/[name].[contenthash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(s[a|c]ss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        exclude: excludePatterns.css
      }
    ]
  }
});

module.exports = merge(config, require('./webpack.entry'));

// write to ../config.json
modifyConfigJson({ mode: 'production' });
