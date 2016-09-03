'use strict';

//3/ Greeter nie ma teraz funkcji greet
function Greeter(who) {
  this.who = who;
};

//3/ Tworzymy funkcję niezależnie i korzystamy z this
function greet() {
  return `Hello ${this.who}`;
}

const greeter1 = new Greeter('Tomasz');
const greeter2 = new Greeter('Marek');

// Wywołajmy funkcję `greet` w kontekście obiektu `greeter1`
let result = greet.call(greeter1);

// Możemy też użyć apply
result += ' ' + greet.apply(greeter2);

// bind utworzy nową funkcje, która ma związany kontekst
const greetMe = greet.bind({ who: 'Anonymous' });

// Możemy ją potem wywołac "bez kontekstu"
result += ' ' + greetMe();

document.querySelector('.greeter').innerHTML = result;
