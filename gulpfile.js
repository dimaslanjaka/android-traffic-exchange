// enable typescript file import from js file
require('ts-node').register({
  compilerOptions: { ...require('./tsconfig.json').compilerOptions, checkJs: false, strict: false, noEmit: true },
  transpileOnly: true
});

const yaml = require('yaml');
const gulp = require('gulp');
const { obj } = require('through2');
const { path, fs, writefile } = require('sbg-utility');
/** @type {typeof import('./_config.json')} */
const config = yaml.parse(fs.readFileSync(__dirname + '/_config.yml', 'utf-8'));
const { modifyConfigJson } = require('./config/utils');

// require('./gulpfile.build');
require('./gulpfile.server');
// require('./gulpfile.page');

// notice webpack file changes
// by add space to ./src/index.tsx
// gulp.task('notice', noticeWebpack);

// just testing
const modifyCfg = () => {
  // transform _config.yml to _config.json
  const yml = yaml.parse(fs.readFileSync(path.join(__dirname, '_config.yml'), 'utf-8'));
  // write to ./config.json
  return Promise.resolve(modifyConfigJson({ ...yml, mode: 'development' }));
};

gulp.task('config', modifyCfg);
