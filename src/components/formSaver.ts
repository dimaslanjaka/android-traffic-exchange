import JqueryFormSaver from 'jquery-form-saver';

export function saveForms() {
  // auto save input,textarea,select elements
  const elements = document.querySelectorAll('input,textarea,select');
  // debug to console.log
  const show_debug = false;
  if (show_debug) console.log(elements);
  elements.forEach(function (el, _key, _parent) {
    new JqueryFormSaver(el, { debug: show_debug, method: 'vanilla' });
  });
}
