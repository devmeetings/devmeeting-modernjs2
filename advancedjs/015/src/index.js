'use strict';

class View {

  constructor (selector) {
    this.$el = document.querySelector(selector);
  }

  renderTask (task) {
    const $el = document.createElement('li');
    $el.textContent = task;
    return $el;
  }

  render (tasks) {
    //5/ Przypiszmy wszystkie zadania jako innerHTML
    this.$el.innerHTML = tasks
      .filter(task => task.length > 3)
      .map(task => this.renderTask(task))
      // Konkatenujemy wszystkie zadania razem zaczynając od pustego stringa
      .reduce((memo, $task) => memo + $task.outerHTML, '');
  }
}

const tasks = [
  'Learn JavaScript',
  'Learn ES6',
  'Learn React',
  '???',
  'Profit!'
];

new View('.todos').render(tasks);
