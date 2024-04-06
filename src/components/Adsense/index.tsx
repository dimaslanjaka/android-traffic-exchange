import isDev from '@root/src/utils/isDev';
import * as utils from '@utils/index';
import React from 'react';
import * as conf from './utils/config';

interface AdsenseProperties extends Partial<conf.ParamsAdsByGoogle> {
  [key: string]: any;
  /** data-ad-format */
  format?: 'fluid' | 'auto' | string;
  /** data-ad-layout */
  layout?: 'in-article' | string;
  /** data-ad-layout-key */
  layoutKey?: string;
  /** data-full-width-responsive */
  widthResponsive?: 'true' | 'false' | '';
  /** style attribute */
  style?: React.CSSProperties;
  /** custom class name */
  className?: string;
  /** unique ID */
  uid?: string;
}

interface AdsenseState extends AdsenseProperties {
  currentSlot: Record<string, any>;
}

/**
 * Single adsense <ins/> tag
 *
 * @example
 * <Adsense
      data-ad-client="ca-pub-2188063137129806"
      data-ad-slot="6137665722"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
 */
class Adsense extends React.Component<AdsenseProperties, AdsenseState> {
  private defaults: AdsenseState = {
    slot: '',
    client: '',
    format: 'auto',
    style: {},
    currentSlot: {},
    layout: '',
    layoutKey: '',
    widthResponsive: '',
    className: '',
    channel: '',
    uid: ''
  };
  constructor(props: AdsenseProperties) {
    super(props);
    this.defaults = Object.assign(this.defaults, props);
    // replace default variable when defined attribute using prefix data-ad
    if (this.defaults.client == '') {
      if (this.defaults['data-ad-client']) {
        this.defaults.client = this.defaults['data-ad-client'];
      }
    }
    if (this.defaults.slot == '') {
      if (this.defaults['data-ad-slot']) {
        this.defaults.slot = this.defaults['data-ad-slot'];
      }
    }
    if (this.defaults.layout == '') {
      if (this.defaults['data-ad-layout']) {
        this.defaults.layout = this.defaults['data-ad-layout'];
      }
    }
    if (this.defaults.layoutKey == '') {
      if (this.defaults['data-ad-layout-key']) {
        this.defaults.layoutKey = this.defaults['data-ad-layout-key'];
      }
    }
    if (this.defaults.format == '') {
      if (this.defaults['data-ad-format']) {
        this.defaults.format = this.defaults['data-ad-format'];
      }
    }
    if (this.defaults.widthResponsive == '') {
      if (this.defaults['data-full-width-responsive']) {
        this.defaults.widthResponsive = this.defaults['data-full-width-responsive'];
      }
    }
    this.defaults.uid = utils.md5(JSON.stringify(this.defaults));
    // assign attributes into state
    this.state = this.defaults;
  }

  private initialized = false;

  componentDidMount(): void {
    if (this.initialized) return;
    this.initialized = true;
    if (!window.adsbygoogle) window.adsbygoogle = [] as any;
    if (!window.adsenseInitialized) {
      window.adsenseInitialized = true;
      const pub = this.defaults.client!.replace('ca-pub-', '');
      const pageAd = `//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pub}`;
      utils.loadJS(pageAd);
    }

    this.push();
  }

  push() {
    // console.log('ads unique id', this.state.uid);
    const find = document.querySelector(`ins[uid="${this.state.uid}"]`);
    if (find) {
      if (find.children.length > 0) {
        console.error('ads already initialized');
        return;
      }
    }
    try {
      if (typeof window === 'object') {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(conf.paramBuilder(this.props));
      }
    } catch {
      // Pass
    }
  }

  render() {
    const props = {
      uid: this.state.uid,
      'data-ad-slot': this.state.slot,
      'data-ad-client': 'ca-pub-' + (this.state.client || '').replace('ca-pub-', ''),
      'data-ad-format': this.state.format,
      style: { display: 'block', ...this.state.style },
      className: utils
        .arrayDedupe(['adsbygoogle'].concat((this.state.className || '').split(' ')))
        //filter empty
        .filter(str => str.length > 0)
        // rejoin
        .join(' ')
    } as Record<string, any>;
    if (this.state.widthResponsive) {
      props['data-full-width-responsive'] = this.state.widthResponsive;
    }
    // console.log('adsense is dev', isDev());
    if (isDev()) {
      // enable adsense test on development mode
      props['data-adtest'] = 'on';
      props['google-adtest'] = 'on';
      props['style']['border'] = '1px solid red';
    }

    return <ins {...props}></ins>;
  }
}

export default Adsense;
