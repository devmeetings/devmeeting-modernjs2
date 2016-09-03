require('normalize.css');
require('../styles/styles.css');

//4/ Tak wygląda import domyślny (default export):
// const model = require('./Model');
// const View = require('./View');
import model from './Model';
import View from './View';

(new View(model, document.querySelector('.activities'))).renderActivities();
