'use strict';

//9/ Stwórzmy sobie funkcję, która przypisuje coś do this.
function Greeter(who) {
  this.who = who;
  this.greet = function () {
    return `Hello ${this.who}`;
  };
};

//2/ Stwórzmy dwie instancje.
const greeter1 = new Greeter('Tomasz');
const greeter2 = new Greeter('Marek');

// I wywołajmy je.
const result = greeter1.greet() + ' ' + greeter2.greet();

//  `new` tworzy nowy obiekt, i wywołuje
//- funkcję `Greeter` w kontekście tego obiektu.

document.querySelector('.greeter').innerHTML = result;
