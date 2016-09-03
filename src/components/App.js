// Pojedynczy komponent to klasa
export class App {

  //5/ W konstrukturze ustawiamy początkowy stan
  constructor () {
    this.state = {
      value: 5
    };
  }

  //3/ Pomocnicza funkcja modyfikująca stan
  increment () {
    this.state.value += 1;
  }

  //3/ Re-renderowanie polega na zastąpieniu elementu.
  rerender ($old) {
    $old.parentNode.replaceChild(this.render(), $old);
  }

  //18/ Rendering całości
  render () {
    const $div = document.createElement('div');
    const $h1 = document.createElement('h1');
    const $button = document.createElement('button');

    $h1.innerHTML = `Val: ${this.state.value}`;
    $button.innerHTML = '+';

    //4/ Po kliknięciu przycisku modyfikujemy stan i re-renderujemy.
    $button.addEventListener('click', () => {
      this.increment();
      this.rerender($div);
    });

    $div.appendChild($h1);
    $div.appendChild($button);
    return $div;
  }
}
