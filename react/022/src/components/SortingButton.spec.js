//4/ Importujemy reacta i komponent
import React from 'react';
import ReactDOM from 'react-dom';

import SortingButtons from './SortingButtons';

//6/ Dodajemy minimalny test dla komponentu - sprawdzamy czy poprawnie się renderuje
it('renders', () => {
  ReactDOM.render(
    <SortingButtons sortBy={'name'} onSortingChange={() => false} />,
    document.createElement('div')
  );
});
