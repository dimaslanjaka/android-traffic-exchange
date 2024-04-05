/**
 * fix url protocol
 * @param url
 * @returns
 */
export default function urlOf(url: string) {
  let protocol = window.location.protocol;
  if (protocol.startsWith('file:')) protocol = 'http:';
  return protocol + url.replace(/^https?:/, '');
}
