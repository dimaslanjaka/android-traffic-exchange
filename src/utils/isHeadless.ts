export default function isHeadless(): Promise<boolean> {
  const log = (...args: any[]) => console.log('isHeadless', ...args);
  return new Promise(resolve => {
    if (/HeadlessChrome/.test(window.navigator.userAgent)) {
      log('HeadlessChrome in useragent');
      return resolve(true);
    }
    if (navigator.webdriver) {
      log('webdriver in navigator');
      return resolve(true);
    }
    // isChrome is true if the browser is Chrome, Chromium or Opera
    // if(isChrome && !window.chrome) {
    //   return true;
    // }
    if (navigator.plugins && navigator.plugins.length === 0) {
      log('navigator plugins 0');
      return resolve(true);
    }
    if (navigator.languages.length == 0) {
      log('navigator languages 0');
      return resolve(true);
    }
    navigator.permissions
      .query({ name: 'notifications' })
      .then(function (permissionStatus) {
        if (Notification.permission === 'denied' && permissionStatus.state === 'prompt') {
          log('notification permission denied');
          return resolve(true);
        } else {
          return resolve(false);
        }
      })
      .catch(() => {
        return resolve(false);
      })
      .finally(() => {
        return resolve(false);
      });
  });
}
