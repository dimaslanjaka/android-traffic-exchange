import { RouteObject } from 'react-router-dom';

/**
 * create multiple routes based on defined path
 * @param path
 * @param element
 * @returns
 * @example
 * defined path is 'home' will be returned 'home', 'home.html', 'home/index.html'
 */
const createRoute = (
  path: string,
  element: RouteObject['element'] | RouteObject['lazy'] | React.ReactNode | React.JSX.Element | PromiseLike<any>
): RouteObject[] => {
  // console.log('createRoute promise=' + (element instanceof Promise));
  if (element instanceof Promise) {
    const lazy = async function lazy() {
      const awaited = await element;
      // component export
      if ('Component' in awaited) return { Component: awaited.Component };
      // default export
      if ('default' in awaited) return { Component: awaited.default };
      return { Component: awaited };
    };
    return [
      {
        path,
        lazy
      },
      // create path.html
      {
        path: `${path}.html`,
        lazy
      },
      // create path/index.html
      {
        path: `${path}/index.html`,
        lazy
      }
    ];
  }
  return [
    {
      element: element as any,
      path
    },
    // create path.html
    {
      element: element as any,
      path: `${path}.html`
    },
    // create path/index.html
    {
      element: element as any,
      path: `${path}/index.html`
    }
  ];
};

export default createRoute;
