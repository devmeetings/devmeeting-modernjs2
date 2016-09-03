'use strict';

const View = {
  _model: null,
  _$target: null,

  //4/ Inicjalizacja widoku (na razie singleton)
  init (model, $target) {
    View._model = model;
    View._$target = $target;
  },

  renderActivities () {
    const activities = View._model.getActivities();

    View._$target.innerHTML = '';
    for (let idx in activities) {
      const $activity = View._renderActivity(activities[idx]);
      View._$target.appendChild($activity);
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
    $desc.innerHTML = 'Time spent: <strong>' + activity.timeSpent.toFixed(1) + ' min</strong>';

    const $button = document.createElement('button');
    $button.className = 'activity__button--paused';
    $button.innerHTML = activity.started ? '&#9646;&#9646 Pause' : '&#9654; Start';

    //17/ Na kliknięcie przycisku
    $button.addEventListener('click', function () {
      //7/ Jeśli aktywność nie jest trackowana
      if (!activity.started) {
        // Zapisz czas rozpoczęcia
        activity.started = new Date().getTime();
        // Przerenderuj widok
        View.renderActivities();
        return;
      }

      //3/ W przeciwnym razie oblicz ile spędzono nad aktywnością
      const timeSpent = (new Date().getTime() - activity.started) / 1000 / 60;
      activity.timeSpent += timeSpent;
      activity.started = false;
      // i przerenderuj widok
      View.renderActivities();
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
