import { UserInfo } from '@root/src/types/UserInfo';
import convertToRupiah from '@root/src/utils/rupiah';
import springUtils from '@root/src/utils/springUtils';
import axios, { AxiosResponse } from 'axios';
import { Button, Table } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Paket } from './types';

export default function DashboardProductTable({ userInfo }: { userInfo: UserInfo }) {
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
    <div className="relative overflow-x-auto">
      <Table>
        <Table.Head className="bg-gray-100 dark:bg-gray-700">
          <Table.HeadCell>Product Name</Table.HeadCell>
          <Table.HeadCell>ISP</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
          {products.map(product => {
            return (
              <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700" key={product.id}>
                <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  <div className="text-base font-semibold text-gray-900 dark:text-white">{product.name}</div>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{product.description}</div>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                  {product.isp.toUpperCase()}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                  {convertToRupiah(product.price)}
                </Table.Cell>
                <Table.Cell className="space-x-2 whitespace-nowrap p-4">
                  <div className="flex items-center gap-x-3">
                    <Button color="primary">
                      <Link to={`/im3/paket/buy?id=${product.id}`}>
                        <i className="fa-duotone fa-cart-shopping"></i>
                      </Link>
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
