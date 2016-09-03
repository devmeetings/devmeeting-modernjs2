// 6/ Obiekt w JS to `Object := HashMap<String, Object> | Primitive`
var activity = {
  id: 3,
  alt: 'Bicycle',
  name: 'Cycling',
  timeSpent: 120,
};

var $img = document.createElement('img');
$img.className = 'activity__img';
$img.height = 250;
$img.width = 250;
// Do propertiesów obiektu odwołujemy się po kropce
$img.alt = activity.alt;
$img.src = 'https://xplatform.org/ext/lorempixel/250/250/sports/' + activity.id;

var $title = document.createElement('h3');
$title.className = 'activity__name';
// Lub równoważnie przez []
$title.textContent = activity['name'];

var $desc = document.createElement('p');
$desc.className = 'activity__description';
$desc.innerHTML = 'Time spent: <strong>' + activity.timeSpent + '</strong>';

var $button = document.createElement('button');
$button.className = 'activity__button--paused';
$button.innerHTML = '&#9654; Start';

var $activity = document.createElement('div');
$activity.className = 'activity';
$activity.appendChild($img);
$activity.appendChild($title);
$activity.appendChild($desc);
$activity.appendChild($button);

var $activities = document.querySelector('.activities');
$activities.innerHTML = '';
$activities.appendChild($activity);
