import { UserInfo } from '@root/src/types/UserInfo';
import convertToRupiah from '@root/src/utils/rupiah';
import springUtils from '@root/src/utils/springUtils';
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { Paket } from './types';

export default function DashboardProduct({ userInfo }: { userInfo: UserInfo }) {
  const [products, setProducts] = React.useState([] as Paket['data']);
  React.useEffect(() => {
    axios
      .post(springUtils.getUrl('/im3/paket/list').toString(), {}, { withCredentials: true })
      .then((res: AxiosResponse<Paket>) => {
        // console.log(res.data.data);
        // filter duplicate object
        const list = res.data.data
          .filter(item => !products.find(find => find.id == item.id))
          .map(item => {
            const isp = 'im3';
            return Object.assign(item, { isp });
          })
          // concat with previous products
          .concat(products);
        setProducts(list);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => {
        return (
          <div
            className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative ${userInfo.saldo < product.price ? 'disabled' : ''}`}
            onClick={() => (location.href = `/${product.isp}/gift-otp/${product.id}`)}
            key={product.id}
          >
            {userInfo.saldo < product.price && (
              <div className="show text-[#FF0000] z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Saldo anda tidak mencukupi
              </div>
            )}
            <div
              className="absolute top-0 left-0 w-40 h-6 text-left rounded-tl-lg rounded-br-lg"
              style={{
                backgroundImage: `url('https://im3-img.indosatooredoo.com/indosatassets/images/icons/icon-512x512.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="absolute top-0 right-0 w-40 text-right">
              <span className="pr-2 text-dark font-bold">{product.type}</span>
            </div>
            <div className="py-7 pl-2 pb-2 pr-1">
              <a href="#">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-dark">{product.name}</h2>
                    <p className="text-sm w-60">{product.description}</p>
                  </div>
                  <p>{convertToRupiah(product.price)}</p>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
