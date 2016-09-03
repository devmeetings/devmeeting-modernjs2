'use strict';

// Globalna zmienna z widokiem
const View = {
  renderActivities (model, $target) {
    const activities = model.getActivities();

    for (let idx in activities) {
      const $activity = View._renderActivity(activities[idx]);
      $target.appendChild($activity);
    } 
  },

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
