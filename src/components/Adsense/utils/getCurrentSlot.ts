import { getCookie, setCookie } from '@utils/index';
import { getAdsenseConfig, getAllAds, setAdsenseConfig } from './config';

/**
 * get current page ad slot
 * @returns
 */
export default function getCurrentSlot() {
  /** current slot */
  let currentSlot = getAdsenseConfig().currentSlot;

  // select ads
  // cookie key
  const ck = 'currentAds';
  // select previous ads id from cookie
  const ca = getCookie(ck) || '';
  const allAds = getAllAds();
  currentSlot = allAds.find(item => item.pub === ca);

  if (ca.length > 0 && typeof currentSlot === 'object') {
    console.info('cached pub', ca);
  } else {
    currentSlot = allAds[0];

    if (location.pathname != '/') {
      console.info('caching pub', currentSlot.pub);
      setCookie(
        ck,
        currentSlot.pub,
        1,
        location.pathname,
        location.hostname,
        location.protocol.includes('https') && location.host === 'www.webmanajemen.com'
      );
    }
  }
  // apply to window.adsense_option.currentSlot
  setAdsenseConfig({ currentSlot });
  return currentSlot;
}

export { getCurrentSlot };
