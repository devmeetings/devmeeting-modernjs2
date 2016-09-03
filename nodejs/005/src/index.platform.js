require('normalize.css!');
require('../styles/styles.css!');

require('./Model');
require('./View');

(new View(model, document.querySelector('.activities'))).renderActivities();
