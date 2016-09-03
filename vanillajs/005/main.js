var $h1= document.createElement('h1');
// Modyfikujemy zawartość tekstową
$h1.textContent = 'Created in <strong>JS</strong>';

// Modyfikujemy atrybut class lub zmieniamy propsa className
$h1.setAttribute('class', 'color');
$h1.className = 'color';

// Wygodniejsze API
$h1.classList.add('shadow');

// 2/ Dodajemy do drzewa DOM
var $body = document.querySelector('body');
$body.appendChild($h1);

