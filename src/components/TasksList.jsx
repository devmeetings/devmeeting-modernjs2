import React from 'react';

import Task from './Task';

//12/ Tworzymy "głupi" komponent, ktory nie ma własnego stanu.
export default function TasksList ({now, tasks}) {
  return (
    <div>
      <h1>Hello React!</h1>
      { 
        tasks.map((task, idx) => (
          <Task task={task} now={now} key={idx} />
        )) 
      }
    </div>
  );
}

