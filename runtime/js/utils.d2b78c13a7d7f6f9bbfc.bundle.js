!function(){var e,t,n,o,r,a={2740:function(e,t,n){"use strict";n.d(t,{Qy:function(){return r}});var o=JSON.parse('{"title":"WMI","subtitle":"Website Management Indonesia","description":"Website Management Indonesia is a blog about scripts, tips and tricks, games, software. Covering php, javascript, jquery, mysql, seo, e-commerce and others.","author":"L3n4r0x","keywords":"the legend of neverland, genshin impact, games, how to, tips and tricks, php, javascript, jquery, mysql, seo, e-commerce","timezone":"Asia/Jakarta","language":["id","en","zh-TW","zh-CN","zh-HK","th","tl"],"url":"https://www.webmanajemen.com/","root":"/","permalink":":title.html","pretty_urls":{"trailing_index":true,"trailing_html":true},"post_dir":"src-posts","public_dir":"dist","source_dir":"source","default_category":"uncategorized","post_asset_folder":true,"marked":{"prependRoot":true,"postAsset":true},"highlight":{"enable":false,"line_number":false,"auto_detect":false,"tab_replace":"  ","wrap":false,"hljs":true},"prismjs":{"enable":false,"preprocess":true,"line_number":true,"tab_replace":""},"index_generator":{"path":"","per_page":10,"order_by":"-updated","pagination_dir":"page"},"generator":{"cache":false,"image":{"type":"url"}},"hexo-shortcodes":{"raw":true},"exclude":["**/.git*","**/.git","**/.vscode","**/.idea","**/.env","**/License.md","**/frontmatter.json","**/.frontmatter","**/git-hooks","**/License","**/bin/**","**/backend/**","**/MIDI.js/**","**/{readme,README,changelog,CHANGELOG,license,LICENSE,License}.md","**/Test/**","**/guzzle/**","**/exclude/**","**/hexo-post-parser/**","**/node_modules/**","**/vendor/**","**/ads/**","**/tmp/**","**/hexo-theme-unit-test/**","**/*-backup*"],"external_link":{"enable":true,"field":"site","safelink":{"enable":true,"exclude":["webmanajemen.com","git.webmanajemen.com","**/chimeraland/recipes.html","**/embed.html","**/tools.html","**/safelink.html","**/node_modules/**","**/vendor/**"],"redirect":"https://www.webmanajemen.com/page/safelink.html?url=","type":"base64","password":"unique-password"},"exclude":["webmanajemen.com","web-manajemen.blogspot.com","dimaslanjaka.github.io"]},"analytics":{"tagmanager":"GTM-NJNNXSR","GA4":"G-BG75CLNJZ1","GA3":"UA-106238155-1","cloudflare":"2157c0f3b9e74a92badffe39156166b9"},"nav_top":{"Home":"/"},"nav_aside":{"Home":"/"},"mode":"production","paths":{"src":"D:/a/node-cross-spawn/node-cross-spawn/src","public":"D:/a/node-cross-spawn/node-cross-spawn/public","build":"D:/a/node-cross-spawn/node-cross-spawn/dist","tmp":"D:/a/node-cross-spawn/node-cross-spawn/tmp","cwd":"D:/a/node-cross-spawn/node-cross-spawn","base":"/android-traffic-exchange/","aliasRelative":{"*":"D:/a/node-cross-spawn/node-cross-spawn","@utils":"D:/a/node-cross-spawn/node-cross-spawn/src/utils","@components":"D:/a/node-cross-spawn/node-cross-spawn/src/components","@routes":"D:/a/node-cross-spawn/node-cross-spawn/src/routes","@assets":"D:/a/node-cross-spawn/node-cross-spawn/src/assets","@project":"D:/a/node-cross-spawn/node-cross-spawn/src/project","@src":"D:/a/node-cross-spawn/node-cross-spawn/src","@root":"D:/a/node-cross-spawn/node-cross-spawn","@post":"D:/a/node-cross-spawn/node-cross-spawn/src/posts","react/jsx-dev-runtime":"D:\\\\a\\\\node-cross-spawn\\\\node-cross-spawn\\\\node_modules\\\\react\\\\jsx-dev-runtime.js","react/jsx-runtime":"D:\\\\a\\\\node-cross-spawn\\\\node-cross-spawn\\\\node_modules\\\\react\\\\jsx-runtime.js"},"aliasAbsolute":{"*":"D:/a/node-cross-spawn/node-cross-spawn","@utils":"D:/a/node-cross-spawn/node-cross-spawn/src/utils","@components":"D:/a/node-cross-spawn/node-cross-spawn/src/components","@routes":"D:/a/node-cross-spawn/node-cross-spawn/src/routes","@assets":"D:/a/node-cross-spawn/node-cross-spawn/src/assets","@project":"D:/a/node-cross-spawn/node-cross-spawn/src/project","@src":"D:/a/node-cross-spawn/node-cross-spawn/src","@root":"D:/a/node-cross-spawn/node-cross-spawn","@post":"D:/a/node-cross-spawn/node-cross-spawn/src/posts","react/jsx-dev-runtime":"D:\\\\a\\\\node-cross-spawn\\\\node-cross-spawn\\\\node_modules\\\\react\\\\jsx-dev-runtime.js","react/jsx-runtime":"D:\\\\a\\\\node-cross-spawn\\\\node-cross-spawn\\\\node_modules\\\\react\\\\jsx-runtime.js"}}}');JSON.parse('{"name":"hexo-webpack","version":"1.0.0","description":"generate static site jekyll/hexo/huge markdown posts using webpack","main":"gulpfile.js","private":true,"scripts":{"prepare":"touch routes.json && husky install","build":"rm -rf dist && run-s \\"build:**\\" && gulp build","build:webpack":"webpack --progress --mode production --config config/webpack.prod.js","watch:build":"webpack --progress --mode production --config config/webpack.prod-watch.js && gulp build","clean":"rm -rf dist tmp","clean:build":"yarn run clean && yarn run build","php":"php -S 127.0.0.1:4000 -t dist","prod":"cd page && yarn install --omit=dev --production","prod:update":"cd page && npx npm-check-updates -u && yarn install --omit=dev --production","start":"cross-env-shell NODE_ENV=development webpackAnalyze=server webpack-dev-server --progress --no-open --mode development --config config/webpack.dev.js \\"$@\\"","test:dist":"yarn run build:webpack && yarn run build:html && gulp static && gulp page:copy","update":"yarn run update:ncu","update:ncu":"npx npm-check-updates --enginesNode -u -x chalk,jsdom,deepmerge-ts","x":"node config/cli \\"$@\\"","dev":"webpack-dev-server --progress --no-open --mode development --config config/webpack.dev-prod.js \\"$@\\"","dev:php":"php -S 127.0.0.1:8888"},"author":"Dimas Lanjaka <dimaslanjaka@gmail.com> (http://webmanajemen.com)","license":"ISC","repository":{"url":"https://github.com/dimaslanjaka/page.git"},"devDependencies":{"@babel/core":"^7.23.0","@babel/preset-env":"^7.22.20","@babel/preset-react":"^7.16.5","@babel/preset-typescript":"^7.23.0","@tailwindcss/typography":"^0.5.10","@types/bluebird":"^3","@types/bluebird-global":"^3.5.14","@types/bootstrap":"^5","@types/crypto-js":"^4","@types/eslint":"^8","@types/express":"^4","@types/fs-extra":"^11","@types/gapi":"^0.0.44","@types/gapi.auth2":"^0.0.57","@types/gapi.client.analytics-v3":"^0.0.1","@types/google.accounts":"^0.0.9","@types/gulp":"^4","@types/minimist":"^1","@types/node":"^20.8.5","@types/node-sass":"^4.11.4","@types/prop-types":"^15","@types/react":"^17","@types/react-dom":"^17","@types/webpack-bundle-analyzer":"^4","@typescript-eslint/eslint-plugin":"^6.7.4","@typescript-eslint/parser":"^6.7.4","autoprefixer":"^10.4.16","babel-loader":"^9.1.3","babel-plugin-module-resolver":"^5.0.0","binary-collections":"^2.0.2","clean-webpack-plugin":"^4.0.0","cross-env":"^7.0.3","css-loader":"^6.8.1","dotenv":"^16.3.1","eslint":"^8.50.0","eslint-config-prettier":"^9.0.0","eslint-plugin-prettier":"^5.0.0","eslint-plugin-react-hooks":"^4.6.0","express":"^4.18.2","flowbite-typography":"^1.0.3","fs-extra":"^11.1.1","git-command-helper":"^2.0.2","glob":"^10.3.10","gulp":"^4.0.2","hexo":"^7.0.0-rc2","hexo-asset-link":"^2.2.2","hexo-post-parser":"^1.2.12","hexo-renderers":"^2.0.2","hexo-shortcodes":"^1.2.3","html-webpack-plugin":"^5.5.0","husky":"^8.0.3","ignore-loader":"^0.1.2","jsdom":"^22.1.0","lint-staged":"^14.0.1","minimist":"^1.2.8","node-sass":"^9.0.0","postcss":"^8.4.31","postcss-import":"^15.1.0","postcss-loader":"^7.3.3","postcss-preset-env":"^9.1.4","prettier":"^3.0.3","process":"^0.11.10","purgecss":"^5.0.0","sass-loader":"^13.3.2","sbg-utility":"^1.1.6","static-blog-generator":"^3.0.1","style-loader":"^3.3.3","tailwindcss":"^3.3.3","through2":"^4.0.2","ts-node":"^10.9.1","tsconfig-paths-webpack-plugin":"^4.1.0","typescript":"^5.2.2","upath":"^2.0.1","webpack":"^5.89.0","webpack-bundle-analyzer":"^4.9.1","webpack-cli":"^5.1.4","webpack-dev-server":"^4.6.0","webpack-merge":"^5.9.0","yaml":"^2.3.2"},"dependencies":{"@fancyapps/ui":"^5.0.24","axios":"^1.5.1","axios-cache-interceptor":"^1.3.1","bluebird":"^3.7.2","buffer":"^6.0.3","constants-browserify":"^1.0.0","crypto-browserify":"^3.12.0","flowbite":"^1.6.6","flowbite-react":"^0.5.0","localforage":"^1.10.0","match-sorter":"^6.3.1","moment":"^2.29.4","moment-timezone":"^0.5.43","os-browserify":"^0.3.0","path-browserify":"^1.0.1","raw-loader":"^4.0.2","react":"^17.0.2","react-dom":"^17.0.2","react-icons":"^4.11.0","react-markdown":"^9.0.0","react-router-dom":"^6.16.0","rehype-raw":"^7.0.0","remark-gfm":"^4.0.0","rsuite":"^5.40.0","safelinkify":"^1.2.2","sort-by":"^1.2.0","stream-browserify":"^3.0.0","tw-elements":"^1.0.0","tw-elements-react":"^1.0.0-alpha1"},"engines":{"node":"^14"},"resolutions":{"prettier":"^3","typescript":"4.9.5","jsdom":"^21","@types/node":"^14","deepmerge-ts":"^4","react":"^18","react-dom":"^18","@types/react":"^18","@types/react-dom":"^18","react-router-dom":"^6.15.0","static-blog-generator":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/static-blog-generator/release/static-blog-generator.tgz","instant-indexing":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/instant-indexing/release/instant-indexing.tgz","sbg-utility":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/sbg-utility/release/sbg-utility.tgz","sbg-api":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/sbg-api/release/sbg-api.tgz","sbg-cli":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/sbg-cli/release/sbg-cli.tgz","sbg-server":"https://github.com/dimaslanjaka/static-blog-generator/raw/961f674/packages/sbg-server/release/sbg-server.tgz","nodejs-package-types":"https://github.com/dimaslanjaka/nodejs-package-types/raw/a2e797bc27975cba20ef4c87547841e6341bfcf4/release/nodejs-package-types.tgz","cross-spawn":"https://github.com/dimaslanjaka/node-cross-spawn/raw/ff4b648/release/cross-spawn.tgz","hexo":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo.tgz","@types/hexo":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo.tgz","hexo-asset-link":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-asset-link.tgz","hexo-cli":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-cli.tgz","hexo-front-matter":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-front-matter.tgz","hexo-log":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-log.tgz","@types/hexo-log":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-log.tgz","hexo-util":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/hexo-util.tgz","warehouse":"https://github.com/dimaslanjaka/hexo/raw/8b31a11/releases/warehouse.tgz"},"packageManager":"yarn@4.0.0","hexo":{"version":"7.0.0-rc2"},"workspaces":["src-posts","packages/hpp","packages/hr","packages/hs"]}'),JSON.parse('[{"title":"Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/home.html","meta":{"date":{"property":"article:published_time","content":"2023-10-26T16:39:58+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-26T16:39:58+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/home.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/home.html"}},"permalink":"/backend/home.html"},{"title":"Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/index.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-27T08:14:30+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/index.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/index.html"}},"permalink":"/backend/index.html"},{"title":"Bot Detector - Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/referer.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-29T22:05:31+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/referer.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/referer.html"}},"permalink":"/backend/referer.html"},{"title":"Bot Detector - Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/anon.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-29T22:05:31+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/anon.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/anon.html"}},"permalink":"/backend/anon.html"},{"title":"Bot Detector - Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/info.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-29T22:05:31+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/info.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/info.html"}},"permalink":"/backend/info.html"},{"title":"Bot Detector - Website Traffic Exchange For Android","description":"Website traffic exchange now available on android","filename":"backend/anonymity.html","meta":{"date":{"property":"article:published_time","content":"2023-10-27T08:14:30+07:00"},"updated":{"property":"article:modified_time","content":"2023-10-29T22:05:31+07:00"},"canonical":{"rel":"canonical","href":"https://www.webmanajemen.com/backend/anonymity.html"},"og_url":{"property":"og:url","content":"https://www.webmanajemen.com/backend/anonymity.html"}},"permalink":"/backend/anonymity.html"}]');const r=o},713:function(e,t,n){"use strict";function o(e,t,n,o,r,a){let s="";if(n){const e=new Date;e.setTime(e.getTime()+24*parseInt("".concat(n))*60*60*1e3),s="; expires="+e.toUTCString()}o||(o="/");const i=e+"="+encodeURIComponent(t)+s+"; path="+o+(r?"; domain="+r:"")+(a?"; secure":"");document.cookie=i}function r(e){const t=e+"=",n=document.cookie.split(";");for(let e=0;e<n.length;e++){let o=n[e];for(;" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}n.d(t,{On:function(){return m},ZS:function(){return h},xJ:function(){return f.Z},ej:function(){return r},BE:function(){return p},Vt:function(){return u},bc:function(){return d},fs:function(){return c},Zo:function(){return s},d8:function(){return o}}),-1!=navigator.userAgent.toLowerCase().indexOf("msie")||navigator.userAgent.toLowerCase().indexOf("trident"),n(1354);var a=n(6149);const s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;return Math.random().toString(36).substring(2,e+2)},i=function(){};function c(e,t){return t=Object.assign({proxy:!1,onload:i,onerror:i},t||{}),new Promise(((n,o)=>{var r,a;const s=document.createElement("script");return e.startsWith("//")&&(e=window.location.protocol+e),e.startsWith("http")&&t.proxy&&(e="https://crossorigin.me/"+e),Array.from(document.scripts).map((e=>l(e.src))).filter((t=>t===l(e))).length>0?n(null===(r=t.onload)||void 0===r?void 0:r.call(null)):document.querySelector('script[src="'.concat(e,'"]'))?n(null===(a=t.onload)||void 0===a?void 0:a.call(null)):(s.src=e.replace(/(^\w+:|^)/,window.location.protocol),s.async=t.async||!1,s.defer=t.defer||!1,s.crossOrigin=t.crossOrigin||"anonymous",s.onload=()=>{var e;return n(null===(e=t.onload)||void 0===e?void 0:e.call(null))},s.onerror=e=>{var n;return o((null===(n=t.onerror)||void 0===n?void 0:n.call(null))||e)},void document.body.appendChild(s))}))}function l(e){return e.replace(/(^\w+:|^)\/\//,"")}function d(){return!!location.hostname.startsWith("192.168.")||!!/(localhost|127.0.0.1|192.168.[0-9]{1,3}\.[0-9]{1,3}):?/gim.test(window.location.host)}function p(e,t){if(!t)throw new Error("insertAfter: referenced node undefined/null");t.parentNode.insertBefore(e,t.nextSibling)}function u(e,t){if(!t)throw new Error("insertBefore: referenced node undefined/null");t.parentNode.insertBefore(e,t)}function m(e){return e.sort((function(){return.5-Math.random()}))}new a.safelink({exclude:[/([a-z0-9](?:[a-z0-9-]{1,61}[a-z0-9])?[.])*webmanajemen\.com/],redirect:"https://www.webmanajemen.com/page/safelink.html?url=",verbose:!1,type:"base64",password:"unique-password"}),window.onbeforeunload=function(){let e;void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),document.cookie="scrollTop="+e+"URL="+window.location.href},window.onload=function(){if(!function(){const e=window.location.hash.substring(1).replace(/[=]/gi,"");if(e.length>0){const t=document.querySelector(e);if(t){const e=t.getBoundingClientRect().top;"number"==typeof e&&window.scrollTo({top:e,behavior:"smooth"})}}return e.length>0}()&&document.cookie.includes(window.location.href)&&null!=document.cookie.match(/scrollTop=([^;]+)(;|$)/)){const e=document.cookie.match(/scrollTop=([^;]+)(;|$)/);document.documentElement.scrollTop=parseInt(e[1]),document.body.scrollTop=parseInt(e[1])}};var f=n(1257),b=n(5851);const h={withCredentials:(0,b.v8)(f.Z.create({headers:{"X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Origin":"*",Origin:window.location.origin},withCredentials:!0}),{storage:(0,b.ZF)(localStorage,"axios-cache:")}),withoutCredentials:(0,b.v8)(f.Z.create({withCredentials:!1}),{storage:(0,b.ZF)(localStorage,"axios-cache:")})};var g=n(2740);new URL(g.Qy.url)},2480:function(){},5733:function(e,t,n){"use strict";n.d(t,{Qc:function(){return i}});var o=Symbol("cache-parser");function r(e){return("string"==typeof e||"number"==typeof e)&&(e=Number(e))>=0&&e<1/0}function a(e){return!0===e||"number"==typeof e||"string"==typeof e&&"false"!==e}var s=Number;function i(e){var t=Object.defineProperty({},o,{enumerable:!1,value:1});if(!e||"string"!=typeof e)return t;var n=function(e){var t={},n=e.toLowerCase().replace(/\s+/g,"").split(",");for(var o in n){var r,a=n[o].split("=",2);t[a[0]]=null==(r=a[1])||r}return t}(e),i=n["max-age"],c=n["max-stale"],l=n["min-fresh"],d=n["s-maxage"],p=n["stale-if-error"],u=n["stale-while-revalidate"];return a(n.immutable)&&(t.immutable=!0),r(i)&&(t.maxAge=s(i)),r(c)&&(t.maxStale=s(c)),r(l)&&(t.minFresh=s(l)),a(n["must-revalidate"])&&(t.mustRevalidate=!0),a(n["must-understand"])&&(t.mustUnderstand=!0),a(n["no-cache"])&&(t.noCache=!0),a(n["no-store"])&&(t.noStore=!0),a(n["no-transform"])&&(t.noTransform=!0),a(n["only-if-cached"])&&(t.onlyIfCached=!0),a(n.private)&&(t.private=!0),a(n["proxy-revalidate"])&&(t.proxyRevalidate=!0),a(n.public)&&(t.public=!0),r(d)&&(t.sMaxAge=s(d)),r(p)&&(t.staleIfError=s(p)),r(u)&&(t.staleWhileRevalidate=s(u)),t}},5374:function(e,t,n){"use strict";n.d(t,{g:function(){return r}});var o=Symbol();function r(){var e,t,n=new Promise((function(n,o){e=n,t=o}));return n.resolve=e,n.reject=t,n[o]=1,n}},6278:function(e,t,n){"use strict";function o(e,t){void 0===t&&(t=new WeakMap);var n=typeof e;if(e&&"object"===n&&!(e instanceof Date||e instanceof RegExp)){for(var r=Array.isArray(e)?[]:{},a=Object.keys(e).sort((function(e,t){return e>t?1:-1})),s=a.length;s--;){var i=a[s],c=e[i];if("object"==typeof c&&null!==c&&!(c instanceof Date||c instanceof RegExp)){if(t.has(c))continue;t.set(c,!0)}r[i]=o(c,t)}return String(e.constructor)+JSON.stringify(r,a)}return n+String(e)}function r(e){e=o(e);for(var t=5381,n=0;n<e.length;)t=33*t^e.charCodeAt(n++);return t}n.d(t,{v:function(){return r}})}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={id:e,exports:{}};return a[e].call(n.exports,n,n.exports,i),n.exports}i.m=a,e=[],i.O=function(t,n,o,r){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],r=e[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var r=Object.create(null);i.r(r);var a={};t=t||[null,n({}),n([]),n(n)];for(var s=2&o&&e;"object"==typeof s&&!~t.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},i.d(r,a),r},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return 270===e?"runtime/js/vendor-react.6bb5bdf02bc119fe56d3.bundle.js":"runtime/chunk/"+({304:"flowbite-main-css",436:"404-layout",495:"flowbite-with-sidebar-layout",743:"homepage-layout",891:"flowbite-css"}[e]||e)+"."+{147:"e1161ed6ee924e1d2a23",304:"dc7f039c2eb3d01dca4d",343:"dfbca10cf5534e3239a1",436:"8318218735840c8c466f",495:"1a353f7155afd936b977",539:"04d484a65b2af35d18cb",587:"fa56851f726c48b455d1",677:"d504cc59c3ddaa7b6e1f",678:"4b242fb52d485ea18e1d",743:"fe0f40ab0bc0b43f089c",891:"289af1d30a104ad407cf"}[e]+".js"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o={},r="hexo-webpack:",i.l=function(e,t,n,a){if(o[e])o[e].push(t);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var p=l[d];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==r+n){s=p;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+n),s.src=e),o[e]=[t];var u=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=o[e];if(delete o[e],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/android-traffic-exchange/",function(){i.b=document.baseURI||self.location.href;var e={493:0};i.f.j=function(t,n){var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=r);var a=i.p+i.u(t),s=new Error;i.l(a,(function(n){if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,o[1](s)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,a=n[0],s=n[1],c=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(c)var d=c(i)}for(t&&t(n);l<a.length;l++)r=a[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},n=self.webpackChunkhexo_webpack=self.webpackChunkhexo_webpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),i.nc=void 0;var c=i.O(void 0,[442,323],(function(){return i(713)}));c=i.O(c)}();