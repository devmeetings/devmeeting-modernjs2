//2/ Tworzymy nowy element h1
var $h1= document.createElement('h1');
$h1.textContent = 'Created in <strong>JS</strong>';

//2/ Znajdujemy element body i dodajemy mu dziecko
var $body = document.querySelector('body');
$body.appendChild($h1);

