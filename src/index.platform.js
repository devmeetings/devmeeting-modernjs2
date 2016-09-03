require('normalize.css!');
require('../styles/styles.css!');

import model from './Model';
import View from './View';

(new View(model, document.querySelector('.activities'))).renderActivities();
