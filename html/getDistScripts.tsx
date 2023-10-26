import { fs } from 'sbg-utility';
import paths from '../config/paths';
import React from 'react';
import { JSDOM } from 'jsdom';

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
  // const regex = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
  // let m: RegExpExecArray | null = null;
  const scripts = [] as (JSX.Element | string)[];
  const src = [] as string[];
  let html = '';

  if (fs.existsSync(generatedIndex)) {
    html = fs.readFileSync(generatedIndex, 'utf-8');
    // get script bundles
    // while ((m = regex.exec(html)) !== null) {
    //   if (m.index === regex.lastIndex) {
    //     regex.lastIndex++;
    //   }
    //   if (typeof m[0] === 'string' && m[0].length > 0 && !m[0].includes('/page/main.js')) {
    //     const srcRegEx = /src=["'](.*?)["']/g;
    //     const source = srcRegEx.exec(m[0]);
    //     // prevent duplicate script
    //     if (source && !src.includes(source[1])) {
    //       if (jsx) {
    //         scripts.push(<script src={source[1]} key={source[1]} defer={true}></script>);
    //       } else {
    //         scripts.push(`<script defer src="${source[1]}"></script>`);
    //       }
    //       src.push(source[1]);
    //     }

    //     // clean script tags from html
    //     html = html.replace(m[0], '');
    //   }
    // }

    // html = html.replace(/(<script\b([^>]*)>)([\s\S]*?)(<\/script\b[^>]*>)/gi, (_, _open, attr) => {
    //   console.log(attr);
    //   return '';
    // });

    const dom = new JSDOM(html);
    dom.window.document.querySelectorAll('script').forEach(el => {
      const attr = getAttrObj(el);
      if (attr.src && !src.includes(attr.src)) {
        if (html.includes(el.outerHTML)) {
          src.push(attr.src);
          if (jsx) {
            scripts.push(<script key={attr.src} {...attr}></script>);
          } else {
            scripts.push(`<script defer src="${attr.src}"></script>`);
          }
        }
        // remove script tag
        html = html.replace(el.outerHTML, '');
      } else {
        throw new Error('outer script tag not found with src ' + attr.src);
      }
    });
    // free memory
    dom.window.close();
  }

  return { scripts, html };
}

/**
 * get element attributes as object
 * @param element
 * @returns
 */
function getAttrObj(element: Element) {
  const attrsObj = {} as Record<string, any>;
  const attrs = [...element.attributes];
  for (const attr of attrs) {
    attrsObj[attr.name] = attr.value;
  }
  return attrsObj;
}

export default getDistScripts;
