import { Flowbite } from 'flowbite-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/main.scss';
import { ActualSidebar } from './components/FlowbiteLayout';
import FlowbiteHeader from './components/FlowbiteLayout/FlowbiteHeader';
import FlowbiteContext from './components/FlowbiteLayout/context/FlowbitContext';
import { SidebarProvider } from './components/FlowbiteLayout/context/SidebarContext';
import NoMatch from './components/NoMatch';
import theme from './flowbite-theme';
import './index.css';
import Home2 from './routes/Home2';
import Im3Index from './routes/im3';
import GiftOtp from './routes/im3/GiftOtp';
import IndexMarkdown from './routes/markdown';
import Login from './routes/user/Login';
import Dashboard from './routes/user/dashboard/Dashboard';

const container = document.getElementById('root');

if (!container) {
  throw new Error("React root element doesn't exist!");
}

const root = createRoot(container);

root.render(
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
                    <Route path="/" element={<Home2 />} index />
                    <Route path="/im3" element={<Im3Index />} />
                    <Route path="/im3/gift-otp/:id" element={<GiftOtp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/test" element={<IndexMarkdown />} />
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
