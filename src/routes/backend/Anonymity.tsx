import { projectConfig } from '@root/src/project';
import { axiosWithCache } from '../../utils';
import React from 'react';
import './anonymity.scss';
import getIp, { IpResult } from '../../utils/getIp';
import isSelenium from '../../utils/isSelenium';
import isHeadless from '@root/src/utils/isHeadless';

export default function Anonymity() {
  const [ip, setIp] = React.useState<IpResult>();
  const [ipInfo, setIpInfo] = React.useState<GeoIpResult>();
  const [selenium, setSelenium] = React.useState<boolean>();
  const [headless, setHeadless] = React.useState<boolean>();

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
      .then(r => setSelenium(r.selenium))
      .catch(() => {
        //
      });
    isHeadless().then(setHeadless);

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
            check anonymity
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
              <tr>
                <td>Headless</td>
                <td>{String(headless)}</td>
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
