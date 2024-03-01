import readme from '@root/readme.md';
import changelog from '@root/changelog.md';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import './homepage.scss';

const Homepage = () => {
  //   const [text, setText] = useState('');

  //   useEffect(() => {
  //     fetch(markdownFile)
  //       .then(response => response.text())
  //       .then(md => {
  //         setText(md);
  //       });
  //   }, []);

  return (
    <div id="homepage" className="markdown-body relative overflow-x-auto">
      <div className="mx-auto prose lg:prose-lg dark:prose-invert text-gray-500 dark:text-gray-400">
        <ReactMarkdown children={readme} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
        <div style={{ height: '2em' }}></div>
        <h2 className="text-center">CHANGELOG</h2>
        <ReactMarkdown children={changelog} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
      </div>
    </div>
  );
};

export default Homepage;