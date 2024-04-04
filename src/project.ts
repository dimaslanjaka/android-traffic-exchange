import Hexo from 'hexo';
import _config from '../_config.json';
import pjson from '../package.json';
import routes from '../routes.json';

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
