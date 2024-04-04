const common = require('./config/webpack.common.js');
const { merge } = require('webpack-merge');
const paths = require('./config/paths');
const excludePatterns = require('./config/webpack.excludes');
// const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: 'development',
  entry: [paths.src + '/index.tsx'],
  output: {
    filename: 'runtime/main.js',
    publicPath: paths.base
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    '@csstools/postcss-is-pseudo-class',
                    {
                      // Options
                    }
                  ]
                ]
              }
            }
          }
        ]
      },
      {
        //test: /\.(s[a|c]ss)$/,
        test: /.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        exclude: excludePatterns.css
      }
    ]
  },
  devServer: {
    // devMiddleware: {
    //   // output dev server to build folder
    //   // https://github.com/webpack/webpack-dev-server/issues/1141#issuecomment-1193153563
    //   writeToDisk: true
    // },
    // bug: webpack static folder must not using unix slash in windows
    // static: [
    //   {
    //     directory: path.resolve(paths.public),
    //     publicPath: paths.base
    //   },
    //   {
    //     directory: path.join(paths.tmp, 'static'),
    //     publicPath: paths.base
    //   }
    // ],
    historyApiFallback: true,
    // compress: true,
    // hot: true,
    static: './public',
    // yarn start --port 8888
    port: 4000,
    // yarn start --host custom.host.name
    host: 'adsense.webmanajemen.com',
    open: false
  }
};

module.exports = merge(common, config);
