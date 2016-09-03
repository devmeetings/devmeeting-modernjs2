'use strict';

// Tworzy nam się globalna zmienna z modelem
const Model = {
  _activities: [
    {
      id: 3,
      alt: 'Bicycle',
      name: 'Cycling',
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
  ],

  getActivities() {
    return Model._activities.slice(0);
  }
};
