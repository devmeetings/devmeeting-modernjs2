// Importujemy React (potrzebne do przetwarzania JSX).
import React from 'react';
// React może być używany także poza przeglądarką, ale my potrzebujemy `react-dom`.
import {render} from 'react-dom';

//5/ Najprostszym komponentem jest po prostu funkcja.
function App() {
  const now = new Date().getTime();
  return (
    <div>
      <h1>Hello React!</h1>
      <input type='text' placeholder='some input' />
      <p>Now: {now}</p>
    </div>
  );
}

// Musimy określić gdzie wyrenderujemy nasz pierwszy komponent.
render(<App />, document.querySelector('#app'));
