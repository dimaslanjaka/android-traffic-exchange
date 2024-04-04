/**
 * get current mode by indicating class dark
 * @returns
 */
export const getModeByClass = () => document.documentElement.classList.contains('dark');

/**
 * get current theme mode by reading local storage
 * @returns dark or light
 */
export const getModeByLocalstorage = () => (localStorage.getItem('color-theme') === 'dark' ? 'dark' : 'light');

/**
 * set theme mode
 * @param mode
 */
export function setMode(mode: 'dark' | 'light') {
  // console.log('set theme mode', mode);
  localStorage.setItem('color-theme', mode);
  if (mode === 'dark') {
    if (document.documentElement.classList.contains('dark')) document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

/**
 * enable auto dark mode
 */
export function darkModeAuto() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    setMode('dark');
  } else {
    setMode('light');
  }
}

/**
 * toggle dark mode
 * @returns current mode
 */
export function toggleDarkMode() {
  if (getModeByClass()) {
    setMode('light');
    return 'light';
  } else {
    setMode('dark');
    return 'dark';
  }
}

/**
 * load flowbite stylesheets
 */
// export async function FlowbiteCss() {
//   await import(/* webpackChunkName: "flowbite-css" */ './style.scss');
//   await import(/* webpackChunkName: "flowbite-main-css" */ '@assets/css/main.scss');
// }
