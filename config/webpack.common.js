const paths = require('./paths.cjs');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const excludePatterns = require('./webpack.excludes');
const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  title: 'Website Manajemen Indonesia',
  template: paths.public + '/index.html', // template file
  filename: 'index.html' // output file
});

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: {},
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    chunkFilename: 'runtime/chunk/[name].[chunkhash].js',
    assetModuleFilename: 'runtime/media/[name][hash][ext][query]',
    publicPath: paths.base
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      { test: /\.bck$/, loader: 'ignore-loader' },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb
          }
        },
        generator: {
          // If emitting file, the file path is
          filename: 'runtime/fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'runtime/images/[hash][ext][query]'
        }
      },
      {
        test: /\.(t|j|cj|mj)sx?$/,
        exclude: [/node_modules/].concat(excludePatterns.js),
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    htmlPlugin,
    // process undefined fix - https://stackoverflow.com/a/65018686/6404439
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss', '.css', '.json', '.otf'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify'),
      buffer: require.resolve('buffer/'),
      constants: require.resolve('constants-browserify'),
      stream: require.resolve('stream-browserify'),
      'process/browser': require.resolve('process/browser')
    },
    alias: paths.aliasAbsolute
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.join(process.cwd(), '.cache')
  }
};

module.exports = config;
