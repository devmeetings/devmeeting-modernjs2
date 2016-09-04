import React from 'react';

//14/ Wydzielamy pojedyncze zadanie do osobnego komponentu
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
