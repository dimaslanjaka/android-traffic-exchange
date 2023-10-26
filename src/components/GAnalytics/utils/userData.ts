/* global gtag */

import { projectConfig } from '@root/src/project';
import { islocalhost } from '@root/src/utils';

/**
 * google analytics property id (UA-xxx/G-xxx)
 */
export const TAG_ID = projectConfig.analytics.GA4 || projectConfig.analytics.GA3 || '';
// export const TAG_ID = projectConfig.analytics.GA3 || projectConfig.analytics.GA4;

interface IPAPI {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: any;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
}

interface Cloudflare {
  fl: string;
  h: string;
  ip: string;
  ts: string;
  visit_scheme: string;
  uag: string;
  colo: string;
  sliver: string;
  http: string;
  loc: string;
  tls: string;
  sni: string;
  warp: string;
  gateway: string;
  rbi: string;
  kex: string;
}

let data_analystic: {
  [key: string]: any;
  referer?: any;
  location?: string;
  origin?: string;
  host?: string;
  'user-agent'?: string;
  browser?: {
    opera: boolean;
    firefox: boolean;
    chrome: boolean;
    // safari: isSafari,
    // ie: isIE,
    // edge: isEdge,
    blink: boolean;
  };
  info?: (Partial<IPAPI> | Partial<Cloudflare>) & Record<string, any>;
};

// Opera 8.0+
const isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
const isFirefox = 'InstallTrigger' in window;

// Safari 3.0+ "[object HTMLElementConstructor]"
// const isSafari =
//   /constructor/i.test(window.HTMLElement) ||
//   (function (p) {
//     return p.toString() === '[object SafariRemoteNotification]';
//   })(!window['safari'] || (typeof window.safari !== 'undefined' && window.safari.pushNotification));

// Internet Explorer 6-11
// const isIE = /*@cc_on!@*/ false || !!document.documentMode;

// Edge 20+
// const isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 71
const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Blink engine detection
const isBlink = (isChrome || isOpera) && !!window.CSS;

function setDataUser(IP: { [x: string]: string }) {
  const loc = window.location as typeof window.location & Record<string, any>;
  data_analystic = {
    referer: loc.referer,
    location: loc.href,
    origin: loc.origin,
    host: loc.host,
    'user-agent': navigator.userAgent,
    browser: {
      opera: isOpera,
      firefox: isFirefox,
      chrome: isChrome,
      // safari: isSafari,
      // ie: isIE,
      // edge: isEdge,
      blink: isBlink
    },
    info: IP
  };
}

const cloudflare = async function () {
  const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace', {
    method: 'GET',
    mode: 'cors'
    // credentials: 'include'
  });
  const data = await response.text();
  const userData = data
    .split('\n')
    .map(str => {
      const spl = str.split('=');
      const key = spl[0];
      const value = spl[1];
      //console.log(key, value);
      if (key.trim().length > 0)
        return {
          [key]: value
        };
    })
    .filter(str_1 => typeof str_1 !== 'undefined')
    .reduce((prev, next) => ({ ...prev, ...next }), {});
  const IP = userData;
  return setDataUser(IP);
};

const ipApi = async function () {
  const response = await fetch('https://ipapi.co/json/');
  const IP = await response.json();
  return setDataUser(IP);
};

const isLocal = islocalhost();
export function gtagBuilder(obj: Record<string, any>) {
  if (isLocal) obj.debug_mode = true;
  return obj;
}

/**
 * send custom event
 * @param actionName action name
 * @param eventCategory event category
 * @param dimension5 event value
 */
export function sendCustomEvent(actionName: string, eventCategory: string, dimension5: string) {
  gtag('event', actionName, {
    eventCategory,
    dimension5
  });
}

function processData() {
  const { ip } = data_analystic.info;
  if (ip) {
    gtag(
      'config',
      TAG_ID,
      gtagBuilder({
        user_id: ip.replace(/\./g, '-'),
        send_page_view: true
      })
    );
  }

  gtag(
    'event',
    'screen_view',
    gtagBuilder({
      app_name: projectConfig.title,
      screen_name: document.title
    })
  );
}

/**
 * send user id by ip
 * @returns
 */
export const fetchIp = () => cloudflare().catch(ipApi).then(processData);
// export const fetchIp = () => ipApi().then(processData);
