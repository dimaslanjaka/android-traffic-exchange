import { CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
// import { CustomFlowbiteTheme } from 'flowbite-react/lib/esm/components/Flowbite/FlowbiteTheme';
import { FC, PropsWithChildren } from 'react';

export const flowbiteTheme: CustomFlowbiteTheme = {
  footer: {
    root: {
      base: 'flex flex-col'
    },
    brand: {
      base: 'm-6 flex items-center'
    },
    groupLink: {
      base: 'flex flex-col flex-wrap text-gray-500 dark:text-white',
      link: {
        base: 'mb-4 last:mr-0 md:mr-6'
      }
    },
    icon: {
      base: 'text-gray-400 hover:text-gray-900 dark:hover:text-white'
    }
  },
  modal: {
    body: {
      base: 'space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'
    }
  },
  sidebar: {
    root: {
      base: 'h-full bg-gray-50',
      inner: 'h-full overflow-y-auto overflow-x-hidden bg-white py-4 px-3 dark:bg-gray-800'
    },
    collapse: {
      list: 'space-y-2 py-2 list-none'
    },
    item: {
      base: 'no-underline flex items-center rounded-lg p-2 text-lg font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
    },
    itemGroup: {
      base: 'list-none border-t border-gray-200 pt-3 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700'
    }
  },
  navbar: {
    root: {
      base: 'bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
      rounded: {
        on: 'rounded',
        off: ''
      },
      bordered: {
        on: 'border',
        off: ''
      },
      inner: {
        base: 'mx-auto flex flex-wrap items-center justify-between',
        fluid: {
          on: '',
          off: 'container'
        }
      }
    },
    brand: {
      base: 'flex items-center'
    },
    collapse: {
      base: 'w-full md:block md:w-auto',
      list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
      hidden: {
        on: 'hidden',
        off: ''
      }
    },
    link: {
      base: 'block py-2 pl-3 pr-4 md:p-0',
      active: {
        on: 'bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700',
        off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
      },
      disabled: {
        on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
        off: ''
      }
    },
    toggle: {
      base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
      icon: 'h-6 w-6 shrink-0'
    }
  }
};

const FlowbiteContext: FC<PropsWithChildren> = function ({ children }) {
  return <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>;
};

export default FlowbiteContext;
