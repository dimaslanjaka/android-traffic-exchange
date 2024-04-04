import gulp from 'gulp';
import { fs, path } from 'sbg-utility';
import { obj } from 'through2';
import paths from '../config/paths.cjs';
import getDistScripts from './getDistScripts';
import { rConfig } from './routeConfig';
import { renderStatic } from './template';

/**
 * generate route by populating `/routes.json` with template `/{paths.build}/index.html`
 */
export async function generateRouteHtml() {
  const routes = rConfig;
  const { scripts } = getDistScripts();
  const sitemaps: string[] = [];

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const { meta = {} as typeof route.meta, title = 'Website Manajemen Indonesia', filename } = route;
    const head = ([] as JSX.Element[]).concat(...scripts);
    if (meta) {
      for (const key in meta) {
        const val = meta[key];
        if (typeof val === 'string') {
          head.push(<meta name={key} content={val} key={'_' + Math.random()} />);
        } else {
          head.push(<meta {...val} key={'_' + Math.random()} />);
        }
      }
    }
    await renderStatic(
      {
        title,
        head
      },
      path.join(paths.build, filename)
    );
    const canonical = meta?.canonical;
    let sitemap: string = '';
    if (typeof canonical === 'string') {
      sitemap = canonical;
    } else if (canonical) {
      sitemap = canonical.href;
    }
    sitemaps.push(sitemap);
  }
  const uniqueSitemaps = sitemaps.filter((item, i, ar) => ar.indexOf(item) === i && item.length > 0);
  fs.writeFileSync(path.join(paths.build, 'sitemap.txt'), uniqueSitemaps.join('\n'));
}

/**
 * generate static html from `{paths.tmp}/static/**\/*.html` with script template from `/{paths.build}/index.html`
 */
export function generateRouteHtmlFromTmp() {
  const { scripts } = getDistScripts(false);
  const devScript = '<script defer src="/runtime/main.js"></script>';
  return gulp
    .src('**/*.html', { cwd: paths.tmp + '/static' })
    .pipe(
      obj((file, _encoding, cb) => {
        if (file.isDirectory() || file.isNull() || file.isStream()) return cb();
        if (!file.contents) file.contents = Buffer.from('');
        const contents = file.contents.toString().replace(devScript, scripts.join('\n'));
        file.contents = Buffer.from(contents);
        cb(null, file);
      })
    )
    .pipe(gulp.dest(paths.build));
}
