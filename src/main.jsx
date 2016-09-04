import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {

  state = {
    now: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ now: Date.now() });
    }, 100);
  }

  //8/ JSX to po prostu przyjemniejsza składnia na poniższy zapis
  render () {
    const now = this.state.now;

    return React.createElement('div', null,
      React.createElement('h1', null, 'Hello React!'),
      React.createElement('input', {type: 'text', placeholder: 'some input'}),
      React.createElement('p', null, `Now: ${now}`),
    );
  }
}

render(
  React.createElement(App, null),
  document.querySelector('#app')
);

