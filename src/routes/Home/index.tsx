/// <reference path='../../types/image-jpg.d.ts' />

import React from 'react';
import './home.scss';

class Home extends React.Component<any, any> {
  render(): React.ReactNode {
    return (
      <main id="homepage">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div
            onClick={() => {
              location.href = '/im3';
            }}
          >
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://im3-img.indosatooredoo.com/indosatassets/images/GeraiOnline.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
