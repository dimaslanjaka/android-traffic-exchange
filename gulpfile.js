// enable typescript file import from js file
require('ts-node').register({
  compilerOptions: { ...require('./tsconfig.json').compilerOptions, checkJs: false, strict: false, noEmit: true },
  transpileOnly: true
});

const gulp = require('gulp');
const { path, fs, writefile } = require('sbg-utility');
const { obj } = require('through2');
const yaml = require('yaml');
const paths = require('./config/paths');
const { spawnAsync } = require('git-command-helper');
const cli = require('./config/cli');
/** @type {typeof import('./_config.json')} */
const config = yaml.parse(fs.readFileSync(__dirname + '/_config.yml', 'utf-8'));
require('./gulpfile.config');
require('./gulpfile.build');
require('./gulpfile.server');

// notice webpack file changes
// by add space to ./src/index.tsx
// gulp.task('notice', noticeWebpack);

// generate route
gulp.task('route', async () => {
  const routes = [
    {
      title: 'Website Traffic Exchange For Android',
      description: 'Website traffic exchange now available on android',
      filename: 'backend/home.html',
      meta: {
        date: {
          property: 'article:published_time',
          content: '2023-10-26T16:39:58+07:00'
        },
        updated: {
          property: 'article:modified_time',
          content: '2023-10-26T16:39:58+07:00'
        }
      }
    },
    {
      title: 'Website Traffic Exchange For Android',
      description: 'Website traffic exchange now available on android',
      filename: 'backend/index.html',
      meta: {
        date: {
          property: 'article:published_time',
          content: '2023-10-27T08:14:30+07:00'
        },
        updated: {
          property: 'article:modified_time',
          content: '2023-10-27T08:14:30+07:00'
        }
      }
    }
  ];
  ['backend/referer.html', 'backend/anon.html', 'backend/info.html', 'backend/anonymity.html'].forEach(filename => {
    routes.push({
      title: 'Bot Detector - Website Traffic Exchange For Android',
      description: 'Website traffic exchange now available on android',
      filename,
      meta: {
        date: {
          property: 'article:published_time',
          content: '2023-10-27T08:14:30+07:00'
        },
        updated: {
          property: 'article:modified_time',
          content: '2023-10-29T22:05:31+07:00'
        }
      }
    });
  });
  const mapped = routes.map(item => {
    if (!item.meta) item.meta = {};
    const baseUrl = new URL(config.url);
    baseUrl.pathname = item.filename;
    const canonical = String(baseUrl);
    item.meta.canonical = {
      rel: 'canonical',
      href: canonical
    };
    item.permalink = baseUrl.pathname;
    item.meta.og_url = {
      property: 'og:url',
      content: canonical
    };
    return item;
  });
  // routes.push({
  //   title: 'Website Traffic Exchange For Android',
  //   description: 'Website traffic exchange now available on android',
  //   filename: 'backend/home.html',
  //   meta: {
  //     og_image: {
  //       property: 'og:image',
  //       content:
  //         'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrPydJSDJ0qsdxmme5yXnxWiCKL71LNDgDbdXJxGC31KXn6aG-PyQdmuOFvQ'
  //     },
  //     og_type: {
  //       property: 'og:type',
  //       content: 'article'
  //     },
  //     twitter_card: {
  //       name: 'twitter:card',
  //       content: 'summary_large_image'
  //     },
  //     twitter_image: {
  //       name: 'twitter:image',
  //       content:
  //         'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrPydJSDJ0qsdxmme5yXnxWiCKL71LNDgDbdXJxGC31KXn6aG-PyQdmuOFvQ'
  //     },
  //     language: {
  //       httpEquiv: 'Content-Language',
  //       content: 'en'
  //     },
  //     og_locale: {
  //       httpEquiv: 'og:locale',
  //       content: 'en'
  //     },
  //     tags0: {
  //       property: 'article:tag',
  //       content: 'wordpress'
  //     },
  //     tags1: {
  //       property: 'article:tag',
  //       content: 'blogger'
  //     },
  //     tags2: {
  //       property: 'article:tag',
  //       content: 'html'
  //     },
  //     tags3: {
  //       property: 'article:tag',
  //       content: 'blogging'
  //     },
  //     tags4: {
  //       property: 'article:tag',
  //       content: 'programming'
  //     }
  //   },
  //   permalink: 'android-traffic-exchange/backend/home.html'
  // });

  // copy public template to tmp/static folder
  const destBase = path.join(paths.tmp, 'static');
  const template = fs.readFileSync(path.join(paths.public, 'index.html'), 'utf-8');
  mapped.forEach(item => {
    const dest = path.join(destBase, item.filename);
    if (!fs.existsSync(path.dirname(dest))) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
    }
    writefile(
      dest,
      template.replace('</head>', '<script defer src="' + paths.base + 'runtime/main.js"></script></head>')
    );
    console.log('dev server static html generated', dest);
  });
  writefile(path.join(__dirname, 'routes.json'), JSON.stringify(mapped));
});

