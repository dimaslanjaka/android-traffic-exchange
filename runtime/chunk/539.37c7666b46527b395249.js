"use strict";(self.webpackChunkhexo_webpack=self.webpackChunkhexo_webpack||[]).push([[539],{7539:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(2740),a=n(713),o=n(7294),i=n(3379),c=n.n(i),l=n(7795),u=n.n(l),s=n(569),d=n.n(s),m=n(3565),p=n.n(m),f=n(9216),h=n.n(f),w=n(4589),v=n.n(w),b=n(1286),g={};function y(){const[e,t]=o.useState(),[n,i]=o.useState(),[c,l]=o.useState();return o.useEffect((()=>{const e=new AbortController;(async function(e){const t=await(0,a.xJ)("//www.cloudflare.com/cdn-cgi/trace",{method:"GET",signal:e.signal}),n=String(t.data).trim().split("\n").reduce((function(e,t){const n=t.split("=");return e[n[0]]=n[1],e}),{});return n.warp=n.warp.toUpperCase(),n.rbi=n.rbi.toUpperCase(),n.gateway=n.gateway.toUpperCase(),n})(e).then((n=>{t(n),async function(e,t){const n=e instanceof AbortController?e:t,r=await a.ZS.withoutCredentials("http://ip-api.com/json/"+("string"==typeof e?e:""),{signal:null==n?void 0:n.signal});return(null==r?void 0:r.data)||{}}(n.ip,e).then((e=>{i(e)}))})),new Promise((e=>{const t=["__webdriver_evaluate","__selenium_evaluate","__webdriver_script_function","__webdriver_script_func","__webdriver_script_fn","__fxdriver_evaluate","__driver_unwrapped","__webdriver_unwrapped","__driver_evaluate","__selenium_unwrapped","__fxdriver_unwrapped"],n=["_phantom","__nightmare","_selenium","callPhantom","callSelenium","_Selenium_IDE_Recorder"];for(const t in n){const r=n[t];if(window[r]||r in window)return e({selenium:!0})}for(const n in t){const r=t[n];if(window.document[r]||r in document)return e({selenium:!0})}for(const t in window.document)if(t.match(/\$[a-z]dc_/)&&window.document[t].cache_)return e({selenium:!0});return window.external&&window.external.toString()&&-1!==window.external.toString().indexOf("Sequentum")||window.document.documentElement.getAttribute("selenium")||window.document.documentElement.getAttribute("webdriver")||window.document.documentElement.getAttribute("driver")||window.document.documentElement.getAttribute("webdriver")||("callPhantom"in window||"_phantom"in window)&&(window.callPhantom||window._phantom)||"webdriver"in navigator&&1==navigator.webdriver?e({selenium:!0}):"userAgentData"in navigator?e({selenium:JSON.stringify(navigator.userAgentData).includes("Not=A?Brand")}):e({selenium:!1})})).then((e=>l(e.selenium))),fetch(_("//httpbin.org/headers"),{method:"GET",credentials:"include"}).then((e=>e.json())).then((e=>{const t=JSON.stringify(e,null,2);document.querySelector("#headers").textContent=t}));const n="cookieKey";return E(n)||function(e,t,n){const r=new Date;r.setTime(r.getTime()+864e5),document.cookie=e+"="+t+";expires="+r.toUTCString()}(n,Math.random().toString(36).substring(2,6)),fetch(_("//httpbin.org/cookies/set?")+new URLSearchParams({cookieKey:E(n)||"hello world"}),{method:"GET",credentials:"include"}).then((e=>{if(e.ok)return document.querySelector("#set").textContent="".concat(e.url," OK"),e.json()})).finally((()=>{fetch(_("//httpbin.org/cookies"),{method:"GET",credentials:"include"}).then((e=>e.json())).then((e=>{const t=JSON.stringify(e,null,2);document.querySelector("#cookiesHttpbin").textContent=t}))})),()=>{e.abort()}}),[]),o.createElement("div",{className:"w-full md:w-auto break-words",id:"anon"},o.createElement("div",{className:"flex flex-col md:flex-row justify-between p-2 mb-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"},o.createElement("div",null,o.createElement("a",{href:"https://proxy6.net/en/privacy",target:"_blank",rel:"nofollow noopener"},"proxy6.net")),["backend/referer.html","backend/anon.html","backend/info.html","backend/anonymity.html","backend"].map((e=>o.createElement("div",{key:e},o.createElement("a",{href:r.Qy.paths.base+e},e))))),o.createElement("div",{className:"flex flex-col md:flex-row justify-between p-2 mb-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"},o.createElement("div",{className:"mb-2"},o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",null,"JS Referer"),o.createElement("td",null,document.referrer)),o.createElement("tr",null,o.createElement("td",null,"Selenium"),o.createElement("td",null,String(c)))))),o.createElement("div",{className:"mb-2"},o.createElement("h2",null,"IP Information"),o.createElement("table",null,o.createElement("tbody",null,e&&Object.keys(e).map((t=>e[t]?o.createElement("tr",{key:t},o.createElement("td",null,t),o.createElement("td",null,e[t])):o.createElement(o.Fragment,null)))))),o.createElement("div",{className:"mb-2"},o.createElement("h2",null,"Geo Location"),o.createElement("table",null,o.createElement("tbody",null,n&&Object.keys(n).map((e=>n[e]?o.createElement("tr",{key:e},o.createElement("td",null,e),o.createElement("td",null,n[e])):o.createElement(o.Fragment,null))))))),o.createElement("div",{className:"mb-2"},o.createElement("h2",null,"headers"),o.createElement("pre",{id:"headers",className:"mb-2"}),o.createElement("h2",null,"Cookies"),o.createElement("span",null,"Set ",o.createElement("span",{id:"set"},"undefined")),o.createElement("br",null),o.createElement("pre",{id:"cookiesHttpbin"})))}function E(e){const t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}function _(e){let t=window.location.protocol;return t.startsWith("file:")&&(t="http:"),t+e.replace(/^https?:/,"")}g.styleTagTransform=v(),g.setAttributes=p(),g.insert=d().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=h(),c()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals},1286:function(e,t,n){var r=n(8081),a=n.n(r),o=n(3645),i=n.n(o)()(a());i.push([e.id,"#anon{word-wrap:break-word;word-wrap:anywhere}#anon pre{white-space:pre-wrap;word-wrap:break-word}",""]),t.Z=i},3645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},8081:function(e){e.exports=function(e){return e[1]}},3379:function(e){var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var l=e[c],u=r.base?l[0]+r.base:l[0],s=o[u]||0,d="".concat(u," ").concat(s);o[u]=s+1;var m=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=a(p,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var l=r(e,a),u=0;u<o.length;u++){var s=n(o[u]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=l}}},569:function(e){var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},9216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:function(e){e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);