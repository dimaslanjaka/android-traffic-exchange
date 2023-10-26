// enable typescript file import from js file
require('ts-node').register({
  compilerOptions: { ...require('./tsconfig.json').compilerOptions, checkJs: false, strict: false, noEmit: true },
  transpileOnly: true
});

// const gulp = require('gulp');
// const { obj } = require('through2');
// const { path, writefile } = require('sbg-utility');
// /** @type {typeof import('./_config.json')} */
// const config = yaml.parse(fs.readFileSync(__dirname + '/_config.yml', 'utf-8'));
require('./gulpfile.config');
require('./gulpfile.build');
require('./gulpfile.server');
// require('./gulpfile.page');

// notice webpack file changes
// by add space to ./src/index.tsx
// gulp.task('notice', noticeWebpack);

// gulp.task('route', async () => {
//   const routes = [];
//   routes.push({
//     title: 'Website Traffic Exchange For Android',
//     description: 'Website traffic exchange now available on android',
//     filename: 'backend/home.html',
//     meta: {
//       canonical: {
//         rel: 'canonical',
//         href: 'https://www.webmanajemen.com/android-traffic-exchange/backend/home.html'
//       },
//       og_image: {
//         property: 'og:image',
//         content:
//           'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrPydJSDJ0qsdxmme5yXnxWiCKL71LNDgDbdXJxGC31KXn6aG-PyQdmuOFvQ'
//       },
//       og_url: {
//         property: 'og:url',
//         content: 'https://www.webmanajemen.com/android-traffic-exchange/backend/home.html'
//       },
//       og_type: {
//         property: 'og:type',
//         content: 'article'
//       },
//       twitter_card: {
//         name: 'twitter:card',
//         content: 'summary_large_image'
//       },
//       twitter_image: {
//         name: 'twitter:image',
//         content:
//           'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrPydJSDJ0qsdxmme5yXnxWiCKL71LNDgDbdXJxGC31KXn6aG-PyQdmuOFvQ'
//       },
//       date: {
//         property: 'article:published_time',
//         content: '2023-10-26T16:39:58+07:00'
//       },
//       updated: {
//         property: 'article:modified_time',
//         content: '2023-10-26T16:39:58+07:00'
//       },
//       language: {
//         httpEquiv: 'Content-Language',
//         content: 'en'
//       },
//       og_locale: {
//         httpEquiv: 'og:locale',
//         content: 'en'
//       },
//       tags0: {
//         property: 'article:tag',
//         content: 'wordpress'
//       },
//       tags1: {
//         property: 'article:tag',
//         content: 'blogger'
//       },
//       tags2: {
//         property: 'article:tag',
//         content: 'html'
//       },
//       tags3: {
//         property: 'article:tag',
//         content: 'blogging'
//       },
//       tags4: {
//         property: 'article:tag',
//         content: 'programming'
//       }
//     },
//     permalink: 'android-traffic-exchange/backend/home.html'
//   });
//   writefile(path.join(__dirname, 'routes.json'), JSON.stringify(routes));
// });
