import React from 'react';

import Task from './Task';

export default function TasksList ({now, tasks, sortBy}) {
  return (
    <div>
      <h1>Hello React!</h1>
      { 
        tasks.map((task, idx) => (
          <Task task={task} now={now} key={idx} />
        )) 
      }
      {/* Przekazujemy aktualne sortowanie niżej */}
      <SortingButtons sortBy={sortBy} />
    </div>
  );
}

//8/ Pomocniczy komponent wyświetlający przyciski do sortowania.
export function SortingButtons ({ sortBy }) {
  return (
    <div>
      <button disabled={sortBy === 'name'}>Sort by Name</button>
      <button disabled={sortBy === 'started'}>Sort by Start Time</button>
    </div>
  );
}

