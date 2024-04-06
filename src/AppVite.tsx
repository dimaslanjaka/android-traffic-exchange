import { Flowbite } from 'flowbite-react';
import React, { StrictMode } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/main.scss';
import './components/Adsense/utils/main';
import { ActualSidebar } from './components/FlowbiteLayout';
import FlowbiteHeader from './components/FlowbiteLayout/FlowbiteHeader';
import FlowbiteContext from './components/FlowbiteLayout/context/FlowbitContext';
import { SidebarProvider } from './components/FlowbiteLayout/context/SidebarContext';
import NoMatch from './components/NoMatch';
import theme from './flowbite-theme';
import './index.css';
import Homepage from './routes/Homepage';
import Anonymity2 from './routes/backend/Anonymity2';
import Im3Index from './routes/im3';
import GiftOtp from './routes/im3/GiftOtp';
import IndexMarkdown from './routes/markdown';
import Login from './routes/user/Login';
import Dashboard from './routes/user/dashboard/Dashboard';

export default class AppVite extends React.Component {
  render(): React.ReactNode {
    return (
      <StrictMode>
        <Flowbite theme={{ theme }}>
          <FlowbiteContext>
            <SidebarProvider>
              <FlowbiteHeader />
              <BrowserRouter>
                <div id="flowbite-main-content">
                  <div className="flex flex-col md:flex-row dark:bg-gray-900">
                    <div className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]" id="router-wrapper">
                      <Routes>
                        <Route path="/" element={<Homepage />} index />
                        <Route path="/im3" element={<Im3Index />} />
                        <Route path="/im3/gift-otp/:id" element={<GiftOtp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/test" element={<IndexMarkdown />} />
                        <Route path="/backend" element={<Anonymity2 />} />
                        <Route path="*" element={<NoMatch />} />
                      </Routes>
                    </div>
                    <div className="order-1">
                      <ActualSidebar />
                    </div>
                  </div>
                </div>
              </BrowserRouter>
            </SidebarProvider>
          </FlowbiteContext>
        </Flowbite>
      </StrictMode>
    );
  }
}
