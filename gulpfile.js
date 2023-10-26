// enable typescript file import from js file
require('ts-node').register({
  compilerOptions: { ...require('./tsconfig.json').compilerOptions, checkJs: false, strict: false, noEmit: true },
  transpileOnly: true
});

// const { obj } = require('through2');
// const { path, fs } = require('sbg-utility');
// /** @type {typeof import('./_config.json')} */
// const config = yaml.parse(fs.readFileSync(__dirname + '/_config.yml', 'utf-8'));
require('./gulpfile.config');
// require('./gulpfile.build');
require('./gulpfile.server');
// require('./gulpfile.page');

// notice webpack file changes
// by add space to ./src/index.tsx
// gulp.task('notice', noticeWebpack);
