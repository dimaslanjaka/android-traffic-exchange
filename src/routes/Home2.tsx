import { ReactComponent } from '@root/readme.md';

export default function Home2() {
  return (
    <div id="homepage" className="markdown-body relative overflow-x-auto">
      <div className="mx-auto prose lg:prose-lg dark:prose-invert text-gray-500 dark:text-gray-400">
        <ReactComponent />
        <div style={{ height: '2em' }}></div>
        <h2 className="text-center">CHANGELOG</h2>
        {/* <ReactMarkdown children={changelog} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} /> */}
      </div>
    </div>
  );
}
