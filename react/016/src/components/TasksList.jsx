import React from 'react';

import Task from './Task';
import SortingButtons from './SortingButtons';

export default function TasksList ({ now, tasks, sortBy, search, onSortingChange, onSearchingChange }) {
  return (
    <div>
      <h1>Hello React!</h1>
      <Filtering search={search} onSearchingChange={onSearchingChange} />
      { 
        tasks.map((task, idx) => (
          <Task task={task} now={now} key={task.name} />
        )) 
      }
      <SortingButtons {...{sortBy, onSortingChange}} />
    </div>
  );
}

export function Filtering({ search, onSearchingChange }) {
  return (
    <div>
      <input
        type='text'
        value={search}
        placeholder="Search list..."
        onChange={ev => onSearchingChange(ev.target.value)}
        />
    </div>
  );
}
