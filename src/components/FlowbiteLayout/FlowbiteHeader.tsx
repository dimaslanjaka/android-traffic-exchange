import { projectConfig } from '@src/project';
import { Navbar } from 'flowbite-react';
import React, { FC } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import Image from '../Image';
import { useSidebarContext } from './context/SidebarContext';
import { getModeByLocalstorage, setMode, toggleDarkMode } from './utils';

const FlowbiteHeader: FC<Record<string, never>> = function () {
  const { isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens } = useSidebarContext();
  const [themeMode, setThemeMode] = React.useState<'dark' | 'light'>(getModeByLocalstorage());
  const isMounted = React.useRef(false); // unmounted by default

  React.useEffect(() => {
    isMounted.current = true;
    setTimeout(() => {
      if (isMounted.current) setMode(themeMode);
    }, 1000);
    return () => {
      isMounted.current = false;
    };
  });

  return (
    <header className="sticky top-0 z-20">
      <Navbar fluid>
        {isPageWithSidebar && (
          <button
            aria-controls="sidebar"
            aria-expanded="true"
            className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
            onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
          >
            {isOpenOnSmallScreens ? (
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        )}
        <Navbar.Brand href="/">
          <Image alt="Flowbite logo" height="24" src={projectConfig['paths'].base + 'favicon.ico'} width="24" />
          <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
            {projectConfig.title}
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {/* only show when top navbar when nav_top is set in _config.json */}
          {projectConfig['nav_top'] && <Navbar.Toggle />}
          {/* <DarkThemeToggle /> */}
          <button
            aria-label="Toggle dark mode"
            type="button"
            className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            onClick={() => {
              setThemeMode(toggleDarkMode());
            }}
          >
            {themeMode == 'dark' ? <BiMoon className="h-5 w-5" /> : <BiSun className="h-5 w-5" />}
          </button>
        </div>
        {/* only show when top navbar when nav_top is set in _config.json */}
        {projectConfig['nav_top'] && (
          <Navbar.Collapse>
            {Object.keys(projectConfig['nav_top']).map((name, index) => {
              const props = {} as Record<string, any>;
              if (index === 0) props['active'] = true;
              return (
                <Navbar.Link href={projectConfig['nav_top'][name]} key={name + index} {...props}>
                  {name}
                </Navbar.Link>
              );
            })}
          </Navbar.Collapse>
        )}
      </Navbar>
    </header>
  );
};

export default FlowbiteHeader;
