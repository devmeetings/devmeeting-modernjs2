'use strict';

//28/ Definicja modelu
const Model = {
  // Wykorzystujemy konwencję, aby oznaczyć pole prywatne
  _activities: [
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
  ],

  //3/ Na zewnątrz wystawiamy tylko funkcję, która zwraca kopię modelu
  getActivities: function () {
    return Model._activities.slice(0);
  }
};

const View = {
  //10/ Renderowanie aktywności (wykorzystujemy skróconą notację funkcji z ES6)
  renderActivities (model, $target) {
    // wyciągamy aktywności z modelu
    const activities = model.getActivities();

    //3/ Iterujemy i renderujemy widok
    for (let idx in activities) {
      const $activity = View._renderActivity(activities[idx]);
      $target.appendChild($activity);
    } 
  },

  // Renderowanie pojedynczej aktywności jest funkcją prywatną widoku
  _renderActivity (activity) {
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
};

//3/ Na koniec zostaje nam tylko uruchomienie renderowania.
let $activities = document.querySelector('.activities');
$activities.innerHTML = '';
View.renderActivities(Model, $activities);
