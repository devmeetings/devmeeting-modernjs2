'use strict';

class BaseView {
  $el (selector, content) {
    const [elem, className] = selector.split('.');
    const $el = document.createElement(elem || 'div');
    $el.className = className || '';
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

    return [$img, $title, $desc, $button].reduce(($parent, $el) => {
      $parent.appendChild($el);
      return $parent;
    }, this.$el('div.activity'));
  }
}

window.View = View;
