// 3. Zachowanie tego kodu jest zależne trybu strict
//- 'use strict';

const Greeter = {
  who: 'Tomasz',
  greet () {
    return 'Hello ' + this.who;
  }
}

// 1. Zapisujemy funkcję do zmiennej...
const justGreet = Greeter.greet;

// 2. ... i wywołujemy - nie ma nic przed kropką!
const result = justGreet();

const $greet = document.querySelector('.greeter');
$greet.innerHTML = result;
console.log(result);
