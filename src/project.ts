import _config from '../_config.json';
import pjson from '../package.json';
import routes from '../routes.json';
import Hexo from 'hexo';

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

export const routeConfig = routes as Route[];
export const projectConfig = _config as Hexo['config'] & typeof _config;
export const pkgjson = pjson;
export default { routeConfig, projectConfig, pkgjson };
