require('normalize.css');
require('../styles/styles.css');

import {default as model, Model} from './Model';
// Używamy {} aby zaimportować nie-domyślne eksporty.
import {View} from './View';

console.dir(Model);

(new View(model, document.querySelector('.activities'))).renderActivities();
