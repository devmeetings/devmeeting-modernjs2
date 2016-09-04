// Importujemy `PropTypes`...
import React, { PropTypes } from 'react';

export default function Task (props) {
  const { task, now } = props;

  const isActive = !task.finished;
  const time = ((task.finished || now) - task.started) / 1000 / 60;
  const name = task.name; 

  return (
    <div className={`task ${isActive ? 'active' : ''}`}>
      <span>{name} </span>
      <span>{time.toFixed(1)} min</span>
    </div>   
  );
}

//10/ ...i definiujemy wymagane typy.
Task.propTypes = {
  now: PropTypes.number.isRequired,
  // Definiujemy jak ma wyglądać obiek zadania
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    started: PropTypes.number.isRequired,
    // To pole jest opcjonalne:
    finished: PropTypes.number
  }).isRequired
};
