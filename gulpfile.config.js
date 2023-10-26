// enable typescript file import from js file
// require('ts-node').register({
//   compilerOptions: { ...require('./tsconfig.json').compilerOptions, checkJs: false, strict: false, noEmit: true },
//   transpileOnly: true
// });

const yaml = require('yaml');
const gulp = require('gulp');
const { path, fs } = require('sbg-utility');
const { modifyConfigJson } = require('./config/utils');
const paths = require('./config/paths');

// just testing
const modifyCfg = () => {
  // transform _config.yml to _config.json
  const yml = yaml.parse(fs.readFileSync(path.join(__dirname, '_config.yml'), 'utf-8'));
  // write to ./config.json
  return Promise.resolve(modifyConfigJson({ ...yml, mode: 'development', paths }));
};

gulp.task('config', modifyCfg);
