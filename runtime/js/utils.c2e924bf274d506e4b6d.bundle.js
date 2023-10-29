!function(){var e,t,r,o,n,a={2740:function(e,t,r){"use strict";r.d(t,{Qy:function(){return n}});var o=JSON.parse('{"mode":"production","title":"WMI","subtitle":"Website Management Indonesia","description":"Website Management Indonesia is a blog about scripts, tips and tricks, games, software. Covering php, javascript, jquery, mysql, seo, e-commerce and others.","author":"L3n4r0x","keywords":"the legend of neverland, genshin impact, games, how to, tips and tricks, php, javascript, jquery, mysql, seo, e-commerce","timezone":"Asia/Jakarta","language":["id","en","zh-TW","zh-CN","zh-HK","th","tl"],"url":"https://www.webmanajemen.com/","root":"/","permalink":":title.html","pretty_urls":{"trailing_index":true,"trailing_html":true},"post_dir":"src-posts","public_dir":"dist","source_dir":"source","default_category":"uncategorized","post_asset_folder":true,"marked":{"prependRoot":true,"postAsset":true},"highlight":{"enable":false,"line_number":false,"auto_detect":false,"tab_replace":"  ","wrap":false,"hljs":true},"prismjs":{"enable":false,"preprocess":true,"line_number":true,"tab_replace":""},"index_generator":{"path":"","per_page":10,"order_by":"-updated","pagination_dir":"page"},"generator":{"cache":false,"image":{"type":"url"}},"hexo-shortcodes":{"raw":true},"exclude":["**/.git*","**/.git","**/.vscode","**/.idea","**/.env","**/License.md","**/frontmatter.json","**/.frontmatter","**/git-hooks","**/License","**/bin/**","**/backend/**","**/MIDI.js/**","**/{readme,README,changelog,CHANGELOG,license,LICENSE,License}.md","**/Test/**","**/guzzle/**","**/exclude/**","**/hexo-post-parser/**","**/node_modules/**","**/vendor/**","**/ads/**","**/tmp/**","**/hexo-theme-unit-test/**","**/*-backup*"],"external_link":{"enable":true,"field":"site","safelink":{"enable":true,"exclude":["webmanajemen.com","git.webmanajemen.com","**/chimeraland/recipes.html","**/embed.html","**/tools.html","**/safelink.html","**/node_modules/**","**/vendor/**"],"redirect":"https://www.webmanajemen.com/page/safelink.html?url=","type":"base64","password":"unique-password"},"exclude":["webmanajemen.com","web-manajemen.blogspot.com","dimaslanjaka.github.io"]},"analytics":{"tagmanager":"GTM-NJNNXSR","GA4":"G-BG75CLNJZ1","GA3":"UA-106238155-1","cloudflare":"2157c0f3b9e74a92badffe39156166b9"},"paths":{"src":"D:/Repositories/android-blog/release-repo/src","public":"D:/Repositories/android-blog/release-repo/public","build":"D:/Repositories/android-blog/release-repo/dist","tmp":"D:/Repositories/android-blog/release-repo/tmp","cwd":"D:/Repositories/android-blog/release-repo","base":"/android-traffic-exchange/","aliasRelative":{"*":"D:/Repositories/android-blog/release-repo","@utils":"D:/Repositories/android-blog/release-repo/src/utils","@components":"D:/Repositories/android-blog/release-repo/src/components","@routes":"D:/Repositories/android-blog/release-repo/src/routes","@assets":"D:/Repositories/android-blog/release-repo/src/assets","@project":"D:/Repositories/android-blog/release-repo/src/project","@src":"D:/Repositories/android-blog/release-repo/src","@root":"D:/Repositories/android-blog/release-repo","@post":"D:/Repositories/android-blog/release-repo/src/posts","react/jsx-dev-runtime":"D:\\\\Repositories\\\\android-blog\\\\release-repo\\\\node_modules\\\\react\\\\jsx-dev-runtime.js","react/jsx-runtime":"D:\\\\Repositories\\\\android-blog\\\\release-repo\\\\node_modules\\\\react\\\\jsx-runtime.js"},"aliasAbsolute":{"*":"D:/Repositories/android-blog/release-repo","@utils":"D:/Repositories/android-blog/release-repo/src/utils","@components":"D:/Repositories/android-blog/release-repo/src/components","@routes":"D:/Repositories/android-blog/release-repo/src/routes","@assets":"D:/Repositories/android-blog/release-repo/src/assets","@project":"D:/Repositories/android-blog/release-repo/src/project","@src":"D:/Repositories/android-blog/release-repo/src","@root":"D:/Repositories/android-blog/release-repo","@post":"D:/Repositories/android-blog/release-repo/src/posts","react/jsx-dev-runtime":"D:\\\\Repositories\\\\android-blog\\\\release-repo\\\\node_modules\\\\react\\\\jsx-dev-runtime.js","react/jsx-runtime":"D:\\\\Repositories\\\\android-blog\\\\release-repo\\\\node_modules\\\\react\\\\jsx-runtime.js"}},"nav_top":{"Home":"/"},"nav_aside":{"Home":"/"}}');JSON.parse('{"name":"hexo-webpack","version":"1.0.0","description":"generate static site jekyll/hexo/huge markdown posts using webpack","main":"gulpfile.js","private":true,"scripts":{"prepare":"touch routes.json && husky install","build":"rm -rf dist && run-s \\"build:**\\" && gulp build","build:webpack":"webpack --progress --mode production --config config/webpack.prod.js","watch:build":"webpack --progress --mode production --config config/webpack.prod-watch.js && gulp build","clean":"rm -rf dist tmp","clean:build":"yarn run clean && yarn run build","php":"php -S 127.0.0.1:4000 -t dist","prod":"cd page && yarn install --omit=dev --production","prod:update":"cd page && npx npm-check-updates -u && yarn install --omit=dev --production","start":"cross-env-shell NODE_ENV=development webpackAnalyze=server webpack-dev-server --progress --no-open --mode development --config config/webpack.dev.js \\"$@\\"","test:dist":"yarn run build:webpack && yarn run build:html && gulp static && gulp page:copy","update":"yarn run update:ncu","update:ncu":"npx npm-check-updates --enginesNode -u -x chalk,jsdom,deepmerge-ts","x":"node config/cli \\"$@\\"","dev":"webpack-dev-server --progress --no-open --mode development --config config/webpack.dev-prod.js \\"$@\\"","dev:php":"php -S 127.0.0.1:8888"},"author":"Dimas Lanjaka <dimaslanjaka@gmail.com> (http://webmanajemen.com)","license":"ISC","repository":{"url":"https://github.com/dimaslanjaka/page.git"},"devDependencies":{"@babel/core":"^7.23.0","@babel/preset-env":"^7.22.20","@babel/preset-react":"^7.16.5","@babel/preset-typescript":"^7.23.0","@tailwindcss/typography":"^0.5.10","@types/bluebird":"^3","@types/bluebird-global":"^3.5.14","@types/bootstrap":"^5","@types/crypto-js":"^4","@types/eslint":"^8","@types/express":"^4","@types/fs-extra":"^11","@types/gapi":"^0.0.44","@types/gapi.auth2":"^0.0.57","@types/gapi.client.analytics-v3":"^0.0.1","@types/google.accounts":"^0.0.9","@types/gulp":"^4","@types/minimist":"^1","@types/node":"^20.8.5","@types/node-sass":"^4.11.4","@types/prop-types":"^15","@types/react":"^17","@types/react-dom":"^17","@types/webpack-bundle-analyzer":"^4","@typescript-eslint/eslint-plugin":"^6.7.4","@typescript-eslint/parser":"^6.7.4","autoprefixer":"^10.4.16","babel-loader":"^9.1.3","babel-plugin-module-resolver":"^5.0.0","binary-collections":"^2.0.2","clean-webpack-plugin":"^4.0.0","cross-env":"^7.0.3","css-loader":"^6.8.1","dotenv":"^16.3.1","eslint":"^8.50.0","eslint-config-prettier":"^9.0.0","eslint-plugin-prettier":"^5.0.0","eslint-plugin-react-hooks":"^4.6.0","express":"^4.18.2","flowbite-typography":"^1.0.3","fs-extra":"^11.1.1","git-command-helper":"^2.0.2","glob":"^10.3.10","gulp":"^4.0.2","hexo":"^7.0.0-rc2","hexo-asset-link":"^2.2.2","hexo-post-parser":"^1.2.12","hexo-renderers":"^2.0.2","hexo-shortcodes":"^1.2.3","html-webpack-plugin":"^5.5.0","husky":"^8.0.3","ignore-loader":"^0.1.2","jsdom":"^22.1.0","lint-staged":"^14.0.1","minimist":"^1.2.8","node-sass":"^9.0.0","postcss":"^8.4.31","postcss-import":"^15.1.0","postcss-loader":"^7.3.3","postcss-preset-env":"^9.1.4","prettier":"^3.0.3","process":"^0.11.10","purgecss":"^5.0.0","sass-loader":"^13.3.2","sbg-utility":"^1.1.6","static-blog-generator":"^3.0.1","style-loader":"^3.3.3","tailwindcss":"^3.3.3","through2":"^4.0.2","ts-node":"^10.9.1","tsconfig-paths-webpack-plugin":"^4.1.0","typescript":"^5.2.2","upath":"^2.0.1","webpack":"^5.89.0","webpack-bundle-analyzer":"^4.9.1","webpack-cli":"^5.1.4","webpack-dev-server":"^4.6.0","webpack-merge":"^5.9.0","yaml":"^2.3.2"},"dependencies":{"@fancyapps/ui":"^5.0.24","axios":"^1.5.1","axios-cache-interceptor":"^1.3.1","bluebird":"^3.7.2","buffer":"^6.0.3","constants-browserify":"^1.0.0","crypto-browserify":"^3.12.0","flowbite":"^1.6.6","flowbite-react":"^0.5.0","localforage":"^1.10.0","match-sorter":"^6.3.1","moment":"^2.29.4","moment-timezone":"^0.5.43","os-browserify":"^0.3.0","path-browserify":"^1.0.1","raw-loader":"^4.0.2","react":"^17.0.2","react-dom":"^17.0.2","react-icons":"^4.11.0","react-markdown":"^9.0.0","react-router-dom":"^6.16.0","rehype-raw":"^7.0.0","remark-gfm":"^4.0.0","rsuite":"^5.40.0","safelinkify":"^1.2.2","sort-by":"^1.2.0","stream-browserify":"^3.0.0","tw-elements":"^1.0.0","tw-elements-react":"^1.0.0-alpha1"},"engines":{"node":"^14"},"resolutions":{"prettier":"^3","typescript":"4.9.5","jsdom":"^21","@types/node":"^14","deepmerge-ts":"^4","react":"^18","react-dom":"^18","@types/react":"^18","@types/react-dom":"^18","react-router-dom":"^6.15.0","static-blog-generator":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/static-blog-generator/release/static-blog-generator.tgz","instant-indexing":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/instant-indexing/release/instant-indexing.tgz","sbg-utility":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/sbg-utility/release/sbg-utility.tgz","sbg-api":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/sbg-api/release/sbg-api.tgz","sbg-cli":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/sbg-cli/release/sbg-cli.tgz","sbg-server":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/sbg-server/release/sbg-server.tgz","nodejs-package-types":"https://github.com/dimaslanjaka/nodejs-package-types/raw/a2e797bc27975cba20ef4c87547841e6341bfcf4/release/nodejs-package-types.tgz","cross-spawn":"https://github.com/dimaslanjaka/node-cross-spawn/raw/ff4b648/release/cross-spawn.tgz","hexo":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo.tgz","@types/hexo":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo.tgz","hexo-asset-link":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-asset-link.tgz","hexo-cli":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-cli.tgz","hexo-front-matter":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-front-matter.tgz","hexo-log":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-log.tgz","@types/hexo-log":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-log.tgz","hexo-util":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-util.tgz","warehouse":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/warehouse.tgz"},"packageManager":"yarn@4.0.0","hexo":{"version":"7.0.0-rc2"},"workspaces":["src-posts","packages/hpp","packages/hr","packages/hs"]}'),JSON.parse('[{"title":"Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/home.html","meta":{"date":{"property":"article:published_time","content":"2023-10-26T16:39:58+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-26T16:39:58+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/home.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/home.html"}},"permalink":"/backend/home.html"},{"title":"Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/index.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-27T08:14:30+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/index.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/index.html"}},"permalink":"/backend/index.html"},{"title":"Bot Detector - Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/referer.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-29T22:05:31+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/referer.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/referer.html"}},"permalink":"/backend/referer.html"},{"title":"Bot Detector - Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/anon.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-29T22:05:31+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/anon.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/anon.html"}},"permalink":"/backend/anon.html"},{"title":"Bot Detector - Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/info.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-29T22:05:31+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/info.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/info.html"}},"permalink":"/backend/info.html"},{"title":"Bot Detector - Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/anonymity.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-29T22:05:31+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/anonymity.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/anonymity.html"}},"permalink":"/backend/anonymity.html"}]');const n=o},713:function(e,t,r){"use strict";function o(e,t,r,o,n,a){let i="";if(r){const e=new Date;e.setTime(e.getTime()+24*parseInt("".concat(r))*60*60*1e3),i="; expires="+e.toUTCString()}o||(o="/");const s=e+"="+encodeURIComponent(t)+i+"; path="+o+(n?"; domain="+n:"")+(a?"; secure":"");document.cookie=s}function n(e){const t=e+"=",r=document.cookie.split(";");for(let e=0;e<r.length;e++){let o=r[e];for(;" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}r.d(t,{On:function(){return m},ZS:function(){return g},xJ:function(){return b.Z},ej:function(){return n},BE:function(){return p},Vt:function(){return u},bc:function(){return d},fs:function(){return c},Zo:function(){return i},d8:function(){return o}}),-1!=navigator.userAgent.toLowerCase().indexOf("msie")||navigator.userAgent.toLowerCase().indexOf("trident"),r(1354);var a=r(6149);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;return Math.random().toString(36).substring(2,e+2)},s=function(){};function c(e,t){return t=Object.assign({proxy:!1,onload:s,onerror:s},t||{}),new Promise(((r,o)=>{var n,a;const i=document.createElement("script");return e.startsWith("//")&&(e=window.location.protocol+e),e.startsWith("http")&&t.proxy&&(e="https://crossorigin.me/"+e),Array.from(document.scripts).map((e=>l(e.src))).filter((t=>t===l(e))).length>0?r(null===(n=t.onload)||void 0===n?void 0:n.call(null)):document.querySelector('script[src="'.concat(e,'"]'))?r(null===(a=t.onload)||void 0===a?void 0:a.call(null)):(i.src=e.replace(/(^\w+:|^)/,window.location.protocol),i.async=t.async||!1,i.defer=t.defer||!1,i.crossOrigin=t.crossOrigin||"anonymous",i.onload=()=>{var e;return r(null===(e=t.onload)||void 0===e?void 0:e.call(null))},i.onerror=e=>{var r;return o((null===(r=t.onerror)||void 0===r?void 0:r.call(null))||e)},void document.body.appendChild(i))}))}function l(e){return e.replace(/(^\w+:|^)\/\//,"")}function d(){return!!location.hostname.startsWith("192.168.")||!!/(localhost|127.0.0.1|192.168.[0-9]{1,3}\.[0-9]{1,3}):?/gim.test(window.location.host)}function p(e,t){if(!t)throw new Error("insertAfter: referenced node undefined/null");t.parentNode.insertBefore(e,t.nextSibling)}function u(e,t){if(!t)throw new Error("insertBefore: referenced node undefined/null");t.parentNode.insertBefore(e,t)}function m(e){return e.sort((function(){return.5-Math.random()}))}new a.safelink({exclude:[/([a-z0-9](?:[a-z0-9-]{1,61}[a-z0-9])?[.])*webmanajemen\.com/],redirect:"https://www.webmanajemen.com/page/safelink.html?url=",verbose:!1,type:"base64",password:"unique-password"}),window.onbeforeunload=function(){let e;void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),document.cookie="scrollTop="+e+"URL="+window.location.href},window.onload=function(){if(!function(){const e=window.location.hash.substring(1).replace(/[=]/gi,"");if(e.length>0){const t=document.querySelector(e);if(t){const e=t.getBoundingClientRect().top;"number"==typeof e&&window.scrollTo({top:e,behavior:"smooth"})}}return e.length>0}()&&document.cookie.includes(window.location.href)&&null!=document.cookie.match(/scrollTop=([^;]+)(;|$)/)){const e=document.cookie.match(/scrollTop=([^;]+)(;|$)/);document.documentElement.scrollTop=parseInt(e[1]),document.body.scrollTop=parseInt(e[1])}};var b=r(2861),f=r(5851);const g={withCredentials:(0,f.v8)(b.Z.create({headers:{"X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Origin":"*",Origin:window.location.origin},withCredentials:!0}),{storage:(0,f.ZF)(localStorage,"axios-cache:")}),withoutCredentials:(0,f.v8)(b.Z.create({withCredentials:!1}),{storage:(0,f.ZF)(localStorage,"axios-cache:")})};var h=r(2740);new URL(h.Qy.url)},2480:function(){},5733:function(e,t,r){"use strict";r.d(t,{Qc:function(){return s}});var o=Symbol("cache-parser");function n(e){return("string"==typeof e||"number"==typeof e)&&(e=Number(e))>=0&&e<1/0}function a(e){return!0===e||"number"==typeof e||"string"==typeof e&&"false"!==e}var i=Number;function s(e){var t=Object.defineProperty({},o,{enumerable:!1,value:1});if(!e||"string"!=typeof e)return t;var r=function(e){var t={},r=e.toLowerCase().replace(/\s+/g,"").split(",");for(var o in r){var n,a=r[o].split("=",2);t[a[0]]=null==(n=a[1])||n}return t}(e),s=r["max-age"],c=r["max-stale"],l=r["min-fresh"],d=r["s-maxage"],p=r["stale-if-error"],u=r["stale-while-revalidate"];return a(r.immutable)&&(t.immutable=!0),n(s)&&(t.maxAge=i(s)),n(c)&&(t.maxStale=i(c)),n(l)&&(t.minFresh=i(l)),a(r["must-revalidate"])&&(t.mustRevalidate=!0),a(r["must-understand"])&&(t.mustUnderstand=!0),a(r["no-cache"])&&(t.noCache=!0),a(r["no-store"])&&(t.noStore=!0),a(r["no-transform"])&&(t.noTransform=!0),a(r["only-if-cached"])&&(t.onlyIfCached=!0),a(r.private)&&(t.private=!0),a(r["proxy-revalidate"])&&(t.proxyRevalidate=!0),a(r.public)&&(t.public=!0),n(d)&&(t.sMaxAge=i(d)),n(p)&&(t.staleIfError=i(p)),n(u)&&(t.staleWhileRevalidate=i(u)),t}},5374:function(e,t,r){"use strict";r.d(t,{g:function(){return n}});var o=Symbol();function n(){var e,t,r=new Promise((function(r,o){e=r,t=o}));return r.resolve=e,r.reject=t,r[o]=1,r}},6278:function(e,t,r){"use strict";function o(e,t){void 0===t&&(t=new WeakMap);var r=typeof e;if(e&&"object"===r&&!(e instanceof Date||e instanceof RegExp)){for(var n=Array.isArray(e)?[]:{},a=Object.keys(e).sort((function(e,t){return e>t?1:-1})),i=a.length;i--;){var s=a[i],c=e[s];if("object"==typeof c&&null!==c&&!(c instanceof Date||c instanceof RegExp)){if(t.has(c))continue;t.set(c,!0)}n[s]=o(c,t)}return String(e.constructor)+JSON.stringify(n,a)}return r+String(e)}function n(e){e=o(e);for(var t=5381,r=0;r<e.length;)t=33*t^e.charCodeAt(r++);return t}r.d(t,{v:function(){return n}})}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,exports:{}};return a[e].call(r.exports,r,r.exports,s),r.exports}s.m=a,e=[],s.O=function(t,r,o,n){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],n=e[d][2];for(var i=!0,c=0;c<r.length;c++)(!1&n||a>=n)&&Object.keys(s.O).every((function(e){return s.O[e](r[c])}))?r.splice(c--,1):(i=!1,n<a&&(a=n));if(i){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},s.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);s.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},s.d(n,a),n},s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,r){return s.f[r](e,t),t}),[]))},s.u=function(e){return 270===e?"runtime/js/vendor-react.658ef2c62fcbb156e58d.bundle.js":"runtime/chunk/"+({304:"flowbite-main-css",436:"404-layout",495:"flowbite-with-sidebar-layout",743:"homepage-layout",891:"flowbite-css"}[e]||e)+"."+{15:"b054884f955ebc98c09c",304:"565c9383e69b89e97388",343:"9b038727670c8e285fb3",436:"36ba4758d3859af9da98",495:"2a53224e432cc207238a",539:"1dd9992f124e0b33e5b4",587:"e70ea2ec6e246ca27a88",677:"4f5b21abf2bf2fb454bb",678:"0decfbb48f43f3c22bb6",743:"d727d386364603ebb827",891:"38ac6a5fa24914f769bf"}[e]+".js"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o={},n="hexo-webpack:",s.l=function(e,t,r,a){if(o[e])o[e].push(t);else{var i,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var p=l[d];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+r){i=p;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",n+r),i.src=e),o[e]=[t];var u=function(t,r){i.onerror=i.onload=null,clearTimeout(m);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),c&&document.head.appendChild(i)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="/android-traffic-exchange/",function(){s.b=document.baseURI||self.location.href;var e={493:0};s.f.j=function(t,r){var o=s.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise((function(r,n){o=e[t]=[r,n]}));r.push(o[2]=n);var a=s.p+s.u(t),i=new Error;s.l(a,(function(r){if(s.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,a=r[0],i=r[1],c=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(c)var d=c(s)}for(t&&t(r);l<a.length;l++)n=a[l],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},r=self.webpackChunkhexo_webpack=self.webpackChunkhexo_webpack||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),s.nc=void 0;var c=s.O(void 0,[442,323],(function(){return s(713)}));c=s.O(c)}();