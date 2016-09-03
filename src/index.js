'use strict';

const Greeter = {
  who: 'Tomasz',
  greet () {
    return 'Hello ' + this.who;
  }
}

//3/ Drugi greeter nie ma funkcji `greet`...
const Greeter2 = {
  who: 'Marek'
};

// ..ale możemy mu wstawić.
Greeter2.greet = Greeter.greet;

// Uruchamiamy drugiego greetera.
const result = Greeter2.greet();

const $greet = document.querySelector('.greeter');
$greet.innerHTML = result;
console.log(result);
