// Importujemy BaseView...
import {BaseView} from '../View';

// ...i importujemy style
import './Activity.css';

export class Activity extends BaseView {

  rerender ($old) {
    const $parent = $old.parentNode;
    $parent.replaceChild(this.render(), $old);
  }

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

