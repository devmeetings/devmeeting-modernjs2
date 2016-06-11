import React from 'react';
import TasksList from '../components/TasksList';

export default class TasksContainer extends React.Component {

  state = {
    now: 0,
    tasks: [],
    sortBy: 'name'
  };

  componentDidMount () {
    fetch('data/tasks.json')
      .then(res => res.json())
      .then(tasks => {
        this.handleSortTasks(tasks, this.state.sortBy);
      });

    this.interval = setInterval(() => this.setState({ now: Date.now() }), 1000);
  }

  componentWillUnMount () {
    clearInterval(this.interval);
  }

  // Dodajemy listener zdarzenia
  onSortingChange = (newSorting) => {
    //3/ Ustawiamy nowy stan sortowania...
    this.setState({
      sortBy: newSorting
    });

    // ...i sortujemy zadania.
    this.handleSortTasks(this.state.tasks, newSorting);
  };

  handleSortTasks (tasks, sortBy) {
    tasks.sort((a, b) => a[sortBy] < b[sortBy]);
    // Kopiujemy tablicę, żeby wymusić zmianę.
    this.setState({ tasks: [...tasks] });
  }

  render () {
    return (
      <TasksList {...this.state} onSortingChange={this.onSortingChange} />
    );
  }

}

