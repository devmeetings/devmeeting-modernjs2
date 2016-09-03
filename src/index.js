require('normalize.css');
require('../styles/styles.css');

//2/ Ładujemy model i widok i przypisujemy wyeksportowane obiekty.
const model = require('./Model');
const View = require('./View');

(new View(model, document.querySelector('.activities'))).renderActivities();
