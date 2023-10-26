import Image from '@components/Image';
import React from 'react';

export default function BackendHome() {
  return (
    <div className="max-w-none prose lg:prose-lg dark:prose-invert text-gray-500 dark:text-gray-400">
      <div className="p-2">
        <h1 className="text-center text-lg">Android Traffic Exchanger</h1>

        <div className="text-center">
          <p>
            Place your ads here by calling us at <a href="https://wa.link/5z3yji">+6285655667573</a>
          </p>

          <div className="hero container max-w-screen-lg mx-auto">
            <a href="https://saweria.co/dimaslanjaka" className="mx-auto text-center">
              <Image
                src="https://cdn.buymeacoffee.com/assets/img/home-page-v3/bmc-new-logo.png"
                alt="Donate"
                className="text-center mx-auto"
                width={120}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
