'use strict';

//7/ Stwórzmy obiekt, który będzie witał osobę.
const Greeter = {
  who: 'Tomasz',
  greet () {
    // Spróbujmy zmienić Greeter na this
    return 'Hello ' + Greeter.who;
  }
}

// Uruchamiamy greetera.
const result = Greeter.greet();

//3/ Wyświetlmy wynik w DOM
const $greet = document.querySelector('.greeter');
$greet.innerHTML = result;
console.log(result);
