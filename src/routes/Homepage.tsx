import { markdown as changelogMd } from '@root/changelog.md';
import { markdown as readmeMd } from '@root/readme.md';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import './homepage.scss';

class Homepage extends React.Component {
  render(): React.ReactNode {
    return (
      <main className="markdown-body">
        <div className="mx-auto prose lg:prose-lg dark:prose-invert text-gray-500 dark:text-gray-400">
          <ReactMarkdown children={readmeMd} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
          <div style={{ height: '2em' }}></div>
          <h2 className="text-center">CHANGELOG</h2>
          <ReactMarkdown children={changelogMd} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
        </div>
      </main>
    );
  }
}

export default Homepage;
