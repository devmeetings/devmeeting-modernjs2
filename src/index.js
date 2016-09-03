// Pozbywamy się 'use strict'; z naszych modułów. W babel jest dodawane domyślnie.
//- 'use strict';

//2/ Używamy `require` aby załadować moduły
require('normalize.css');
require('../styles/styles.css');

//2/ Ładujemy też nasz Model i Widok
require('./Model');
require('./View');

(new View(model, document.querySelector('.activities'))).renderActivities();
