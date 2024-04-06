import envJson from '@root/_env.json';

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
  const merge = Object.assign(envJson, env);
  // console.log(env);
  const NODE_ENV = merge['NODE_ENV'];
  if ((!NODE_ENV || NODE_ENV == '') && merge['DEV']) return true;
  if (NODE_ENV) return /dev/i.test(NODE_ENV);
  return false;
}
