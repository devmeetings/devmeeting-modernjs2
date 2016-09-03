'use strict';

function Greeter(who) {
  this.who = who;
  this.greet = function () {
    return `Hello ${this.who}`;
  };
};

const greeter1 = new Greeter('Tomasz');
const greeter2 = new Greeter('Marek');

//2/ Zobaczmy jak obiekty wyglądają w konsoli
console.dir(greeter1);
console.dir(greeter2);

// I porównajmy funkcje greet.
const result = 'Różne: ' + (greeter1.greet !== greeter2.greet);

document.querySelector('.greeter').innerHTML = result;
