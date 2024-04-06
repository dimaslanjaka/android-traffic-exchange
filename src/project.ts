import Hexo from 'hexo';
import _config from '../_config.json';
import pjson from '../package.json';
import routes from '../routes.json';
import { AdsList } from './components/Adsense/utils/config';
import { array_shuffle } from './utils';

export type Route = {
  body?: string;
  title: string;
  filename: string;
  description: string;
  source: string;
  meta: {
    [property: string]: {
      [property: string]: string;
    };
  };
  permalink: string;
  id: string;
  jsxPath: string;
};
type Y = Hexo['config'];
export interface X extends Y {
  [key: string]: any;
}
export const routeConfig = routes as unknown as Route[];
export const projectConfig = _config as X & typeof _config;
export const pkgjson = pjson;
const project = { routeConfig, projectConfig, pkgjson };
export default project;

/**
 * shuffled all ads
 */
export const allAds: AdsList = [
  {
    name: 'kiki',
    pub: '2188063137129806',
    ads: array_shuffle([
      {
        style: 'display: block !important; text-align: center',
        'data-ad-layout': 'in-article',
        'data-ad-format': 'fluid',
        'data-ad-slot': '5634823028'
      },
      {
        style: 'display: block !important; text-align: center',
        'data-ad-layout': 'in-article',
        'data-ad-format': 'fluid',
        'data-ad-slot': '8481296455'
      },
      {
        style: 'display:block !important',
        'data-ad-slot': '2667720583',
        'data-ad-format': 'auto',
        'data-full-width-responsive': 'true'
      },
      {
        style: 'display:block !important',
        'data-ad-format': 'fluid',
        'data-ad-layout-key': '-gw-3+1f-3d+2z',
        'data-ad-slot': '6979059162'
      }
    ])
  }
];
