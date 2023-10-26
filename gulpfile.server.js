const express = require('express');
const gulp = require('gulp');
const { path, fs } = require('sbg-utility');
const yaml = require('yaml');
/** @type {typeof import('./_config.json')} */
const config = yaml.parse(fs.readFileSync(__dirname + '/_config.yml', 'utf-8'));

gulp.task('serve', () => {
  var app = express();

  app.use('/', express.static(path.join(__dirname, config.public_dir)));

  app.listen(4000, function () {
    console.log('Production build listening on port 4000!');
  });
});
