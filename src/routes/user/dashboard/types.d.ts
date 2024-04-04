export interface Paket extends AjaxResponse {
  data: {
    isp: string;
    id: number;
    name: string;
    description: string;
    price: number;
    type: string;
  }[];
}
