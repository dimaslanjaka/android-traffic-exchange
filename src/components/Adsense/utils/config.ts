import { DeepPartial } from 'flowbite-react/dist/types/types';

export interface Ads {
  [key: string]: string;
  style: string;
  'data-ad-layout': string;
  'data-ad-format': string;
  'data-ad-slot': string;
  'data-full-width-responsive': string;
  'data-ad-layout-key': string;
}

// type NonNullable<T> = Exclude<T, null | undefined>;

export type AdsList = {
  name: string;
  pub: string;
  /**
   * css selector
   */
  // root?: string;
  ads: Partial<Ads>[];
}[];

export interface AdsenseOption {
  /**
   * remove banner when parent width is 0 or display: none
   */
  remove?: boolean;
  /**
   * element pseudo selector - ads places
   * * find element to add ads next of element
   * @example
   * '.root'
   * '#main-content'
   */
  places?: string[];
  /**
   * element pseudo selector - root ads places
   * * where to find elements
   * @example
   * '.root'
   * '#main-content'
   */
  root?: string;
  /**
   * localhost domain list
   * * force display ads on local domain
   */
  localhost?: string[];
  allAds?: AdsList;
}

// initialize undefined window properties
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (!window.adsense_option) {
    window.adsense_option = {
      places: [],
      localhost: ['adsense.webmanajemen.com', 'agc.io', 'dev.webmanajemen.com']
    };
  }
  if (!window.adsbygoogle) window.adsbygoogle = [];
  if (typeof window.adsenseInitialized === 'undefined') window.adsenseInitialized = false;
}

export interface ParamsAdsByGoogle {
  /** data-ad-slot */
  slot?: string;
  /** data-ad-client */
  client?: string;
  /** custom channel ID
   * @link https://support.google.com/adsense/answer/1354736?hl=en#zippy=%2Csetting-custom-channels-dynamically
   */
  channel?: string;
  /** custom ad width in pixel */
  width?: number;
  /** custom ad height in pixel */
  height?: number;
}

/**
 * build `window.adsbygoogle.push` parameters
 * @param opt
 * @returns
 * @example
 * (adsbygoogle = window.adsbygoogle || []).push({
 *   params: { \/\* will generate this \*\/ google_ad_channel: "channel id number" }
 * });
 */
export function paramBuilder(opt: ParamsAdsByGoogle) {
  const params = { google_ad_slot: opt.slot, google_ad_client: opt.client } as Record<string, any>;
  if (opt.channel && opt.channel.trim().length > 0) {
    // push custom channel
    params['google_ad_channel'] = opt.channel;
  }
  if (opt.width && opt.width > 0) {
    // custom ads width (only works on responsive ads)
    params['google_ad_width'] = opt.width;
  }
  if (opt.height && opt.height > 0) {
    // custom ads height (only works on responsive ads)
    params['google_ad_height'] = opt.height;
  }
  return params;
}

/**
 * remove ads when exist in document
 * @param ads
 * @returns
 */
export function removeDuplicateAds(adsConfig: Ads[]) {
  const filter = (item: Ads[]) =>
    item.filter(ads => {
      if (typeof document !== 'undefined') {
        // filter the ad slot not exist in dom tree
        return document.querySelectorAll(`[data-ad-slot="${ads['data-ad-slot']}"]`).length === 0;
      } else {
        // this script running on NodeJS
        return true;
      }
    });

  // if ('ads' in adsConfig === false) {
  //   return adsConfig.map(item => {
  //     if (item['ads']) item['ads'] = filter(item['ads']);
  //     return item;
  //   });
  // } else {
  //   return filter(adsConfig);
  // }

  return filter(adsConfig);
}

/**
 * get global adsense config
 * @param obj
 */
export function setAdsenseConfig(obj: DeepPartial<AdsenseOption>) {
  const merge = Object.assign(window.adsense_option || {}, obj);
  window.adsense_option = merge;
  // console.log('set root config', merge);
}

/**
 * get global adsense config
 * @returns
 */
export const getAdsenseConfig = () => window.adsense_option;
