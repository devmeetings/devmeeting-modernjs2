//2/ Importujemy potrzebne komponenty
import {BaseView} from '../View';
import {Activity} from '../Activity/Activity';

import './Activities.css';

export class Activities extends BaseView {

  render () {
    const $activities = this.$el('div.activities');

    this._model.getActivities()
      .map(activity => new Activity(activity).render())
      .map($activity => $activities.appendChild($activity));

    return $activities;
  }
}
