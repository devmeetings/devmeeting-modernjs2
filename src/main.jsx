import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {

  state = { now: 0 };

  componentDidMount() {
    setInterval(() => {
      // Wywołanie `setState` zmusza reacta do wywłoania `render`
      this.setState({ now: Date.now() });
    }, 100);
  }

  // Funkcja `render` powinna być "lekka" bo będzie często wywoływana
  render () {
    const now = this.state.now;

    return (
      <div>
        <h1>Hello React!</h1>
        <input type='text' placeholder='some input' />
        <p>Now {now}</p>
      </div>
    );
  }

  /*
   * A tak wygląda reprezentacja tego komponentu:
   * {
   *   type: 'div',
   *   props: null,
   *   children: [{ type: 'h1',...}, ...]
   * }
   */
}

render(<App />, document.querySelector('#app'));
