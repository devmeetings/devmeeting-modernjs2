'use strict';

//37/ Korzystamy z 'Module Pattern' aby upublicznić tylko instancję
const model = (() => {

  //9/ Klasa modelu
  class Model {
    constructor (activities) {
      this._activities = activities;
    }

    getActivities () {
      return this._activities.slice(0);
    }
  }
  
  // Zwracamy instancję modelu
  return new Model([
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
})();

