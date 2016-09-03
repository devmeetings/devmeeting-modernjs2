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
    //5/ Zamiast iterować w pętli używamy `map`
    tasks
      .map(function (task) {
        return this.renderTask(task);
      }, this)
      .map($task => this.$el.appendChild($task));
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
