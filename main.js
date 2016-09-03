// 6/ Tworzymy obrazek i nadajemy mu odpowiednie propsy
var $img = document.createElement('img');
$img.className = 'activity__img';
$img.height = 250;
$img.width = 250;
$img.alt = 'Bicycle';
$img.src = 'https://xplatform.org/ext/lorempixel/250/250/sports/3/';

// 3/ Nazwę aktywności
var $title = document.createElement('h3');
$title.className = 'activity__name';
$title.textContent = 'Cycling';

// 3/ Opis
var $desc = document.createElement('p');
$desc.className = 'activity__description';
$desc.innerHTML = 'Time spent: <strong>120 min</strong>';

// 3/ Przycisk
var $button = document.createElement('button');
$button.className = 'activity__button--paused';
$button.innerHTML = '&#9654; Start';

//6/ Składamy w całość...
var $activity = document.createElement('div');
$activity.className = 'activity';
$activity.appendChild($img);
$activity.appendChild($title);
$activity.appendChild($desc);
$activity.appendChild($button);

// 2/ ...i dodajemy do drzewa DOM
var $activities = document.querySelector('.activities');
$activities.innerHTML = '';
$activities.appendChild($activity);
