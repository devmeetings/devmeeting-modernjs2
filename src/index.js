'use strict';

//27/ 3. Klasa widoku, podobna do tej z plikacji do aktywności.
class View {

  //3/ 4. W konstruktorze przyjmujemy selektor
  constructor (selector) {
    this.$el = document.querySelector(selector);
  }

  //5/ 5. Renderowanie pojedynczego zadania
  renderTask (task) {
    const $el = document.createElement('li');
    $el.textContent = task;
    return $el;
  }

  //6/ Pętla, w której renderujemy zadania
  render (tasks) {
    for (let idx in tasks) {
      let $task = this.renderTask(tasks[idx]);
      this.$el.appendChild($task);
    }
  }
}

//7/ 1. Mamy listę zadań, którą będziemy renderować.
const tasks = [
  'Learn JavaScript',
  'Learn ES6',
  'Learn React',
  '???',
  'Profit!'
];

// 2. Tworzymy nowy widok i przekazujemy taski
new View('.todos').render(tasks);
