import { fs } from 'sbg-utility';
import paths from '../config/paths';
import React from 'react';

interface ReturnJSX {
  scripts: JSX.Element[];
  /**
   * clean html string
   */
  html: string;
}

interface ReturnString {
  scripts: JSX.Element[];
  /**
   * clean html string
   */
  html: string;
}

/**
 * get bundled webpack js from dist/index.html
 * @returns return jsx element array
 */
function getDistScripts(): ReturnJSX;
/**
 * get bundled webpack js from dist/index.html
 * @param jsx
 * @returns return jsx element array
 */
function getDistScripts(jsx: true): ReturnJSX;
/**
 * get bundled webpack js from dist/index.html
 * @param jsx
 * @returns return script html string array
 */
function getDistScripts(jsx: false): ReturnString;

/**
 * get bundled webpack js from dist/index.html
 * @param jsx return jsx element
 * @returns
 */
function getDistScripts(jsx = true) {
  const generatedIndex = paths.build + '/index.html';
  const regex = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
  let m: RegExpExecArray | null = null;
  const scripts = [] as (JSX.Element | string)[];
  let html = '';

  if (fs.existsSync(generatedIndex)) {
    html = fs.readFileSync(generatedIndex, 'utf-8');
    // get script bundles
    while ((m = regex.exec(html)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      if (typeof m[0] === 'string' && m[0].length > 0 && !m[0].includes('/page/main.js')) {
        const srcRegEx = /src=["'](.*?)["']/g;
        const source = srcRegEx.exec(m[0]);
        if (source) {
          if (jsx) {
            scripts.push(<script src={source[1]} key={source[1]} defer={true}></script>);
          } else {
            scripts.push(`<script defer src="${source[1]}"></script>`);
          }
        }

        // clean script tags from html
        html = html.replace(m[0], '');
      }
    }
  }

  return { scripts, html };
}

export default getDistScripts;
