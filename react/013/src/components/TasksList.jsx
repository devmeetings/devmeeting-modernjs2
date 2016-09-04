import React from 'react';

import Task from './Task';

export default function TasksList ({now, tasks, sortBy, onSortingChange}) {
  return (
    <div>
      <h1>Hello React!</h1>
      { 
        tasks.map((task, idx) => (
          <Task task={task} now={now} key={task.name} />
        )) 
      }
      {/* Przekazujemy aktualne sortowanie i callback niżej */}
      <SortingButtons {...{sortBy, onSortingChange}} />
    </div>
  );
}

export function SortingButtons ({ sortBy, onSortingChange }) {
  return (
    <div>
      {/* Przechwytujemy zdarzenie `onClick` przycisku i emitujemy `sortingChange` */}
      <button disabled={sortBy === 'name'} onClick={e => onSortingChange('name')}>
        Sort by Name
      </button>
      <button disabled={sortBy === 'started'} onClick={e => onSortingChange('started')}>
        Sort by Start Time
      </button>
    </div>
  );
}

