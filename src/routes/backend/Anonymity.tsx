import { projectConfig } from '@root/src/project';
import { axiosWithCache, axiosWithoutCache } from '@root/src/utils';
import React from 'react';
import './anonymity.scss';

export default function Anonymity() {
  const [ip, setIp] = React.useState<IpResult>();
  const [ipInfo, setIpInfo] = React.useState<GeoIpResult>();
  const [selenium, setSelenium] = React.useState<boolean>();

  React.useEffect(() => {
    const ac = new AbortController();
    getIp(ac).then(result => {
      setIp(result);
      getGeoIp(result.ip, ac).then(r => {
        setIpInfo(r);
      });
    });
    isSelenium().then(r => setSelenium(r.selenium));

    fetch(urlOf('//httpbin.org/headers'), {
      method: 'GET',
      credentials: 'include'
      // follow: true
    })
      .then(response => response.json())
      .then(data => {
        const str = JSON.stringify(data, null, 2);
        document.querySelector('#headers').textContent = str;
      });
    // cookie fetcher
    const ck = 'cookieKey';
    //eraseCookie(ck);
    if (!getCookie(ck)) {
      setCookie(
        ck,
        Math.random()
          .toString(36)
          .substring(2, 4 + 2),
        1
      );
    }
    fetch(
      urlOf('//httpbin.org/cookies/set?') +
        new URLSearchParams({
          cookieKey: getCookie(ck) || 'hello world'
        }),
      {
        method: 'GET',
        credentials: 'include'
        // follow: true
      }
    )
      .then(response => {
        if (response.ok) {
          document.querySelector('#set').textContent = `${response.url} OK`;
          return response.json();
        }
      })
      .finally(() => {
        fetch(urlOf('//httpbin.org/cookies'), {
          method: 'GET',
          credentials: 'include'
          // follow: true
        })
          .then(res => res.json())
          .then(data => {
            const str = JSON.stringify(data, null, 2);
            document.querySelector('#cookiesHttpbin').textContent = str;
          });
      });
    return () => {
      ac.abort();
    };
  }, []);
  return (
    <div className="w-full md:w-auto break-words" id="anon">
      <div className="flex flex-col md:flex-row justify-between p-2 mb-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        <div>
          <a href="https://proxy6.net/en/privacy" target="_blank" rel="nofollow noopener">
            proxy6.net
          </a>
        </div>
        {['backend/referer.html', 'backend/anon.html', 'backend/info.html', 'backend/anonymity.html', 'backend'].map(
          route => {
            return (
              <div key={route}>
                <a href={projectConfig.paths.base + route}>{route}</a>
              </div>
            );
          }
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between p-2 mb-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        <div className="mb-2">
          <table>
            <tbody>
              <tr>
                <td>JS Referer</td>
                <td>{document.referrer}</td>
              </tr>
              <tr>
                <td>Selenium</td>
                <td>{String(selenium)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-2">
          <h2>IP Information</h2>
          <table>
            <tbody>
              {ip &&
                Object.keys(ip).map(ipItem => {
                  if (ip[ipItem]) {
                    return (
                      <tr key={ipItem}>
                        <td>{ipItem}</td>
                        <td>{ip[ipItem]}</td>
                      </tr>
                    );
                  }
                  return <></>;
                })}
            </tbody>
          </table>
        </div>

        <div className="mb-2">
          <h2>Geo Location</h2>
          <table>
            <tbody>
              {ipInfo &&
                Object.keys(ipInfo).map(ipItem => {
                  if (ipInfo[ipItem]) {
                    return (
                      <tr key={ipItem}>
                        <td>{ipItem}</td>
                        <td>{ipInfo[ipItem]}</td>
                      </tr>
                    );
                  }
                  return <></>;
                })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-2">
        <h2>headers</h2>
        <pre id="headers" className="mb-2"></pre>
        <h2>Cookies</h2>
        <span>
          Set <span id="set">undefined</span>
        </span>
        <br />
        <pre id="cookiesHttpbin"></pre>
      </div>
    </div>
  );
}

function setCookie(key: string, value: string, expiry: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + expiry * 24 * 60 * 60 * 1000);
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key: string) {
  const keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}

// function eraseCookie(key) {
//   const keyValue = getCookie(key);
//   setCookie(key, keyValue, '-1');
// }

function urlOf(url: string) {
  let protocol = window.location.protocol;
  if (protocol.startsWith('file:')) protocol = 'http:';
  return protocol + url.replace(/^https?:/, '');
}

interface GeoIpResult {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}

async function getGeoIp(ip?: string | AbortController, abortController?: AbortController) {
  const controller = ip instanceof AbortController ? ip : abortController;
  const response = await axiosWithCache.withoutCredentials(
    'http://ip-api.com/json/' + (typeof ip === 'string' ? ip : ''),
    {
      signal: controller?.signal
    }
  );
  // console.log('geo ip', JSON.stringify(data));
  return (response?.data || {}) as GeoIpResult;
}

type IpResult = {
  [key: string]: any;
  ip: string;
  uag: string;
  loc: string;
  warp: string;
  rbi: string;
  gateway: string;
};

async function getIp(abortController: AbortController) {
  const response = await axiosWithoutCache('//www.cloudflare.com/cdn-cgi/trace', {
    method: 'GET',
    signal: abortController.signal
  });

  const data = String(response.data)
    .trim()
    .split('\n')
    .reduce(function (obj, pair) {
      const splitPair = pair.split('=');
      return (obj[splitPair[0]] = splitPair[1]), obj;
    }, {}) as IpResult;
  // console.log(data);
  data.warp = data.warp.toUpperCase();
  data.rbi = data.rbi.toUpperCase();
  data.gateway = data.gateway.toUpperCase();
  return data;
}

/**
 * detect selenium
 * @returns
 */
function isSelenium(): Promise<{ selenium: boolean }> {
  return new Promise(resolve => {
    const documentDetectionKeys = [
      '__webdriver_evaluate',
      '__selenium_evaluate',
      '__webdriver_script_function',
      '__webdriver_script_func',
      '__webdriver_script_fn',
      '__fxdriver_evaluate',
      '__driver_unwrapped',
      '__webdriver_unwrapped',
      '__driver_evaluate',
      '__selenium_unwrapped',
      '__fxdriver_unwrapped'
    ];
    const windowDetectionKeys = [
      '_phantom',
      '__nightmare',
      '_selenium',
      'callPhantom',
      'callSelenium',
      '_Selenium_IDE_Recorder'
    ];
    for (const windowDetectionKey in windowDetectionKeys) {
      const windowDetectionKeyValue = windowDetectionKeys[windowDetectionKey];
      if (window[windowDetectionKeyValue] || windowDetectionKeyValue in window) {
        return resolve({ selenium: true });
      }
    }
    for (const documentDetectionKey in documentDetectionKeys) {
      const documentDetectionKeyValue = documentDetectionKeys[documentDetectionKey];
      if (window['document'][documentDetectionKeyValue] || documentDetectionKeyValue in document) {
        return resolve({ selenium: true });
      }
    }
    for (const documentKey in window['document']) {
      if (documentKey.match(/\$[a-z]dc_/) && window['document'][documentKey]['cache_']) {
        return resolve({ selenium: true });
      }
    }
    if (
      window['external'] &&
      window['external'].toString() &&
      window['external'].toString()['indexOf']('Sequentum') !== -1
    )
      return resolve({ selenium: true });
    if (window['document']['documentElement']['getAttribute']('selenium')) return resolve({ selenium: true });
    if (window['document']['documentElement']['getAttribute']('webdriver')) return resolve({ selenium: true });
    if (window['document']['documentElement']['getAttribute']('driver')) return resolve({ selenium: true });
    if (window.document.documentElement.getAttribute('webdriver')) {
      return resolve({ selenium: true });
    }
    if ('callPhantom' in window || '_phantom' in window) {
      if (window.callPhantom || window._phantom) {
        return resolve({ selenium: true });
      }
    }
    if ('webdriver' in navigator) {
      if (navigator.webdriver == true) {
        return resolve({ selenium: true });
      }
    }
    if ('userAgentData' in navigator) {
      const udata = JSON.stringify(navigator.userAgentData);
      return resolve({ selenium: udata.includes('Not=A?Brand') });
    }
    return resolve({ selenium: false });
  });
}
