require('normalize.css!');
require('../styles/styles.css!');

import {default as model, Model} from './Model';
import {Activities} from './View';

document.querySelector('.activities').innerHTML = '';
document.querySelector('.activities').appendChild(
  new Activities(model).render()
);
