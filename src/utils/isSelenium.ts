/**
 * detect selenium
 * @returns
 */
export default function isSelenium(): Promise<{ selenium: boolean }> {
  return new Promise(resolve => {
    const documentDetectionKeys = [
      '__webdriver_evaluate',
      '__selenium_evaluate',
      '__webdriver_script_function',
      '__webdriver_script_func',
      '__webdriver_script_fn',
      '__fxdriver_evaluate',
      '__driver_unwrapped',
      '__webdriver_unwrapped',
      '__driver_evaluate',
      '__selenium_unwrapped',
      '__fxdriver_unwrapped'
    ];
    const windowDetectionKeys = [
      '_phantom',
      '__nightmare',
      '_selenium',
      'callPhantom',
      'callSelenium',
      '_Selenium_IDE_Recorder'
    ];
    for (const windowDetectionKey in windowDetectionKeys) {
      const windowDetectionKeyValue = windowDetectionKeys[windowDetectionKey];
      if (window[windowDetectionKeyValue] || windowDetectionKeyValue in window) {
        return resolve({ selenium: true });
      }
    }
    for (const documentDetectionKey in documentDetectionKeys) {
      const documentDetectionKeyValue = documentDetectionKeys[documentDetectionKey];
      if (window['document'][documentDetectionKeyValue] || documentDetectionKeyValue in document) {
        return resolve({ selenium: true });
      }
    }
    for (const documentKey in window['document']) {
      if (documentKey.match(/\$[a-z]dc_/) && window['document'][documentKey]['cache_']) {
        return resolve({ selenium: true });
      }
    }
    if (
      window['external'] &&
      window['external'].toString() &&
      window['external'].toString()['indexOf']('Sequentum') !== -1
    )
      return resolve({ selenium: true });
    if (window['document']['documentElement']['getAttribute']('selenium')) return resolve({ selenium: true });
    if (window['document']['documentElement']['getAttribute']('webdriver')) return resolve({ selenium: true });
    if (window['document']['documentElement']['getAttribute']('driver')) return resolve({ selenium: true });
    if (window.document.documentElement.getAttribute('webdriver')) {
      return resolve({ selenium: true });
    }
    if ('callPhantom' in window || '_phantom' in window) {
      if (window.callPhantom || window._phantom) {
        return resolve({ selenium: true });
      }
    }
    if ('webdriver' in navigator) {
      if (navigator.webdriver == true) {
        return resolve({ selenium: true });
      }
    }
    if ('userAgentData' in navigator) {
      const udata = JSON.stringify(navigator.userAgentData);
      return resolve({ selenium: udata.includes('Not=A?Brand') });
    }
    return resolve({ selenium: false });
  });
}
