require('normalize.css');
require('../styles/styles.css');

import model from './Model';
import {Activities} from './Activities/Activities';

document.querySelector('.activities').innerHTML = '';
document.querySelector('.activities').appendChild(
  new Activities(model).render()
);
