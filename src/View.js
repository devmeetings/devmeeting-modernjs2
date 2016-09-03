export class BaseView {
  constructor (model) {
    this._model = model;
  }

  $el (selector, content) {
    const [elem, className] = selector.split('.');
    const $elem = document.createElement(elem || 'div');
    $elem.className = className || '';
    $elem.innerHTML = content || '';
    return $elem;
  }
}
