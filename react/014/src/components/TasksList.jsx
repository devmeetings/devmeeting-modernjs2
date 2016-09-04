import React from 'react';

import Task from './Task';

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

//12/ Wyświetlamy komponent do filtrowania.
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

export function SortingButtons ({ sortBy, onSortingChange }) {
  return (
    <div>
      <button disabled={sortBy === 'name'} onClick={e => onSortingChange('name')}>
        Sort by Name
      </button>
      <button disabled={sortBy === 'started'} onClick={e => onSortingChange('started')}>
        Sort by Start Time
      </button>
    </div>
  );
}

