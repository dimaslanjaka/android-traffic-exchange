import { AdsenseOption } from './config';

/**
 * is local domains ?
 * * only works when `window.adsense_option.localhost` not empty
 * @returns
 */
export default function isLocalHostname(options: AdsenseOption) {
  const { localhost: localdomains = [] } = options;
  return localdomains.includes(window.location.hostname);
}

export { isLocalHostname };
