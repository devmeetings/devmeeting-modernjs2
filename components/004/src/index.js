//2/ Importujemy biblioteki
import React from 'react';
import {render} from 'react-dom';

// Importujemy komponent aplikacji...
import {App} from './components/App';

// ...i renderujemy
render(<App />, document.querySelector('.app'));
