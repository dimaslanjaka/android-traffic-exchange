const { merge } = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common.js');
const cli = require('./cli');
const excludePatterns = require('./webpack.excludes');
const { modifyConfigJson } = require('./utils');
const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
const config = merge(common, {
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
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: {
      // output dev server to build folder
      // https://github.com/webpack/webpack-dev-server/issues/1141#issuecomment-1193153563
      writeToDisk: true
    },
    // bug: webpack static folder must not using unix slash in windows
    static: [
      {
        directory: path.resolve(paths.public),
        publicPath: paths.base
      },
      {
        directory: path.join(paths.tmp, 'static'),
        publicPath: paths.base
      },
      {
        directory: path.join(paths.cwd, 'source'),
        publicPath: paths.base
      }
    ],
    historyApiFallback: true,
    compress: true,
    hot: true,
    // yarn start --port 8888
    port: cli.port || 4000,
    // yarn start --host custom.host.name
    host: cli.host || 'adsense.webmanajemen.com',
    open: false
  },
  watchOptions: {
    ignored: [
      '_config.json',
      'routes.json',
      '**/tmp/**',
      '**/src/posts/**',
      '**/source/_posts/**',
      '**/post-images/**'
    ],
    // delay build task 10s after changes
    aggregateTimeout: 10000
  }
});

// write to ../config.json
modifyConfigJson({ mode: 'development' });
if (require.main === module) {
  console.log(config);
}

module.exports = config;
