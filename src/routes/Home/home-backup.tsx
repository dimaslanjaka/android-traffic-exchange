/// <reference path='../../types/image-jpg.d.ts' />

import Image from '@components/Image';
import { randomStr } from '@root/src/utils';
import { projectConfig, routeConfig } from '@src/project';
import { Label, Spinner, TextInput } from 'flowbite-react';
import moment from 'moment-timezone';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './home.scss';

interface State {
  keyword: string;
  limit: number;
  loading: boolean;
}

class Home extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      keyword: '',
      limit: parseInt(String(projectConfig.index_generator.per_page)) || 10,
      loading: false
    };
  }

  componentDidMount(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const total = window.innerHeight + window.scrollY;
    if (total >= document.body.scrollHeight - 20) {
      this.loadMoreItems();
    }
  };

  loadMoreItems = () => {
    if (this.state.loading) {
      return;
    }
    this.setState({ loading: true });
    const limit = this.state.limit + 2;
    setTimeout(() => {
      this.setState({ limit, loading: false });
    }, 1000);
    // this.getPhotoList();
  };

  getPosts() {
    return routeConfig
      .filter(o => {
        const kw = this.state.keyword;
        if (kw.length > 0) {
          return new RegExp(kw, 'gmi').test(o.title + ' ' + o.description);
        }
        return true;
      })
      .map((o, i) => {
        const { meta = { date: {}, updated: {} } } = o;
        const fallbackSrc = 'https://picsum.photos/600/400/?random=' + i;
        const thumb = 'og_image' in meta ? meta.og_image.content : fallbackSrc;
        const tags = [] as string[];
        for (const key in meta) {
          if (key.startsWith('tag')) tags.push((meta as any)[key].content);
        }
        const published = 'date' in meta ? meta.date.content : new Date();
        const modified = 'updated' in meta ? meta.updated.content : new Date();

        return { ...o, thumb, published, tags, fallbackSrc, modified };
      });
  }

  dateFormat(str: string, pattern = '') {
    return moment(str)
      .tz(projectConfig.timezone || 'Asia/Jakarta')
      .format(pattern);
  }

  render() {
    return (
      <main id="homepage">
        <div className="w-full sm:fit mb-2">
          <div className="mb-2 block">
            <Label htmlFor="searchTerm" value="Search Post" />
          </div>
          <TextInput
            icon={BiSearch}
            id="searchTerm"
            placeholder="keywords"
            required
            type="text"
            onChange={e => {
              this.setState({ keyword: e.target.value });
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 mb-2">
          {this.getPosts()
            .slice(0, this.state.limit)
            .map((o, _i) => {
              const {
                thumb,
                fallbackSrc,
                published,
                modified,
                permalink = '/post/' + randomStr(),
                title = 'no title',
                description = 'no description'
              } = o;
              return (
                <a
                  href={permalink}
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 post-item"
                  title={title}
                  key={'link-' + title + permalink}
                >
                  <Image
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg bg-white dark:bg-gray-300"
                    src={thumb}
                    alt={title}
                    fallbackSrc={fallbackSrc}
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{o.title}</h5>
                    <div className="flex justify-between text-gray-900 dark:text-gray-200 text-xs">
                      <div title={'published ' + published}>{moment(published).format('DD/MM/YYYY HH:mm:ss')}</div>
                      <div title={'updated ' + modified}>{moment(modified).format('DD/MM/YYYY HH:mm:ss')}</div>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.substring(0, 200)}</p>
                  </div>
                </a>
              );
            })}
        </div>

        {this.state.loading && (
          <div className="text-center m-2">
            <Spinner aria-label="Extra small spinner example" size="lg" />
          </div>
        )}
      </main>
    );
  }
}

export default Home;
