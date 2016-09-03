import React, { PropTypes } from 'react';
// Importujemy paczkę
import classNames from 'classnames';

export default function Task (props) {
  const { task, now } = props;

  const isActive = !task.finished;
  const time = ((task.finished || now) - task.started) / 1000 / 60;
  const name = task.name; 

  //3/ Definujemy klasy i warunki, kiedy powinny być dodane
  const classes = classNames('task', {
    active: isActive
  });

  return (
    <div className={classes}>
      <span>{name} </span>
      <span>{time.toFixed(1)} min</span>
    </div>   
  );
}

Task.propTypes = {
  now: PropTypes.number.isRequired,
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    started: PropTypes.number.isRequired,
    finished: PropTypes.number
  }).isRequired
};
