import { Flowbite } from 'flowbite-react';
import React, { StrictMode } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/main.scss';
import Adsense from './components/Adsense';
import { Ads, getAdsenseConfig, setAdsenseConfig } from './components/Adsense/utils/config';
import createIns from './components/Adsense/utils/createIns';
import { getAllPlaces } from './components/Adsense/utils/initializeRandomAds';
import { ActualSidebar } from './components/FlowbiteLayout';
import FlowbiteHeader from './components/FlowbiteLayout/FlowbiteHeader';
import FlowbiteContext from './components/FlowbiteLayout/context/FlowbitContext';
import { SidebarProvider } from './components/FlowbiteLayout/context/SidebarContext';
import { highlightMain } from './components/Highlight.js/helper';
import HighlightLayout from './components/Highlight.js/route';
import NoMatch from './components/NoMatch';
import theme from './flowbite-theme';
import './index.css';
import { allAds } from './project';
import Homepage from './routes/Homepage';
import Anonymity2 from './routes/backend/Anonymity2';
import IndexMarkdown from './routes/markdown';
import { array_shuffle, insertAfter } from './utils';
import isDev from './utils/isDev';

setAdsenseConfig({ root: '#flowbite-main-content', allAds });

export default class AppVite extends React.Component {
  private initialized = false;
  async componentDidMount() {
    if (this.initialized) return;
    highlightMain();
    // adsenseMain();
    this.initialized = true;
  }

  componentDidUpdate() {
    const options = getAdsenseConfig();
    const wrapper = document.getElementById('flowbite-main-content');
    if (wrapper) {
      const places = array_shuffle(getAllPlaces(wrapper));
      for (let i = 0; i < places.length; i++) {
        const el = places[i];
        if (el) {
          const prevEl = el.previousElementSibling || ({} as Element);
          const nextEl = el.nextElementSibling || ({} as Element);
          if (prevEl.tagName === 'INS' || nextEl.tagName === 'INS' || el.tagName == 'INS') {
            console.error('same ins at index', i);
            // skip if there are adjacent `ins` elements
            continue;
          }
          // ignore BR and HR
          if (el.tagName == 'HR' || el.tagName == 'BR') continue;
          const bannedElement = [el.classList.contains('fixed-top')].some(Boolean);
          // console.log(el.clientWidth, el.scrollWidth, el.clientHeight, el.scrollHeight);
          const isWidthAvailable = el.clientWidth > 250 && el.scrollWidth > 250;

          if (isWidthAvailable && !bannedElement) {
            const ad = allAds[0]?.ads.shift() as Required<Ads>;
            if (ad) {
              ad['data-ad-client'] = 'ca-pub-' + ad['pub']?.replace('ca-pub-', '');
              if (isDev()) {
                ad['data-adtest'] = 'on';
              }
              const ins = createIns(ad, options);
              if (ins) {
                console.log('apply ads to', el.tagName, el.className, '#' + el.id);
                insertAfter(ins, el);
              }
            }
          } else if (!isWidthAvailable) {
            console.error('width', el.tagName, 'is insufficient');
          } else if (bannedElement) {
            console.error(el.tagName, el.className, 'is banned from ads');
          }
        }
      }
    }
  }

  render(): React.ReactNode {
    return (
      <StrictMode>
        <Flowbite theme={{ theme }}>
          <FlowbiteContext>
            <SidebarProvider>
              <FlowbiteHeader />
              <BrowserRouter>
                <div id="flowbite-main-content">
                  <div className="flex flex-col md:flex-row dark:bg-gray-900 dark:text-white">
                    <div className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]" id="router-wrapper">
                      <Adsense
                        className="adsbygoogle"
                        data-ad-client="ca-pub-2188063137129806"
                        data-ad-slot="6233018586"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                      />
                      <Routes>
                        <Route path="/" element={<Homepage />} index />
                        <Route path="/test" element={<IndexMarkdown />} />
                        <Route path="/highlight" element={<HighlightLayout />} />
                        <Route path="/backend" element={<Anonymity2 />} />
                        <Route path="*" element={<NoMatch />} />
                      </Routes>
                      <Adsense
                        data-ad-format="autorelaxed"
                        data-ad-client="ca-pub-2188063137129806"
                        data-ad-slot="8135259201"
                      />
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
