var activities = [
  {
    id: 3,
    alt: 'Bicycle',
    name: 'Cycling',
    timeSpent: 120
  },
  {
    id: 7,
    alt: 'Swimmer',
    name: 'Swimming',
    timeSpent: 60
  },
  {
    id: 9,
    alt: 'Runners',
    name: 'Running',
    timeSpent: 30
  }
];

var $activities = document.querySelector('.activities');
$activities.innerHTML = '';

for (var idx in activities) {
  var activity = activities[idx];

  var $img = document.createElement('img');
  $img.className = 'activity__img';
  $img.height = 250;
  $img.width = 250;
  $img.alt = activity.alt;
  $img.src = 'https://xplatform.org/ext/lorempixel/250/250/sports/' + activity.id;

  var $title = document.createElement('h3');
  $title.className = 'activity__name';
  $title.textContent = activity['name'];

  var $desc = document.createElement('p');
  $desc.className = 'activity__description';
  $desc.innerHTML = 'Time spent: <strong>' + activity.timeSpent + ' min</strong>';

  var $button = document.createElement('button');
  $button.className = 'activity__button--paused';
  $button.innerHTML = '&#9654; Start';

  //5/ Tworzymy anonimową funkcję, która obsłuży zdarzenie `click`.
  //-- Sprawdź czy wyświetlają się dobre wartości.
  $button.addEventListener('click', function () {
    alert('Rozpoczynam trackowanie: ' + activity.name);
    console.log(activity);
  });

  var $activity = document.createElement('div');
  $activity.className = 'activity';
  $activity.appendChild($img);
  $activity.appendChild($title);
  $activity.appendChild($desc);
  $activity.appendChild($button);
  
  $activities.appendChild($activity);
}
