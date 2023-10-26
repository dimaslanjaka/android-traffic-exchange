import React from 'react';
import { insertScript, removeResources, removeScript, shallowComparison } from './utils';
import { CALLBACKS, EMBED_SCRIPT_ID, THREAD_ID } from './constants';

// source https://github.com/disqus/disqus-react/blob/master/src/DiscussionEmbed.jsx

interface Props {
  shortname: string;
  config: { identifier: string; url: string; title: string } & Partial<{
    language: string;
    categoryID: string;
    remoteAuthS3: string;
    apiKey: string;
    preData: (...args: any[]) => any;
    preInit: (...args: any[]) => any;
    onInit: (...args: any[]) => any;
    onReady: (...args: any[]) => any;
    afterRender: (...args: any[]) => any;
    preReset: (...args: any[]) => any;
    onIdentify: (...args: any[]) => any;
    beforeComment: (...args: any[]) => any;
    onNewComment: (...args: any[]) => any;
    onPaginate: (...args: any[]) => any;
    sso: {
      name: string;
      button: string;
      icon: string;
      url: string;
      logout: string;
      profile_url: string;
      width: string;
      height: string;
    };
  }>;
}

export class DisqusEmbed extends React.Component<Props> {
  componentDidMount() {
    if (typeof window !== 'undefined' && window.disqus_shortname && window.disqus_shortname !== this.props.shortname)
      this.cleanInstance();
    this.loadInstance();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props === nextProps) return false;
    return shallowComparison(this.props, nextProps);
  }

  componentDidUpdate(nextProps) {
    if (this.props.shortname !== nextProps.shortname) this.cleanInstance();
    this.loadInstance();
  }

  componentWillUnmount() {
    this.cleanInstance();
  }

  loadInstance() {
    const doc = window.document;
    if (window && window.DISQUS && doc.getElementById(EMBED_SCRIPT_ID)) {
      window.DISQUS.reset({
        reload: true,
        config: this.getDisqusConfig(this.props.config)
      });
    } else {
      window.disqus_config = this.getDisqusConfig(this.props.config);
      window.disqus_shortname = this.props.shortname;
      insertScript(`https://${this.props.shortname}.disqus.com/embed.js`, EMBED_SCRIPT_ID, doc.body);
    }
  }

  cleanInstance() {
    const doc = window.document;
    removeScript(EMBED_SCRIPT_ID, doc.body);
    if (window && window.DISQUS) window.DISQUS.reset({});

    try {
      delete window.DISQUS;
    } catch (error) {
      window.DISQUS = undefined;
    }
    const disqusThread = doc.getElementById(THREAD_ID);
    if (disqusThread) {
      while (disqusThread.hasChildNodes()) disqusThread.removeChild(disqusThread.firstChild);
    }
    removeResources();
  }

  getDisqusConfig(config: Props['config']) {
    return function () {
      this.page.identifier = config.identifier;
      this.page.url = config.url;
      this.page.title = config.title;
      this.page.category_id = config.categoryID;
      this.page.remote_auth_s3 = config.remoteAuthS3;
      this.page.api_key = config.apiKey;
      if (config.sso) this.sso = config.sso;
      if (config.language) this.language = config.language;

      CALLBACKS.forEach(callbackName => {
        this.callbacks[callbackName] = [config[callbackName]];
      });
    };
  }

  render() {
    const { shortname: _, config: __, ...rest } = this.props;
    return <div {...rest} id={THREAD_ID} />;
  }
}
