//4/ Importujemy reacta i komponent
import React from 'react';
import ReactDOM from 'react-dom';

import sinon from 'sinon';


import SortingButtons from './SortingButtons';

//6/ Dodajemy minimalny test dla komponentu - sprawdzamy czy poprawnie się renderuje
it('renders', () => {
  const $div = document.createElement('div');

  const spy = sinon.spy();

  ReactDOM.render(
    <SortingButtons sortBy={'name'} onSortingChange={spy} />,
    $div
  );

  $div.querySelector('button').trigger('click');

  expect(spy).toHaveBeenCalled();
  expect($div.querySelectorAll('button').length).toEqual(2);
});
