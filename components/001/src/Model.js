// Można eksportować zarówno domyślny eksport jak i poszczególne klasy.
export class Model {
  constructor (activities) {
    this._activities = activities;
  }

  getActivities () {
    return this._activities.slice(0);
  }
}

export default new Model([
  {
    id: 3,
    alt: 'Bicycle',
    name: 'Cycling',
    started: new Date().getTime(),
    timeSpent: 120
  },
  {
    id: 7,
    alt: 'Swimmer',
    name: 'Swimming',
    timeSpent: 60
  },
  {
    id: 9,
    alt: 'Runners',
    name: 'Running',
    timeSpent: 30
  }
]);

