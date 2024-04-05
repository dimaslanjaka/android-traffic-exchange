import { html, markdown, toc } from './content.md';

export default function IndexMarkdown() {
  return (
    <main>
      <h2>HTML</h2>
      <pre>{html}</pre>
      <h2>ToC</h2>
      {toc.map((h, i) => (
        <li key={i}>
          {h.level} - {h.content}
        </li>
      ))}
      {/* <h2>ReactComponent</h2>
      <ReactComponent LinkToRepository={LinkToRepository} /> */}
      <h2>raw markdown</h2>
      <pre>{markdown}</pre>
    </main>
  );
}
