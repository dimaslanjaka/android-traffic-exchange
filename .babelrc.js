const paths = require('./config/paths');
const excludePatterns = require('./config/webpack.excludes')

const presets = ['@babel/env', '@babel/react', '@babel/preset-typescript'];
const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [__dirname, './src'],
      extensions: ['.jsx', '.js', '.ts', '.tsx', '.json'],
      alias: paths.aliasRelative
    }
  ]
];

module.exports.config = { cacheDirectory: './tmp/babel', presets, plugins };

/**
 *
 * @param {import('@babel/core').ConfigAPI} api
 * @returns {import('@babel/core').TransformOptions}
 */
module.exports = function (api) {
  api.cache(true);

  return { presets, plugins, ignore: excludePatterns.js };
};
