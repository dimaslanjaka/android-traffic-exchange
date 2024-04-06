import adblock from './adblock';
import applyEnviromentAds from './applyEnviromentAds';
import { getAdsenseConfig } from './config';
import fillFixedPosition from './fillFixedPosition';
import getCurrentSlot from './getCurrentSlot';
import initializeRandomAds from './initializeRandomAds';

interface TriggerOptions extends Partial<Event> {
  react?: boolean;
}

/**
 * Trigger adsense
 * @param _e
 * @returns is blocked?
 */
export default async function triggerAdsense(ev: TriggerOptions = {}) {
  // run once
  if (window.adsenseInitialized) return;
  window.adsenseInitialized = true;

  const options = getAdsenseConfig();

  // console.log('trigger adsense', options);

  // apply current slot
  const apply = () => {
    const currentSlot = getCurrentSlot(options);
    fillFixedPosition(currentSlot, options);
    initializeRandomAds(options);
    applyEnviromentAds(options);
  };

  if (!ev.react) {
    await new adblock().load().inject();
    apply();
    // on non react always return false
    return false;
  } else {
    try {
      const result = await new adblock().ajaxMethod();
      if (result === false) apply();
      return false;
    } catch (_) {
      return true;
    }
  }
}

export { triggerAdsense };
