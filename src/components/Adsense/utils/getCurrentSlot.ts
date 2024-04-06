import { getCookie, setCookie } from '@utils/index';
import { AdsList, AdsenseOption } from './config';

/**
 * get current page ad slot
 * @returns
 */
export default function getCurrentSlot(options: AdsenseOption) {
  console.log('current slot', options);
  if (!options.allAds) {
    console.error('current slot all ads undefined');
    return;
  }
  const { allAds } = options;
  /** current slot */
  let currentSlot: AdsList[number] | undefined = undefined;

  // select ads
  // cookie key
  const cookieKey = 'currentAds';
  // select previous ads id from cookie
  const ca = getCookie(cookieKey);
  if (allAds) {
    if (!ca) {
      // cookie not set
      const ads = allAds[0];
      if (ads) {
        console.info('caching pub', ads.pub);
        setCookie(
          cookieKey,
          ads.pub,
          1,
          location.pathname,
          location.hostname,
          location.protocol.includes('https') && location.host === 'www.webmanajemen.com'
        );
        // apply to window.adsense_option.currentSlot
        // setAdsenseConfig({ currentSlot: allAds[0] });
      }
    }
    if (ca) {
      console.info('cached pub', ca);
      currentSlot = allAds.find(item => item.pub === ca) as AdsList[number];

      if (currentSlot) {
        if (ca.length > 0 && typeof currentSlot === 'object') {
          console.info('cached pub', ca);
          // apply to window.adsense_option.currentSlot
          // setAdsenseConfig({ currentSlot });
        }
      }
    }
  } else {
    console.error('all ads undefined');
  }

  return currentSlot;
}

export { getCurrentSlot };
