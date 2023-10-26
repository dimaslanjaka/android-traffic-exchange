const { path } = require('sbg-utility');

const alias = {
  '*': '.',
  '@utils': './src/utils',
  '@components': './src/components',
  '@routes': './src/routes',
  '@assets': './src/assets',
  '@project': './src/project',
  '@src': './src',
  '@root': './',
  '@post': './src/posts',
  'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime'),
  'react/jsx-runtime': require.resolve('react/jsx-runtime')
};

const aliasRelative = alias;

const aliasAbsolute = (() => {
  const clone = alias;
  for (const key in clone) {
    const value = clone[key];
    if (!key.startsWith('react/')) {
      clone[key] = path.resolve(__dirname, '..', value);
    }
  }
  return clone;
})();

module.exports = {
  /** Source files */
  src: path.resolve(__dirname, '../src'),
  /** Public path */
  public: path.resolve(__dirname, '../public'),
  /** Production files */
  build: path.resolve(__dirname, '../dist'),
  /** Temp directory */
  tmp: path.resolve(__dirname, '../tmp'),
  /** Project Working Directory */
  cwd: path.resolve(__dirname, '..'),
  /** base path */
  base: '/android-traffic-exchange/',
  /** import alias with relative path */
  aliasRelative,
  /** import alias with absolute path */
  aliasAbsolute
};
