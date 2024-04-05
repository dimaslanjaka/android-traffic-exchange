import { markdown as changelogMd } from '@root/changelog.md';
import { markdown as readmeMd } from '@root/readme.md';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import './homepage.scss';

const Homepage = () => {
  return (
    <main id="homepage" className="markdown-body relative overflow-x-auto">
      <div className="mx-auto prose lg:prose-lg dark:prose-invert text-gray-500 dark:text-gray-400">
        <ReactMarkdown children={readmeMd} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
        <div style={{ height: '2em' }}></div>
        <h2 className="text-center">CHANGELOG</h2>
        <ReactMarkdown children={changelogMd} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
      </div>
    </main>
  );
};

export default Homepage;
