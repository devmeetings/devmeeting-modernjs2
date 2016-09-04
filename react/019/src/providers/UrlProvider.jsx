import React from 'react';

export default class UrlProvider extends React.Component {

  //3/ Musimy powiedzieć jakiego typu będzie parametr przekazywany przez kontekst...
  static childContextTypes = {
    serverUrl: React.PropTypes.string.isRequired
  };

  //4/ ... oraz jakich propsów oczekujemy
  static propTypes = {
    url: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  };

  //5/ Ta funkcja zostanie wywołana aby pobrać kontekst.
  getChildContext () {
    return {
      serverUrl: this.props.url
    };
  }

  //3/ Standardowo renderujemy po prosu dzieci.
  render () {
    return this.props.children;
  }
}
