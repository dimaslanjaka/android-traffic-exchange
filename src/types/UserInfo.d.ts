/** response from /me */
export interface UserInfo extends AjaxResponse {
  isLogin: boolean;
  name: string;
  isAdmin: boolean;
  saldo: number;
  authorities: string[];
  email: string;
  point: number;
  token: string;
}
