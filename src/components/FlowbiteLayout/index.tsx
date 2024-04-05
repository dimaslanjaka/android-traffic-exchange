import { Fancybox } from '@fancyapps/ui';
import { Toast } from 'flowbite-react';
import React, { useState } from 'react';
import { BiBuoy } from 'react-icons/bi';
import {
  HiArrowSmRight,
  HiChartPie,
  HiFire,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards
} from 'react-icons/hi';
import { Outlet } from 'react-router-dom';
import FlowbiteHeader from './FlowbiteHeader';
import FlowbiteContext from './context/FlowbitContext';
import { SidebarProvider } from './context/SidebarContext';
import Sidebar from './sidebar';
// import './style.scss';

export interface FlowbiteToastContext {
  setShowToast: (show: boolean) => void;
  setToastInfo: (info: { title: string; description: string }) => void;
}

export function FlowbiteLayout(props?: { children: JSX.Element | React.ReactNode }) {
  // put on element call the toast
  // const { setShowToast, setToastInfo } = useOutletContext<FlowbiteToastContext>();
  const [showToast, setShowToast] = useState(false);
  const [toastInfo, setToastInfo] = useState({ title: 'toast title', description: 'toast description' });

  React.useEffect(() => {
    const wrapper = document.getElementById('router-wrapper');
    if (wrapper) {
      wrapper.querySelectorAll('img').forEach(el => {
        if (!el.hasAttribute('data-caption')) {
          let caption = '';
          caption += el.getAttribute('title') || '';
          if (caption.trim().length > 0) caption += ' - ';
          caption += el.getAttribute('alt') || '';
          el.setAttribute('data-caption', caption);
        }
        if (!el.hasAttribute('data-fancybox')) el.setAttribute('data-fancybox', 'true');
      });
      Fancybox.bind(wrapper, '[data-fancybox=true]', {
        // Your custom options
      });
    }
    return () => {
      if (wrapper) Fancybox.unbind(wrapper, '[data-fancybox]');
    };
  });

  return (
    <div id="FlowbiteLayout">
      <FlowbiteContext>
        <SidebarProvider>
          <FlowbiteHeader />
          <div id="flowbite-main-content">
            {props && props.children ? (
              props.children
            ) : (
              <div className="flex flex-col md:flex-row dark:bg-gray-900">
                <div className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]" id="router-wrapper">
                  <Outlet context={{ setShowToast, setToastInfo }} />
                </div>
                {showToast && (
                  <Toast className="absolute top-5 end-5 z-50 shadow">
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                      <HiFire className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">
                      <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                        {toastInfo.title}
                      </span>
                      <div className="mb-2 text-sm font-normal">{toastInfo.description}</div>
                    </div>
                    <Toast.Toggle onDismiss={() => setShowToast(false)} />
                  </Toast>
                )}
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

export function ActualSidebar(): JSX.Element {
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
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiTable}>
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

export interface ToastInfo {
  title: string;
  description: string;
}
export interface FLState {
  showToast: boolean;
  toastInfo: ToastInfo;
}

export class FL extends React.Component<{ children: React.ReactNode }, FLState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showToast: false,
      toastInfo: { title: 'toast title', description: 'toast description' }
    };
  }
  setShowToast = (value: boolean) => {
    this.setState({ showToast: value });
  };

  setToastInfo = (info: ToastInfo) => {
    this.setState({ toastInfo: info });
  };
  render(): React.ReactNode {
    const { showToast, toastInfo } = this.state;
    return (
      <div id="FlowbiteLayout">
        <FlowbiteContext>
          <SidebarProvider>
            <FlowbiteHeader />
            <div id="flowbite-main-content">
              {this.props && this.props.children ? (
                this.props.children
              ) : (
                <div className="flex flex-col md:flex-row dark:bg-gray-900">
                  <div className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]" id="router-wrapper">
                    <Outlet context={{ setShowToast: this.setShowToast, setToastInfo: this.setToastInfo }} />
                  </div>
                  {showToast && (
                    <Toast className="absolute top-5 end-5 z-50 shadow">
                      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                        <HiFire className="h-5 w-5" />
                      </div>
                      <div className="ml-3 text-sm font-normal">
                        <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                          {toastInfo.title}
                        </span>
                        <div className="mb-2 text-sm font-normal">{toastInfo.description}</div>
                      </div>
                      <Toast.Toggle onDismiss={() => this.setShowToast(false)} />
                    </Toast>
                  )}
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
}
