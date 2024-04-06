import { islocalhost } from '@utils/index';
import triggerAdsense from './triggerAdsense';

// 5 6 ^ %

/**
 * ADSENSE FULLY AUTOMATIC
 */

/**
 * do not show ads to these page title
 */
const banned = [/lagu|jackpot|montok|hack|crack|nulled/gi]
  .map(regex => regex.test(document.title))
  .some(result => result == true);
/** localhost indicator */
const localhost = islocalhost();

/**
 * adsense main function
 */
export function main() {
  console.log('initialize adsense');
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (!banned && !localhost) {
      // skip showing ads on non-domain host
      // skip showing ads from banned page
      if (document.readyState !== 'loading') {
        // fix react
        // document.addEventListener('load', triggerAdsense);
        document.addEventListener('scroll', triggerAdsense);
        //triggerAdsense(undefined);
      } else {
        document.addEventListener('DOMContentLoaded', triggerAdsense);
      }
    }
  }
}

export const adsenseMain = main;
