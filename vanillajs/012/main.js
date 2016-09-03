'use strict';

// Możemy zadeklarować stałą (stała referencja, wciąż mutowalna - odpowiednik final z Javy)
const activities = [
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

// Lub zmienną z zasięgiem blokowym (a nie funkcyjnym)
let $activities = document.querySelector('.activities');
$activities.innerHTML = '';
for (let idx in activities) {
  let activity = activities[idx];
  let $activity = activityView(activity); 
  $activities.appendChild($activity);
}

// Czy ta zmienna powinna być tutaj dostępna?
console.log(activity);

function activityView(activity) {
  const $img = document.createElement('img');
  $img.className = 'activity__img';
  $img.height = 250;
  $img.width = 250;
  $img.alt = activity.alt;
  $img.src = 'https://xplatform.org/ext/lorempixel/250/250/sports/' + activity.id;

  const $title = document.createElement('h3');
  $title.className = 'activity__name';
  $title.textContent = activity['name'];

  const $desc = document.createElement('p');
  $desc.className = 'activity__description';
  $desc.innerHTML = 'Time spent: <strong>' + activity.timeSpent + ' min</strong>';

  const $button = document.createElement('button');
  $button.className = 'activity__button--paused';
  $button.innerHTML = '&#9654; Start';

  $button.addEventListener('click', function () {
    alert('Rozpoczynam trackowanie: ' + activity.name);
    console.log(activity);
  });

  const $activity = document.createElement('div');
  $activity.className = 'activity';
  $activity.appendChild($img);
  $activity.appendChild($title);
  $activity.appendChild($desc);
  $activity.appendChild($button);

  return $activity;
}
