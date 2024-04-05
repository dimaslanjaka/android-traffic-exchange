/**
 * is current environment is development ?
 * @returns
 */
export default function isDev() {
  let env: Record<string, any>;
  if (typeof process == 'object' && typeof process.env == 'object') {
    env = process.env;
  } else {
    // vite
    env = import.meta.env;
  }
  return /dev/i.test(env['NODE_ENV'] || '');
}
