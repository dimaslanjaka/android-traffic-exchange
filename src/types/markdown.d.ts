// react-markdown
// declare module '*.md' {
//   const value: string; // markdown is just a string
//   export default value;
// }

// vite markdown plugin
declare module '*.md' {
  // "unknown" would be more detailed depends on how you structure frontmatter
  const attributes: Record<string, unknown>;

  // When "Mode.TOC" is requested
  const toc: { level: string; content: string }[];

  // When "Mode.HTML" is requested
  const html: string;

  const markdown: string;

  // When "Mode.RAW" is requested
  const raw: string;

  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
  import React from 'react';
  const ReactComponent: React.VFC;

  // When "Mode.Vue" is requested
  import { Component, ComponentOptions } from 'vue';
  const VueComponent: ComponentOptions;
  const VueComponentWith: (components: Record<string, Component>) => ComponentOptions;

  // Modify below per your usage
  export { ReactComponent, VueComponent, VueComponentWith, attributes, html, markdown, toc };
}
