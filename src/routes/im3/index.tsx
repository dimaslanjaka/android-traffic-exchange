import springUtils from '@root/src/utils/springUtils';
import React from 'react';

export class Im3Index extends React.Component<any, any> {
  static displayName: string;
  componentDidMount(): void {
    springUtils.fetchUserInfo();
  }
  render(): React.ReactNode {
    return (
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <a
              href="/im3/otp"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">OTP login</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Untuk mengakses semua produk diperlukan sebuah token dengan login otp ini (pertama kali).
              </p>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Im3Index;

// react-router-dom lazy loading
export const Component = Im3Index;
// If you want to customize the component display name in React dev tools:
Component.displayName = 'IM3 Index';