// copy releases to dist
gulp.task('copy-release', async () => {
  // copy apks
  if (fs.existsSync(path.join(__dirname, 'release'))) {
    const dest = path.join(paths.public, 'release');
    await new Promise((resolve, reject) => {
      gulp
        .src('**/*', { cwd: path.join(__dirname, 'release'), dot: true })
        .pipe(
          obj(
            /**
             *
             * @param {import('vinyl').BufferFile} file
             * @param {*} _
             * @param {} cb
             */
            (file, _, cb) => {
              if (file.isDirectory()) return cb();
              // only copy files under 100MB
              const sizeInMb = Math.round(file.stat.size / 1048576);
              if (sizeInMb < 100 && file.stat.size > 0) {
                return cb(null, file);
              } else {
                console.log('not copying', file.basename, 'size', sizeInMb);
              }
              cb();
            }
          )
        )
        .pipe(gulp.dest(dest))
        .on('end', () => {
          resolve(null);
        })
        .on('error', reject);
    });
  }

  if (fs.existsSync(path.join(__dirname, 'images'))) {
    await fs.move(path.join(__dirname, 'images'), path.join(paths.public, 'images'), { overwrite: true });
  }
  await fs.copy(path.join(__dirname, '.gitattributes'), path.join(paths.build, '.gitattributes'));
  await fs.copy(path.join(__dirname, 'readme.md'), path.join(paths.build, 'readme.md'));
  await fs.copy(path.join(__dirname, 'changelog.md'), path.join(paths.build, 'changelog.md'));
  await fs.copy(path.join(__dirname, 'changelog-commit.md'), path.join(paths.build, 'changelog-commit.md'));
  await fs.copy(path.join(__dirname, 'LICENSE'), path.join(paths.build, 'LICENSE'));
  // copy public -> dist
  await new Promise((resolve, reject) => {
    gulp
      .src('**/*', { cwd: paths.public, dot: true, ignore: ['.gitignore', 'index.html'] })
      .pipe(gulp.dest(paths.build))
      .on('end', () => {
        resolve(null);
      })
      .on('error', reject);
  });
});

const deploy_git = path.join(__dirname, '.deploy_git');
const repo = 'https://github.com/dimaslanjaka/android-traffic-exchange.git';

gulp.task('deploy-init', async () => {
  if (!fs.existsSync(deploy_git)) {
    await spawnAsync('git', ['clone', '--single-branch', '--branch', 'master', repo, '.deploy_git'], {
      cwd: __dirname,
      stdio: 'inherit',
      shell: true
    });
  }
});

// copy dist to .deploy_git
gulp.task('deploy-copy', async () => {
  // reset from origin
  await spawnAsync('git', ['reset', '--hard', 'origin/master'], { cwd: deploy_git, shell: true, stdio: 'inherit' });
  // pull latest changes from origin
  await spawnAsync('git', ['pull'], { cwd: deploy_git, shell: true, stdio: 'inherit' });
  // clean existing files
  await new Promise((resolve, reject) => {
    gulp
      .src('**/*.*', { cwd: deploy_git, ignore: ['.gitignore'] })
      .pipe(
        obj((file, _, cb) => {
          // delete file
          fs.removeSync(file.path);
          cb();
        })
      )
      .pipe(gulp.dest(paths.tmp + '/gulp-deploy-copy'))
      .on('end', () => {
        resolve(null);
      })
      .on('error', reject);
  });
  // copy new assets
  await new Promise((resolve, reject) => {
    gulp
      .src('**/*', { cwd: paths.build, dot: true })
      .pipe(gulp.dest(deploy_git))
      .on('end', () => {
        resolve(null);
      })
      .on('error', reject);
  });
});

// gulp deploy-commit -m "hello world" -m "asu" -m "xx `cc`"
gulp.task('deploy-commit', async () => {
  await spawnAsync('git', ['add', '.'], { cwd: deploy_git, shell: true, stdio: 'inherit' });
  const commit = typeof cli.m === 'string' ? [cli.m] : cli.m;
  const commitArgs = [];
  if (Array.isArray(commit)) {
    commit.forEach(msg => commitArgs.push('-m', `"${msg}"`));
  }
  // aarch64
  // output-metadata.json
  const info = require('./public/release/output-metadata.json');
  commitArgs.push('-m', `"release version: ${info.elements[0].versionName}"`);
  console.log(commitArgs);

  if (commitArgs.length > 0) {
    await spawnAsync('git', ['commit'].concat(commitArgs), { cwd: deploy_git, shell: true, stdio: 'inherit' });
  } else {
    console.error('supplied git commit arguments is empty');
  }
});

gulp.task('deploy-push', async () => {
  await spawnAsync('git', ['lfs', 'push', '--all', 'origin', 'master'], {
    cwd: deploy_git,
    shell: true,
    stdio: 'inherit'
  });
  await spawnAsync('git', ['push', '-u', 'origin', 'master'], { cwd: deploy_git, shell: true, stdio: 'inherit' });
});

gulp.task('init-lfs', async () => {
  await spawnAsync('git', ['lfs', 'install'], { cwd: deploy_git, shell: true, stdio: 'inherit' });
  // track apk files
  await spawnAsync('git', ['lfs', 'track', '*.apk'], { cwd: deploy_git, shell: true, stdio: 'inherit' });
});

gulp.task('copy-ci', done => {
  // delete entire destination
  fs.rmSync(__dirname + '/.deploy_git/.github', { recursive: true, force: true });
  // copy CI from compiler branch
  gulp
    .src('**/*.yml', { cwd: __dirname + '/.github' })
    .pipe(gulp.dest(__dirname + '/.deploy_git/.github'))
    .on('end', async () => {
      // commit to master branch
      try {
        await spawnAsync('git', ['add', '.'], { cwd: __dirname + '/.deploy_git/.github' });
        await spawnAsync('git', ['commit', '-m', '"update CI from compiler"'], {
          cwd: __dirname + '/.deploy_git/.github'
        });
        await spawnAsync('git', ['push'], { cwd: __dirname + '/.deploy_git/.github' });
      } catch (e) {
        console.error(e.stdout);
      } finally {
        done();
      }
    });
});

// gulp deploy -m "hello world" -m "asu" -m "xx `cc`"
gulp.task(
  'deploy',
  gulp.series('copy-release', 'init-lfs', 'deploy-init', 'deploy-copy', 'deploy-commit', 'deploy-push')
);
