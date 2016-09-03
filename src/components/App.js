import React from 'react';

// Pojedynczy komponent w React to klasa rozszerzająca React.Component
export class App extends React.Component {

  //5/ W konstrukturze ustawiamy początkowy stan
  constructor () {
    super();
    this.state = {
      value: 5
    };
  }

  //5/ Pomocnicza funkcja modyfikująca stan
  increment () {
    this.setState({
      value: this.state.value + 1
    });
  }

  //8/ Rendering całości
  render () {
    return (
      <div>
        <h1>Val: {this.state.value}</h1>
        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }
}
