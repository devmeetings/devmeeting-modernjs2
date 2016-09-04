import React from 'react';
import {render} from 'react-dom';

// 1. Komponent może być też klasą rozszerzającą `React.Component`...
class App extends React.Component {

  //3/ 4. Dzięki stage-0 możemy definiować pola bez użycia konstruktura
  state = {
    now: 0
  };

  //6/ 5. Uaktualniamy stan cyklicznie
  componentDidMount() {
    setInterval(() => {
      this.setState({ now: Date.now() });
    }, 100);
  }

  //12/ 2. ...zawierającą funkcję `render`
  render () {
    // 3. Wartość czasu odczytujemy ze "stanu" komponentu
    const now = this.state.now;

    return (
      <div>
        <h1>Hello React!</h1>
        <input type='text' placeholder='some input' />
        <p>Now: {now}</p>
      </div>
    );
  }
}

render(<App />, document.querySelector('#app'));

