import { getAdsenseConfig } from './config';

/**
 * is local domains ?
 * * only works when `window.adsense_option.localhost` not empty
 * @returns
 */
export default function isLocalHostname() {
  const { localhost: localdomains = [] } = getAdsenseConfig();
  return localdomains.includes(window.location.hostname);
}

export { isLocalHostname };
