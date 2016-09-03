class BaseView {
  constructor (model) {
    this._model = model;
  }

  $el (selector, content) {
    const [elem, className] = selector.split('.');
    const $elem = document.createElement(elem || 'div');
    $elem.className = className || '';
    $elem.innerHTML = content || '';
    return $elem;
  }
}

// Klasa renderująca pojedynczą aktywnośc
export class Activity extends BaseView {
  //5/ Re-renderować będziemy tylko pojedynczą aktywność
  rerender ($old) {
    const $parent = $old.parentNode;
    $parent.replaceChild(this.render(), $old);
  }

  //42/ Metoda render zwraca element DOM reprezentujący ten widok
  render () {
    const activity = this._model;

    const $activity = this.$el('div.activity');

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
        this.rerender($activity);
        return;
      }

      const timeSpent = (new Date().getTime() - activity.started) / 1000 / 60;
      activity.timeSpent += timeSpent;
      activity.started = false;
      this.rerender($activity);
    });

    return [$img, $title, $desc, $button].reduce(($parent, $el) => {
      $parent.appendChild($el);
      return $parent;
    }, $activity);
  }
}

//12/ Modyfikujemy też widok wielu aktywności i uwspólniamy API
export class Activities extends BaseView {

  render () {
    const $activities = this.$el('div.activities');

    this._model.getActivities()
      .map(activity => new Activity(activity).render())
      .map($activity => $activities.appendChild($activity));

    return $activities;
  }
}
