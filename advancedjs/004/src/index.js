'use strict';

const Greeter = {
  who: 'Tomasz',
  greet () {
    return 'Hello ' + this.who;
  },
  
  //7/ Dodajemy funkcję, która potrafi wyrenderować greet.
  renderGreet () {
    const result = this.greet();

    const $greet = document.querySelector('.greeter');
    $greet.innerHTML = result;
    console.log(result);
  }
};

// Dodajemy listener do przycisku
const $btn = document.querySelector('.greeter__trigger');
// Będziemy po prostu wołać `Greeter.renderGreet`
$btn.addEventListener('click', Greeter.renderGreet);
