import { projectConfig } from '../project';

const url = new URL(projectConfig.url);

/**
 * get permalink of tag term
 * @param term
 * @returns
 */
export function getTagPermalink(term: string) {
  url.pathname = `${projectConfig.tag_dir}/${term}`;
  return String(url);
}

/**
 * get permalink of category term
 * @param term
 * @returns
 */
export function getCategoryPermalink(term: string) {
  url.pathname = `${projectConfig.category_dir}/${term}`;
  return String(url);
}

/**
 * ger permalink of archive
 * @param term
 * @returns
 */
export function getArchivePermalink(term?: string) {
  url.pathname = `${projectConfig.category_dir}/${term}`;
  return String(url);
}
