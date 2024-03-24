export default function isHeadless() {
  return new Promise(resolve => {
    if (/HeadlessChrome/.test(window.navigator.userAgent)) {
      return resolve(true);
    }
    if (navigator.webdriver) {
      return resolve(true);
    }
    // isChrome is true if the browser is Chrome, Chromium or Opera
    // if(isChrome && !window.chrome) {
    //   return true;
    // }
    if (navigator.plugins && navigator.plugins.length === 0) {
      return resolve(true);
    }
    if (navigator.languages.length == 0) {
      return resolve(true);
    }
    navigator.permissions
      .query({ name: 'notifications' })
      .then(function (permissionStatus) {
        if (Notification.permission === 'denied' && permissionStatus.state === 'prompt') {
          return resolve(true);
        } else {
          return resolve(false);
        }
      })
      .catch(() => {
        return resolve(false);
      });
  });
}
