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
    tasks
      // Weź tylko te zadania, które mają więcej niż 3 znaki
      .filter(task => task.length > 3)
      // Stwórz z nich elementy drzewa DOM
      .map(task => this.renderTask(task))
      // I wpisz do `this.$el`
      .map($task => this.$el.appendChild($task))
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
