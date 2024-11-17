import FingerprintJS from '@fingerprintjs/fingerprintjs';
import Adsense from '@root/src/components/Adsense';
import { getCookie, noop, setCookie } from '@root/src/utils';
import LocalStorageHelper from '@root/src/utils/LocalStoragehelper';
import { booleanString } from '@root/src/utils/color';
import { GeoIpResult, IpResult } from '@root/src/utils/getIp';
import isHeadless from '@root/src/utils/isHeadless';
import isSelenium from '@root/src/utils/isSelenium';
import urlOf from '@root/src/utils/urlOf';
import { Table } from 'flowbite-react';
import React from 'react';

export interface State {
  cookieId: string;
  storageId: string;
  httpbinCookies: string;
  isSelenium: boolean;
  isHeadless: boolean;
  httpbinHeaders: string;
  ip: IpResult;
  ipInfo: GeoIpResult;
  fingerprintId: string;
}

const pageId = Math.random()
  .toString(36)
  .substring(2, 4 + 2);

export default class Anonymity2 extends React.Component<Record<string, any>, State> {
  public readonly state: State = {
    cookieId: '',
    storageId: '',
    httpbinCookies: '',
    isSelenium: false,
    isHeadless: false,
    httpbinHeaders: '',
    ip: {
      ip: '',
      uag: '',
      loc: '',
      warp: '',
      rbi: '',
      gateway: ''
    },
    ipInfo: {
      status: '',
      country: '',
      countryCode: '',
      region: '',
      regionName: '',
      city: '',
      zip: '',
      lat: 0,
      lon: 0,
      timezone: '',
      isp: '',
      org: '',
      as: '',
      query: ''
    },
    fingerprintId: ''
  };

  componentDidMount(): void {
    isSelenium()
      .then(result => this.setState({ isSelenium: result }))
      .catch(noop);
    isHeadless()
      .then(result => this.setState({ isHeadless: result }))
      .catch(noop);
    FingerprintJS.load()
      .then(fp => fp.get())
      .then(result => this.setState({ fingerprintId: result.visitorId }))
      .catch(noop);
    const cookieKeyStr = 'cookieKey';
    if (!getCookie(cookieKeyStr)) {
      setCookie(cookieKeyStr, pageId, 1);
      fetch(
        urlOf('//httpbin.org/cookies/set?') +
          new URLSearchParams({
            cookieKey: pageId
          }),
        {
          method: 'GET',
          credentials: 'include'
          // follow: true
        }
      ).catch(noop);
    }
    const cValue = getCookie(cookieKeyStr);
    if (cValue) {
      this.setState({ cookieId: cValue });
    }
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
          this.setState({ httpbinCookies: str });
        }
        // const el = document.querySelector('#cookiesHttpbin');
        // if (el) el.textContent = str;
      })
      .catch(noop);
    if (!LocalStorageHelper.hasKey(cookieKeyStr)) {
      LocalStorageHelper.setItem(cookieKeyStr, pageId);
    }
    const localValue = LocalStorageHelper.getItem<string>(cookieKeyStr);
    if (localValue) this.setState({ storageId: localValue });
    fetch(urlOf('//httpbin.org/headers'), {
      method: 'GET',
      credentials: 'include'
      // follow: true
    })
      .then(response => response.json())
      .then(data => {
        const str = JSON.stringify(data, null, 2);
        this.setState({ httpbinHeaders: str });
      })
      .catch(noop);
  }

  render(): React.ReactNode {
    return (
      <main>
        <div className="overflow-x-auto mb-2">
          <Table striped={true}>
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>#</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  JS Referer
                </Table.Cell>
                <Table.Cell>{document.referrer || 'undefined'}</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Cookie ID
                </Table.Cell>
                <Table.Cell>{this.state.cookieId}</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Storage ID
                </Table.Cell>
                <Table.Cell>{this.state.storageId}</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Is Selenium
                </Table.Cell>
                <Table.Cell>{booleanString(this.state.isSelenium)}</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Is Headless
                </Table.Cell>
                <Table.Cell>{booleanString(this.state.isHeadless)}</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Fingerprint ID
                </Table.Cell>
                <Table.Cell>{this.state.fingerprintId}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <Adsense
          data-ad-client="ca-pub-2188063137129806"
          data-ad-slot="6137665722"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <div className="mb-2 dark:text-white">
          <h2>AJAX Credentials</h2>
          <h5>headers</h5>
          <pre id="headers" className="mb-2">
            {this.state.httpbinHeaders}
          </pre>
          <h5>Cookies</h5>
          <br />
          <pre id="cookiesHttpbin">{this.state.httpbinCookies}</pre>
        </div>
      </main>
    );
  }
}
