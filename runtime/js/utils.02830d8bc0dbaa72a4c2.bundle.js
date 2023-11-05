!function(){var e,t,a,n,r,o={2740:function(e,t,a){"use strict";a.d(t,{Qy:function(){return r}});var n=JSON.parse('{"title":"WMI","subtitle":"Website Management Indonesia","description":"Website Management Indonesia is a blog about scripts, tips and tricks, games, software. Covering php, javascript, jquery, mysql, seo, e-commerce and others.","author":"L3n4r0x","keywords":"the legend of neverland, genshin impact, games, how to, tips and tricks, php, javascript, jquery, mysql, seo, e-commerce","timezone":"Asia/Jakarta","language":["id","en","zh-TW","zh-CN","zh-HK","th","tl"],"url":"https://www.webmanajemen.com/","root":"/","permalink":":title.html","pretty_urls":{"trailing_index":true,"trailing_html":true},"post_dir":"src-posts","public_dir":"dist","source_dir":"source","default_category":"uncategorized","post_asset_folder":true,"marked":{"prependRoot":true,"postAsset":true},"highlight":{"enable":false,"line_number":false,"auto_detect":false,"tab_replace":"  ","wrap":false,"hljs":true},"prismjs":{"enable":false,"preprocess":true,"line_number":true,"tab_replace":""},"index_generator":{"path":"","per_page":10,"order_by":"-updated","pagination_dir":"page"},"generator":{"cache":false,"image":{"type":"url"}},"hexo-shortcodes":{"raw":true},"exclude":["**/.git*","**/.git","**/.vscode","**/.idea","**/.env","**/License.md","**/frontmatter.json","**/.frontmatter","**/git-hooks","**/License","**/bin/**","**/backend/**","**/MIDI.js/**","**/{readme,README,changelog,CHANGELOG,license,LICENSE,License}.md","**/Test/**","**/guzzle/**","**/exclude/**","**/hexo-post-parser/**","**/node_modules/**","**/vendor/**","**/ads/**","**/tmp/**","**/hexo-theme-unit-test/**","**/*-backup*"],"external_link":{"enable":true,"field":"site","safelink":{"enable":true,"exclude":["webmanajemen.com","git.webmanajemen.com","**/chimeraland/recipes.html","**/embed.html","**/tools.html","**/safelink.html","**/node_modules/**","**/vendor/**"],"redirect":"https://www.webmanajemen.com/page/safelink.html?url=","type":"base64","password":"unique-password"},"exclude":["webmanajemen.com","web-manajemen.blogspot.com","dimaslanjaka.github.io"]},"analytics":{"tagmanager":"GTM-NJNNXSR","GA4":"G-BG75CLNJZ1","GA3":"UA-106238155-1","cloudflare":"2157c0f3b9e74a92badffe39156166b9"},"nav_top":{"Home":"/"},"nav_aside":{"Home":"/"},"mode":"production","paths":{"src":"D:/a/android-traffic-exchange/android-traffic-exchange/src","public":"D:/a/android-traffic-exchange/android-traffic-exchange/public","build":"D:/a/android-traffic-exchange/android-traffic-exchange/dist","tmp":"D:/a/android-traffic-exchange/android-traffic-exchange/tmp","cwd":"D:/a/android-traffic-exchange/android-traffic-exchange","base":"/android-traffic-exchange/","aliasRelative":{"*":"D:/a/android-traffic-exchange/android-traffic-exchange","@utils":"D:/a/android-traffic-exchange/android-traffic-exchange/src/utils","@components":"D:/a/android-traffic-exchange/android-traffic-exchange/src/components","@routes":"D:/a/android-traffic-exchange/android-traffic-exchange/src/routes","@assets":"D:/a/android-traffic-exchange/android-traffic-exchange/src/assets","@project":"D:/a/android-traffic-exchange/android-traffic-exchange/src/project","@src":"D:/a/android-traffic-exchange/android-traffic-exchange/src","@root":"D:/a/android-traffic-exchange/android-traffic-exchange","@post":"D:/a/android-traffic-exchange/android-traffic-exchange/src/posts","react/jsx-dev-runtime":"D:\\\\a\\\\android-traffic-exchange\\\\android-traffic-exchange\\\\node_modules\\\\react\\\\jsx-dev-runtime.js","react/jsx-runtime":"D:\\\\a\\\\android-traffic-exchange\\\\android-traffic-exchange\\\\node_modules\\\\react\\\\jsx-runtime.js"},"aliasAbsolute":{"*":"D:/a/android-traffic-exchange/android-traffic-exchange","@utils":"D:/a/android-traffic-exchange/android-traffic-exchange/src/utils","@components":"D:/a/android-traffic-exchange/android-traffic-exchange/src/components","@routes":"D:/a/android-traffic-exchange/android-traffic-exchange/src/routes","@assets":"D:/a/android-traffic-exchange/android-traffic-exchange/src/assets","@project":"D:/a/android-traffic-exchange/android-traffic-exchange/src/project","@src":"D:/a/android-traffic-exchange/android-traffic-exchange/src","@root":"D:/a/android-traffic-exchange/android-traffic-exchange","@post":"D:/a/android-traffic-exchange/android-traffic-exchange/src/posts","react/jsx-dev-runtime":"D:\\\\a\\\\android-traffic-exchange\\\\android-traffic-exchange\\\\node_modules\\\\react\\\\jsx-dev-runtime.js","react/jsx-runtime":"D:\\\\a\\\\android-traffic-exchange\\\\android-traffic-exchange\\\\node_modules\\\\react\\\\jsx-runtime.js"}}}');JSON.parse('{"name":"hexo-webpack","version":"1.0.0","description":"generate static site jekyll/hexo/huge markdown posts using webpack","main":"gulpfile.js","private":true,"scripts":{"prepare":"touch routes.json && husky install","build":"rm -rf dist && run-s \\"build:**\\" && gulp build","build:webpack":"webpack --progress --mode production --config config/webpack.prod.js","watch:build":"webpack --progress --mode production --config config/webpack.prod-watch.js && gulp build","clean":"rm -rf dist tmp","clean:build":"yarn run clean && yarn run build","php":"php -S 127.0.0.1:4000 -t dist","prod":"cd page && yarn install --omit=dev --production","prod:update":"cd page && npx npm-check-updates -u && yarn install --omit=dev --production","start":"cross-env-shell NODE_ENV=development webpackAnalyze=server webpack-dev-server --progress --no-open --mode development --config config/webpack.dev.js \\"$@\\"","test:dist":"yarn run build:webpack && yarn run build:html && gulp static && gulp page:copy","update":"yarn run update:ncu","update:ncu":"npx npm-check-updates --enginesNode -u -x chalk,jsdom,deepmerge-ts","x":"node config/cli \\"$@\\"","dev":"webpack-dev-server --progress --no-open --mode development --config config/webpack.dev-prod.js \\"$@\\"","dev:php":"php -S 127.0.0.1:8888"},"author":"Dimas Lanjaka <dimaslanjaka@gmail.com> (http://webmanajemen.com)","license":"ISC","repository":{"url":"https://github.com/dimaslanjaka/page.git"},"devDependencies":{"@babel/core":"^7.23.0","@babel/preset-env":"^7.22.20","@babel/preset-react":"^7.16.5","@babel/preset-typescript":"^7.23.0","@tailwindcss/typography":"^0.5.10","@types/bluebird":"^3","@types/bluebird-global":"^3.5.14","@types/bootstrap":"^5","@types/crypto-js":"^4","@types/eslint":"^8","@types/express":"^4","@types/fs-extra":"^11","@types/gapi":"^0.0.44","@types/gapi.auth2":"^0.0.57","@types/gapi.client.analytics-v3":"^0.0.1","@types/google.accounts":"^0.0.9","@types/gulp":"^4","@types/minimist":"^1","@types/node":"^20.8.5","@types/node-sass":"^4.11.4","@types/prop-types":"^15","@types/react":"^17","@types/react-dom":"^17","@types/webpack-bundle-analyzer":"^4","@typescript-eslint/eslint-plugin":"^6.7.4","@typescript-eslint/parser":"^6.7.4","autoprefixer":"^10.4.16","babel-loader":"^9.1.3","babel-plugin-module-resolver":"^5.0.0","binary-collections":"^2.0.2","clean-webpack-plugin":"^4.0.0","cross-env":"^7.0.3","css-loader":"^6.8.1","dotenv":"^16.3.1","eslint":"^8.50.0","eslint-config-prettier":"^9.0.0","eslint-plugin-prettier":"^5.0.0","eslint-plugin-react-hooks":"^4.6.0","express":"^4.18.2","flowbite-typography":"^1.0.3","fs-extra":"^11.1.1","git-command-helper":"^2.0.2","glob":"^10.3.10","gulp":"^4.0.2","hexo":"^7.0.0-rc2","hexo-asset-link":"^2.2.2","hexo-post-parser":"^1.2.12","hexo-renderers":"^2.0.2","hexo-shortcodes":"^1.2.3","html-webpack-plugin":"^5.5.0","husky":"^8.0.3","ignore-loader":"^0.1.2","jsdom":"^22.1.0","lint-staged":"^14.0.1","minimist":"^1.2.8","node-sass":"^9.0.0","postcss":"^8.4.31","postcss-import":"^15.1.0","postcss-loader":"^7.3.3","postcss-preset-env":"^9.1.4","prettier":"^3.0.3","process":"^0.11.10","purgecss":"^5.0.0","sass-loader":"^13.3.2","sbg-utility":"^1.1.6","static-blog-generator":"^3.0.1","style-loader":"^3.3.3","tailwindcss":"^3.3.3","through2":"^4.0.2","ts-node":"^10.9.1","tsconfig-paths-webpack-plugin":"^4.1.0","typescript":"^5.2.2","upath":"^2.0.1","webpack":"^5.89.0","webpack-bundle-analyzer":"^4.9.1","webpack-cli":"^5.1.4","webpack-dev-server":"^4.6.0","webpack-merge":"^5.9.0","yaml":"^2.3.2"},"dependencies":{"@fancyapps/ui":"^5.0.24","axios":"^1.5.1","axios-cache-interceptor":"^1.3.1","bluebird":"^3.7.2","buffer":"^6.0.3","constants-browserify":"^1.0.0","crypto-browserify":"^3.12.0","flowbite":"^1.6.6","flowbite-react":"^0.5.0","localforage":"^1.10.0","match-sorter":"^6.3.1","moment":"^2.29.4","moment-timezone":"^0.5.43","os-browserify":"^0.3.0","path-browserify":"^1.0.1","raw-loader":"^4.0.2","react":"^17.0.2","react-dom":"^17.0.2","react-icons":"^4.11.0","react-markdown":"^9.0.0","react-router-dom":"^6.16.0","rehype-raw":"^7.0.0","remark-gfm":"^4.0.0","rsuite":"^5.40.0","safelinkify":"^1.2.2","sort-by":"^1.2.0","stream-browserify":"^3.0.0","tw-elements":"^1.0.0","tw-elements-react":"^1.0.0-alpha1"},"engines":{"node":"^14"},"resolutions":{"prettier":"^3","typescript":"4.9.5","jsdom":"^21","@types/node":"^14","deepmerge-ts":"^4","react":"^18","react-dom":"^18","@types/react":"^18","@types/react-dom":"^18","react-router-dom":"^6.15.0","static-blog-generator":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/static-blog-generator/release/static-blog-generator.tgz","instant-indexing":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/instant-indexing/release/instant-indexing.tgz","sbg-utility":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/sbg-utility/release/sbg-utility.tgz","sbg-api":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/sbg-api/release/sbg-api.tgz","sbg-cli":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/sbg-cli/release/sbg-cli.tgz","sbg-server":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/sbg-server/release/sbg-server.tgz","nodejs-package-types":"https://github.com/dimaslanjaka/nodejs-package-types/raw/a2e797bc27975cba20ef4c87547841e6341bfcf4/release/nodejs-package-types.tgz","cross-spawn":"https://github.com/dimaslanjaka/node-cross-spawn/raw/ff4b648/release/cross-spawn.tgz","hexo":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo.tgz","@types/hexo":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo.tgz","hexo-asset-link":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-asset-link.tgz","hexo-cli":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-cli.tgz","hexo-front-matter":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-front-matter.tgz","hexo-log":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-log.tgz","@types/hexo-log":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-log.tgz","hexo-util":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-util.tgz","warehouse":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/warehouse.tgz"},"packageManager":"yarn@4.0.0","hexo":{"version":"7.0.0-rc2"},"workspaces":["src-posts","packages/hpp","packages/hr","packages/hs"]}'),JSON.parse('[{"title":"Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/home.html","meta":{"date":{"property":"article:published_time","content":"2023-10-26T16:39:58+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-26T16:39:58+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/home.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/home.html"}},"permalink":"/backend/home.html"},{"title":"Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/index.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-27T08:14:30+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/index.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/index.html"}},"permalink":"/backend/index.html"},{"title":"Bot Detector - Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/referer.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-29T22:05:31+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/referer.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/referer.html"}},"permalink":"/backend/referer.html"},{"title":"Bot Detector - Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/anon.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-29T22:05:31+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/anon.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/anon.html"}},"permalink":"/backend/anon.html"},{"title":"Bot Detector - Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/info.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-29T22:05:31+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/info.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/info.html"}},"permalink":"/backend/info.html"},{"title":"Bot Detector - Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/anonymity.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-29T22:05:31+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/anonymity.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/anonymity.html"}},"permalink":"/backend/anonymity.html"}]');const r=n},713:function(e,t,a){"use strict";function n(e,t,a,n,r,o){let i="";if(a){const e=new Date;e.setTime(e.getTime()+24*parseInt("".concat(a))*60*60*1e3),i="; expires="+e.toUTCString()}n||(n="/");const c=e+"="+encodeURIComponent(t)+i+"; path="+n+(r?"; domain="+r:"")+(o?"; secure":"");document.cookie=c}function r(e){const t=e+"=",a=document.cookie.split(";");for(let e=0;e<a.length;e++){let n=a[e];for(;" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null}a.d(t,{On:function(){return f},ZS:function(){return g},xJ:function(){return m.Z},ej:function(){return r},BE:function(){return p},Vt:function(){return u},bc:function(){return l},fs:function(){return s},Zo:function(){return i},d8:function(){return n}}),-1!=navigator.userAgent.toLowerCase().indexOf("msie")||navigator.userAgent.toLowerCase().indexOf("trident"),a(1354);var o=a(6149);const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;return Math.random().toString(36).substring(2,e+2)},c=function(){};function s(e,t){return t=Object.assign({proxy:!1,onload:c,onerror:c},t||{}),new Promise(((a,n)=>{var r,o;const i=document.createElement("script");return e.startsWith("//")&&(e=window.location.protocol+e),e.startsWith("http")&&t.proxy&&(e="https://crossorigin.me/"+e),Array.from(document.scripts).map((e=>d(e.src))).filter((t=>t===d(e))).length>0?a(null===(r=t.onload)||void 0===r?void 0:r.call(null)):document.querySelector('script[src="'.concat(e,'"]'))?a(null===(o=t.onload)||void 0===o?void 0:o.call(null)):(i.src=e.replace(/(^\w+:|^)/,window.location.protocol),i.async=t.async||!1,i.defer=t.defer||!1,i.crossOrigin=t.crossOrigin||"anonymous",i.onload=()=>{var e;return a(null===(e=t.onload)||void 0===e?void 0:e.call(null))},i.onerror=e=>{var a;return n((null===(a=t.onerror)||void 0===a?void 0:a.call(null))||e)},void document.body.appendChild(i))}))}function d(e){return e.replace(/(^\w+:|^)\/\//,"")}function l(){return!!location.hostname.startsWith("192.168.")||!!/(localhost|127.0.0.1|192.168.[0-9]{1,3}\.[0-9]{1,3}):?/gim.test(window.location.host)}function p(e,t){if(!t)throw new Error("insertAfter: referenced node undefined/null");t.parentNode.insertBefore(e,t.nextSibling)}function u(e,t){if(!t)throw new Error("insertBefore: referenced node undefined/null");t.parentNode.insertBefore(e,t)}function f(e){return e.sort((function(){return.5-Math.random()}))}new o.safelink({exclude:[/([a-z0-9](?:[a-z0-9-]{1,61}[a-z0-9])?[.])*webmanajemen\.com/],redirect:"https://www.webmanajemen.com/page/safelink.html?url=",verbose:!1,type:"base64",password:"unique-password"}),window.onbeforeunload=function(){let e;void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),document.cookie="scrollTop="+e+"URL="+window.location.href},window.onload=function(){if(!function(){const e=window.location.hash.substring(1).replace(/[=]/gi,"");if(e.length>0){const t=document.querySelector(e);if(t){const e=t.getBoundingClientRect().top;"number"==typeof e&&window.scrollTo({top:e,behavior:"smooth"})}}return e.length>0}()&&document.cookie.includes(window.location.href)&&null!=document.cookie.match(/scrollTop=([^;]+)(;|$)/)){const e=document.cookie.match(/scrollTop=([^;]+)(;|$)/);document.documentElement.scrollTop=parseInt(e[1]),document.body.scrollTop=parseInt(e[1])}};var m=a(2861),h=a(5851);const g={withCredentials:(0,h.v8)(m.Z.create({headers:{"X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Origin":"*",Origin:window.location.origin},withCredentials:!0}),{storage:(0,h.ZF)(localStorage,"axios-cache:")}),withoutCredentials:(0,h.v8)(m.Z.create({withCredentials:!1}),{storage:(0,h.ZF)(localStorage,"axios-cache:")})};var b=a(2740);new URL(b.Qy.url)},2480:function(){},5733:function(e,t,a){"use strict";a.d(t,{Qc:function(){return c}});var n=Symbol("cache-parser");function r(e){return("string"==typeof e||"number"==typeof e)&&(e=Number(e))>=0&&e<1/0}function o(e){return!0===e||"number"==typeof e||"string"==typeof e&&"false"!==e}var i=Number;function c(e){var t=Object.defineProperty({},n,{enumerable:!1,value:1});if(!e||"string"!=typeof e)return t;var a=function(e){var t={},a=e.toLowerCase().replace(/\s+/g,"").split(",");for(var n in a){var r,o=a[n].split("=",2);t[o[0]]=null==(r=o[1])||r}return t}(e),c=a["max-age"],s=a["max-stale"],d=a["min-fresh"],l=a["s-maxage"],p=a["stale-if-error"],u=a["stale-while-revalidate"];return o(a.immutable)&&(t.immutable=!0),r(c)&&(t.maxAge=i(c)),r(s)&&(t.maxStale=i(s)),r(d)&&(t.minFresh=i(d)),o(a["must-revalidate"])&&(t.mustRevalidate=!0),o(a["must-understand"])&&(t.mustUnderstand=!0),o(a["no-cache"])&&(t.noCache=!0),o(a["no-store"])&&(t.noStore=!0),o(a["no-transform"])&&(t.noTransform=!0),o(a["only-if-cached"])&&(t.onlyIfCached=!0),o(a.private)&&(t.private=!0),o(a["proxy-revalidate"])&&(t.proxyRevalidate=!0),o(a.public)&&(t.public=!0),r(l)&&(t.sMaxAge=i(l)),r(p)&&(t.staleIfError=i(p)),r(u)&&(t.staleWhileRevalidate=i(u)),t}},5374:function(e,t,a){"use strict";a.d(t,{g:function(){return r}});var n=Symbol();function r(){var e,t,a=new Promise((function(a,n){e=a,t=n}));return a.resolve=e,a.reject=t,a[n]=1,a}},6278:function(e,t,a){"use strict";function n(e,t){void 0===t&&(t=new WeakMap);var a=typeof e;if(e&&"object"===a&&!(e instanceof Date||e instanceof RegExp)){for(var r=Array.isArray(e)?[]:{},o=Object.keys(e).sort((function(e,t){return e>t?1:-1})),i=o.length;i--;){var c=o[i],s=e[c];if("object"==typeof s&&null!==s&&!(s instanceof Date||s instanceof RegExp)){if(t.has(s))continue;t.set(s,!0)}r[c]=n(s,t)}return String(e.constructor)+JSON.stringify(r,o)}return a+String(e)}function r(e){e=n(e);for(var t=5381,a=0;a<e.length;)t=33*t^e.charCodeAt(a++);return t}a.d(t,{v:function(){return r}})}},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={id:e,exports:{}};return o[e].call(a.exports,a,a.exports,c),a.exports}c.m=o,e=[],c.O=function(t,a,n,r){if(!a){var o=1/0;for(l=0;l<e.length;l++){a=e[l][0],n=e[l][1],r=e[l][2];for(var i=!0,s=0;s<a.length;s++)(!1&r||o>=r)&&Object.keys(c.O).every((function(e){return c.O[e](a[s])}))?a.splice(s--,1):(i=!1,r<o&&(o=r));if(i){e.splice(l--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[a,n,r]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);c.r(r);var o={};t=t||[null,a({}),a([]),a(a)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=a(i))Object.getOwnPropertyNames(i).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},c.d(r,o),r},c.d=function(e,t){for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,a){return c.f[a](e,t),t}),[]))},c.u=function(e){return 270===e?"runtime/js/vendor-react.b6b58c817b55376b067e.bundle.js":"runtime/chunk/"+({304:"flowbite-main-css",436:"404-layout",495:"flowbite-with-sidebar-layout",743:"homepage-layout",891:"flowbite-css"}[e]||e)+"."+{15:"d9cf25c65a44ee017286",304:"dc7f039c2eb3d01dca4d",343:"98b5dc6d032ae662a4e2",436:"8318218735840c8c466f",495:"2b403c03a41cfbee897f",539:"d5464d6d36dd8cfb6409",587:"f5c4986b69a63254a85e",677:"c3b266abf23d9c1cbf7e",678:"4b242fb52d485ea18e1d",743:"75ebccf8b2d9e5c9f2be",891:"3b5df5c8a40653513a73"}[e]+".js"},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="hexo-webpack:",c.l=function(e,t,a,o){if(n[e])n[e].push(t);else{var i,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var p=d[l];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==r+a){i=p;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",r+a),i.src=e),n[e]=[t];var u=function(t,a){i.onerror=i.onload=null,clearTimeout(f);var r=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(a)})),t)return t(a)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),s&&document.head.appendChild(i)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/android-traffic-exchange/",function(){c.b=document.baseURI||self.location.href;var e={493:0};c.f.j=function(t,a){var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(a,r){n=e[t]=[a,r]}));a.push(n[2]=r);var o=c.p+c.u(t),i=new Error;c.l(o,(function(a){if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}}),"chunk-"+t,t)}},c.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,o=a[0],i=a[1],s=a[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);if(s)var l=s(c)}for(t&&t(a);d<o.length;d++)r=o[d],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(l)},a=self.webpackChunkhexo_webpack=self.webpackChunkhexo_webpack||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}(),c.nc=void 0;var s=c.O(void 0,[442,323],(function(){return c(713)}));s=c.O(s)}();