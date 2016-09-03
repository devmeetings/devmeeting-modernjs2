'use strict';

const Greeter = {
  who: 'Tomasz',
  greet () {
    return 'Hello ' + this.who;
  },

  renderGreet () {
    const result = this.greet();

    const $greet = document.querySelector('.greeter');
    $greet.innerHTML = result;
    console.log(result);
  },

  addListener () {
    const $btn = document.querySelector('.greeter__trigger');
    // To nie zadziała - ten sam problem co wcześniej.
    //- $btn.addEventListener('click', this.renderGreet);

    //3/ Spróbujmy w ten sposób:
    $btn.addEventListener('click', function () {
      console.log(this);
      this.renderGreet();
    });
  }
};

Greeter.addListener();
