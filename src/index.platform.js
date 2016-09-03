require('normalize.css!');
require('../styles/styles.css!');

const model = require('./Model');
const View = require('./View');

(new View(model, document.querySelector('.activities'))).renderActivities();
