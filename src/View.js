'use strict';

//14/ Klasa bazowa z metodą pomocniczą do tworzenia elementów.
class BaseView {
  //16/ Tworzy element na podstawie selektora i zawartości
  $el (selector, content) {
    // Selector postaci `div.class` rozbity jest na dwie zmienne.
    const [elem, className] = selector.split('.');
    // Jeżeli nie ma nic przed kropką to zakładamy diva
    const $el = document.createElement(elem || 'div');
    // Może być sam element, więc pomijamy klasę
    $el.className = className || '';
    // Content też jest opcjonalny.
    $el.innerHTML = content || '';
    return $el;
  }
}

class View extends BaseView {
  constructor (model, $target) {
    super();
    this._model = model;
    this._$target = $target;
  }

  //7/ Korzystamy z `map` aby wyrenderować elementy
  renderActivities () {
    this._$target.innerHTML = '';

    this._model.getActivities()
      .map(activity => this._renderActivity(activity))
      .map($activity => this._$target.appendChild($activity));
  }

  _renderActivity (activity) {
    const $img = this.$el('img.activity__img');
    $img.height = 250;
    $img.width = 250;
    $img.alt = activity.alt;
    $img.src = 'https://xplatform.org/ext/lorempixel/250/250/sports/' + activity.id;

    const $title = this.$el(
      'h3.activity__name',
      activity.name
    );
    const $desc = this.$el(
      'p.activity__description',
      `Time spent: <strong>${activity.timeSpent.toFixed(1)} min</strong>`
    );
    const $button = this.$el(
      'button.activity__button--paused',
      activity.started ? '&#9646;&#9646 Pause' : '&#9654; Start'
    );

    $button.addEventListener('click', () => {
      if (!activity.started) {
        activity.started = new Date().getTime();
        this.renderActivities();
        return;
      }

      const timeSpent = (new Date().getTime() - activity.started) / 1000 / 60;
      activity.timeSpent += timeSpent;
      activity.started = false;
      this.renderActivities();
    });

    //5/ Korzystamy z reduce, aby stworzyć element i dodać do niego wszystkie dzieci.
    return [$img, $title, $desc, $button].reduce(($parent, $el) => {
      $parent.appendChild($el);
      return $parent;
    }, this.$el('div.activity'));
  }
}
