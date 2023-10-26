import React from 'react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Outlet } from 'react-router-dom';
import FlowbiteContext from './context/FlowbitContext';
import { SidebarProvider } from './context/SidebarContext';
import Header from './header';
import Sidebar from './sidebar';
import { Fancybox } from '@fancyapps/ui';

function FlowbiteLayout(props?: { children: JSX.Element | React.ReactNode }) {
  React.useEffect(() => {
    const wrapper = document.getElementById('router-wrapper');
    if (wrapper) {
      wrapper.querySelectorAll('img').forEach(el => {
        let caption = '';
        caption += el.getAttribute('title') || '';
        if (caption.trim().length > 0) caption += ' - ';
        caption += el.getAttribute('alt') || '';
        el.setAttribute('data-caption', caption);
        el.setAttribute('data-fancybox', 'true');
      });
      Fancybox.bind(wrapper, '[data-fancybox]', {
        // Your custom options
      });
    }
    return () => {
      if (wrapper) Fancybox.unbind(wrapper);
    };
  });

  return (
    <div id="FlowbiteLayout">
      <FlowbiteContext>
        <SidebarProvider>
          <Header />
          <div id="flowbite-main-content">
            {props.children ? (
              props.children
            ) : (
              <div className="flex flex-col md:flex-row dark:bg-gray-900">
                <div className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]" id="router-wrapper">
                  <Outlet />
                </div>
                <div className="order-1">
                  <ActualSidebar />
                </div>
              </div>
            )}
          </div>
        </SidebarProvider>
      </FlowbiteContext>
    </div>
  );
}

function ActualSidebar(): JSX.Element {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default FlowbiteLayout;
export { FlowbiteLayout as Component };

export function FlowbiteLayoutWithoutSidebar() {
  return (
    <FlowbiteLayout>
      <div className="bg-white dark:bg-gray-900 prose dark:prose-invert max-w-none">
        <div className="mx-4 text-gray-900 dark:text-white pt-4" id="router-wrapper">
          <Outlet />
        </div>
      </div>
    </FlowbiteLayout>
  );
}
