import('./generate').then(loaded => {
  // populate routes.json
  loaded.generateRouteHtml();
  // populate tmp/static folder
  // loaded.generateRouteHtmlFromTmp();
});
