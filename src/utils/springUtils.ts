import rconfig from '@root/_config.json';
import env from '@root/_env.json';
import axios from 'axios';
import { UserInfo } from '../types/UserInfo';
import { emptyInterface } from '../types/emptyInterface';

export interface AjaxResponse extends emptyInterface {
  error: boolean;
  message: string;
}

/**
 * spring utility using .env file to populate _env.json
 */
export default class springUtils {
  private static origin: URL;
  private static userInfo: UserInfo;
  /**
   * get url origin of backend
   * @returns URL instance without pathname
   */
  public static getOrigin() {
    if (typeof this.origin === 'undefined') {
      const BASE_API = (env as any)['BASE_API'];
      this.origin = new URL(BASE_API || rconfig.url);
      this.origin.pathname = '/';
      return this.origin;
    }
    return null;
  }
  /**
   * get url of backend
   * @param pathname pathname of backend
   * @returns URL instance
   */
  public static getUrl(pathname?: string) {
    this.getOrigin();
    const url = this.origin;
    if (typeof pathname == 'string') url.pathname = pathname;
    return url;
  }

  public static async fetchUserInfo() {
    if (typeof this.userInfo == 'undefined')
      await axios({
        url: this.getUrl('/me').toString(),
        withCredentials: true,
        method: 'GET'
      })
        .then(res => {
          if (res.data.error) {
            location.pathname = '/login';
          } else {
            this.userInfo = res.data;
          }
        })
        .catch(e => {
          console.error(e.message);
        });
    return this.userInfo;
  }
}
