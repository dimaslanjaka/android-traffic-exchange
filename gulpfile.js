// enable typescript file import from js file
require('ts-node').register({
  compilerOptions: { ...require('./tsconfig.json').compilerOptions, checkJs: false, strict: false, noEmit: true },
  transpileOnly: true
});

const gulp = require('gulp');
const { path, fs, writefile } = require('sbg-utility');
const yaml = require('yaml');
const paths = require('./config/paths');
/** @type {typeof import('./_config.json')} */
const config = yaml.parse(fs.readFileSync(__dirname + '/_config.yml', 'utf-8'));
require('./gulpfile.config');
require('./gulpfile.build');
require('./gulpfile.server');
// require('./gulpfile.page');

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
    }
  ];
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

// copy bundled apk
gulp.task('copy-release', async () => {
  if (fs.existsSync(path.join(__dirname, 'release')))
    await fs.move(path.join(__dirname, 'release'), path.join(paths.public, 'release'), { overwrite: true });
  if (fs.existsSync(path.join(__dirname, 'images')))
    await fs.move(path.join(__dirname, 'images'), path.join(paths.public, 'images'), { overwrite: true });
});
