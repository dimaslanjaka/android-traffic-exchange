import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FlowbiteCss } from './components/FlowbiteLayout/utils';
import callGAnalytics from './components/GAnalytics/utils/callGAnalytics';
import { TAG_ID } from './components/GAnalytics/utils/userData';
import { initHljs } from './components/Highlight.js/helper';
import { projectConfig } from './project';
import createRoute from './utils/createRoute';

const indexRoute: Parameters<typeof createBrowserRouter>[0] = [
  {
    path: '*',
    async lazy() {
      const { default: Component } = await import(/* webpackChunkName: "404-layout" */ './components/NoMatch');
      return { Component };
    }
  },
  {
    index: true,
    async lazy() {
      const { default: Component } = await import(/* webpackChunkName: "homepage-layout" */ './routes/Homepage');
      return { Component };
    }
  }
];

const router = createBrowserRouter([
  {
    lazy: async () => {
      const { default: Component } = await import(
        /* webpackChunkName: "flowbite-with-sidebar-layout" */ './components/FlowbiteLayout/index'
      );
      return { Component };
    },
    children: indexRoute
  },
  {
    path: projectConfig.paths.base,
    lazy: async () => {
      const { FlowbiteLayoutWithoutSidebar: Component } = await import(
        /* webpackChunkName: "flowbite-with-sidebar-layout" */ './components/FlowbiteLayout/index'
      );
      return { Component };
    },
    children: [...createRoute('backend/home', import('./routes/backend/Home'))].concat(indexRoute as any)
  }
]);

window.adsense_option = Object.assign(window.adsense_option || {}, {
  root: '#FlowbiteLayout #flowbite-main-content',
  places: ['pre code.hljs'],
  localhost: ['adsense.webmanajemen.com', 'agc.io', 'dev.webmanajemen.com']
});

class App extends React.Component {
  componentDidMount(): void {
    // load theme stylesheet
    FlowbiteCss();
    // initialize highlight.js
    initHljs();
    // initialize adsense
    import('@components/Adsense/utils/exports').then(load => {
      load.setAdsenseConfig(window.adsense_option);
      load.triggerAdsense({ react: true });
    });
    // initialize google analytics when property id is settled
    if (TAG_ID.length > 0) callGAnalytics();
  }

  render() {
    return <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />;
  }
}

export default App;
