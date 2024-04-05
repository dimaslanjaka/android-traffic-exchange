import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { projectConfig } from '@root/src/project';
import LocalStorageHelper from '@root/src/utils/LocalStoragehelper';
import isHeadless from '@root/src/utils/isHeadless';
import urlOf from '@root/src/utils/urlOf';
import React from 'react';
import { axiosWithCache } from '../../utils';
import getIp, { IpResult } from '../../utils/getIp';
import isSelenium from '../../utils/isSelenium';
import './anonymity.scss';

export default function Anonymity() {
  const [ip, setIp] = React.useState<IpResult>();
  const [ipInfo, setIpInfo] = React.useState<GeoIpResult>();
  const [selenium, setSelenium] = React.useState<boolean>();
  const [headless, setHeadless] = React.useState<boolean>();
  const [fpHash, setFpHash] = React.useState('');
  const [cookieId, setCookieId] = React.useState('');
  const [storageId, setStorageId] = React.useState('');

  React.useEffect(() => {
    const ac = new AbortController();
    getIp(ac)
      .then(result => {
        setIp(result);
        getGeoIp(result.ip, ac)
          .then(r => {
            setIpInfo(r);
          })
          .catch(() => {
            //
          });
      })
      .catch(() => {
        //
      });
    isSelenium()
      .then(setSelenium)
      .catch(() => {
        //
      });
    isHeadless().then(result => setHeadless(result));

    const setFp = async () => {
      const fp = await FingerprintJS.load();

      const { visitorId } = await fp.get();

      setFpHash(visitorId);
    };

    setFp().catch(() => {
      //
    });

    fetch(urlOf('//httpbin.org/headers'), {
      method: 'GET',
      credentials: 'include'
      // follow: true
    })
      .then(response => response.json())
      .then(data => {
        const str = JSON.stringify(data, null, 2);
        const h = document.querySelector('#headers');
        if (h) h.textContent = str;
      });
    // cookie fetcher
    const cookieKeyStr = 'cookieKey';
    //eraseCookie(ck);
    if (!getCookie(cookieKeyStr)) {
      setCookie(
        cookieKeyStr,
        Math.random()
          .toString(36)
          .substring(2, 4 + 2),
        1
      );
    }
    // set local cookie id
    const cValue = getCookie(cookieKeyStr);
    if (cValue) {
      setCookieId(cValue);
      fetch(
        urlOf('//httpbin.org/cookies/set?') +
          new URLSearchParams({
            cookieKey: cValue || 'hello world'
          }),
        {
          method: 'GET',
          credentials: 'include'
          // follow: true
        }
      )
        .then(response => {
          if (response.ok) {
            const set = document.querySelector('#set');
            if (set) set.textContent = `${response.url} OK`;
            return response.json();
          }
          return null;
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
              if (data && data.cookies && data.cookies.cookieKey) {
                // set httpbin cookie id result
                setCookieId(data.cookies.cookieKey);
              }
              const el = document.querySelector('#cookiesHttpbin');
              if (el) el.textContent = str;
            });
        });
    }
    if (!LocalStorageHelper.hasKey(cookieKeyStr)) {
      LocalStorageHelper.setItem(
        cookieKeyStr,
        Math.random()
          .toString(36)
          .substring(2, 4 + 2)
      );
    }
    const localValue = LocalStorageHelper.getItem<string>(cookieKeyStr);
    if (localValue) setStorageId(localValue);
    return () => {
      ac.abort();
    };
  }, []);
  return (
    <div className="w-full md:w-auto break-words" id="anon">
      <div className="flex flex-col md:flex-row justify-between p-2 mb-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        <div>
          <a href="https://proxy6.net/en/privacy" target="_blank" rel="nofollow noopener">
            check anonymity
          </a>
        </div>
        {['backend/referer.html', 'backend/anon.html', 'backend/info.html', 'backend/anonymity.html', 'backend'].map(
          (route, i) => {
            return (
              <div key={'js-referer' + route + i}>
                <a href={projectConfig.paths.base + route}>Info {i + 1}</a>
              </div>
            );
          }
        )}
      </div>

      <div className="mb-2">
        <table>
          <tbody key="browser-info">
            <tr>
              <td>JS Referer</td>
              <td>{document.referrer}</td>
            </tr>
            <tr>
              <td>Selenium</td>
              <td>{String(selenium)}</td>
            </tr>
            <tr>
              <td>Headless</td>
              <td>{String(headless)}</td>
            </tr>
            <tr>
              <td>Cookie ID</td>
              <td>{cookieId}</td>
            </tr>
            <tr>
              <td>LocalStorage ID</td>
              <td>{storageId}</td>
            </tr>
            <tr>
              <td>Fingerprint</td>
              <td>{fpHash}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-2 mb-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        <div className="mb-2">
          <h2>IP Information</h2>
          <table>
            <tbody key="ip-info">
              {ip &&
                Object.keys(ip).map((ipItem, i) => {
                  if (ip[ipItem]) {
                    return (
                      <tr key={'ip-info' + ipItem + i}>
                        <td>{ipItem}</td>
                        <td>{ip[ipItem]}</td>
                      </tr>
                    );
                  }
                  return undefined;
                })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-2">
        <h2>Geo Location</h2>
        <table>
          <tbody key="ip-geolocation">
            {ipInfo &&
              Object.keys(ipInfo).map(ipItem => {
                const item = (ipInfo as Record<string, any>)[ipItem];
                if (item) {
                  return (
                    <tr key={'ip-geolocation' + ipItem}>
                      <td>{ipItem}</td>
                      <td>{item}</td>
                    </tr>
                  );
                }
                return undefined;
              })}
          </tbody>
        </table>
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
  const response = await axiosWithCache.withoutCredentials('//ip-api.com/json/' + (typeof ip === 'string' ? ip : ''), {
    signal: controller?.signal
  });
  // console.log('geo ip', JSON.stringify(data));
  return (response?.data || {}) as GeoIpResult;
}
