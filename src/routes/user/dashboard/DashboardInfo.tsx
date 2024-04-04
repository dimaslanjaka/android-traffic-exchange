import { UserInfo } from '@root/src/types/UserInfo';
import convertToRupiah from '@root/src/utils/rupiah';
import { Table } from 'flowbite-react';

export default function DashboardInfo({ userInfo }: { userInfo: UserInfo }) {
  return (
    <div className="relative overflow-x-auto">
      <Table>
        <Table.Head></Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Saldo</Table.Cell>
            <Table.Cell>{convertToRupiah(userInfo.saldo)}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Poin</Table.Cell>
            <Table.Cell>{convertToRupiah(userInfo.point)}</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Token</Table.Cell>
            <Table.Cell>
              <code>{userInfo.token}</code>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
