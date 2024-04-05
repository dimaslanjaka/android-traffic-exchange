import { axiosWithCache, axiosWithoutCache } from './ajax';

export type IpResult = {
  [key: string]: any;
  ip: string;
  uag: string;
  loc: string;
  warp: string;
  rbi: string;
  gateway: string;
};

export default async function getIp(abortController: AbortController) {
  const response = await axiosWithoutCache('//www.cloudflare.com/cdn-cgi/trace', {
    method: 'GET',
    signal: abortController.signal
  });

  const data = String(response.data)
    .trim()
    .split('\n')
    .reduce(function (obj: Record<string, any>, pair) {
      const splitPair = pair.split('=');
      const spair = splitPair[0];
      if (spair) {
        return (obj[spair] = splitPair[1]), obj;
      } else {
        return [];
      }
    }, {}) as IpResult;
  // console.log(data);
  data.warp = data.warp.toUpperCase();
  data.rbi = data.rbi.toUpperCase();
  data.gateway = data.gateway.toUpperCase();
  return data;
}

export interface GeoIpResult {
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

export async function getGeoIp(ip?: string | AbortController, abortController?: AbortController) {
  const controller = ip instanceof AbortController ? ip : abortController;
  const response = await axiosWithCache.withoutCredentials('//ip-api.com/json/' + (typeof ip === 'string' ? ip : ''), {
    signal: controller?.signal
  });
  // console.log('geo ip', JSON.stringify(data));
  return (response?.data || {}) as GeoIpResult;
}
