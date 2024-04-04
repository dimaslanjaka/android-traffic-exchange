const paths = require('./config/paths');
const gulp = require('gulp');
const { generateRouteHtml } = require('./html/generate');
const { copyPath, fs, array_unique } = require('sbg-utility');
const yaml = require('yaml');
const gch = require('git-command-helper');
/** @type {typeof import('./_config.json')} */
const config = yaml.parse(fs.readFileSync(__dirname + '/_config.yml', 'utf-8'));
const args = require('./config/cli');

// static html builder

const configExcludes = array_unique([
  '.gitignore',
  /** ignore auto generated post (processed by `sbg post copy`) */
  '**/_posts/**',
  /** ignore hexo post data folder */
  '**/_data/**',
  /** ignore markdown files (processed by `gulp route`) */
  '**/*.md',
  /** ignore dot files */
  '**/.*',
  '**/LICENSE',
  '**/License.md',
  '**/node_modules/**',
  '**/readme.md',
  '**/bin',
  // vscode settings
  '**/.vscode',
  // vscode frontmatter plugin folder
  '**/.frontmatter',
  // add exclude from _config.yml
  ...config.exclude
]);

// generate html to build dir
gulp.task('build-html', generateRouteHtml);
// copy assets to build dir
gulp.task('build-asset', async () => {
  // backup dist/index.html
  const backupIndex = paths.tmp + '/backup/index.html';
  const sourceIndex = paths.build + '/index.html';
  await copyPath(sourceIndex, backupIndex);
  // copy paths.public to paths.build
  await new Promise((resolve, reject) => {
    gulp
      .src('**/*.*', { cwd: paths.public, ignore: ['.gitignore'] })
      .pipe(gulp.dest(paths.build))
      .on('end', () => resolve('ends'))
      .on('error', reject);
  });
  // copy /source to paths.build
  await new Promise((resolve, reject) => {
    gulp
      .src('**/*.*', {
        cwd: paths.cwd + '/source',
        ignore: configExcludes
      })
      .pipe(gulp.dest(paths.build))
      .on('end', () => resolve('ends'))
      .on('error', reject);
  });
  // restore dist/index
  await copyPath(backupIndex, sourceIndex);
});

gulp.task('build', gulp.series('build-html', 'build-asset'));

gulp.task('watch-build', () => {
  let building = false;
  const build = async () => {
    if (!building) {
      building = true;
      await gch.spawnAsync('yarn', ['watch:build'], { shell: true, stdio: 'inherit' });
      building = false;
    }
  };
  let patterns = ['src/**/*.*', 'public/**/*.*', 'source/**/*.*', 'config/**/*.*', 'html/**/*.*'];
  // change watch files by -p=patterns comma separated
  if (args.p) patterns = String(args.p).split(',');
  const watcher = gulp.watch(patterns, {
    ignored: ['**/node_modules', '**/posts/**', '**/_data/**', '**/_posts/**', '**/post-images/**', '**/tmp/**']
  });
  watcher.on('change', (filename, _stat) => {
    console.log(filename);
    if (/.(ts|tsx|jsx|js|css|scss)$/.test(filename)) build();
  });
  return watcher;
});

gulp.task('build-watch', gulp.series('watch-build'));
