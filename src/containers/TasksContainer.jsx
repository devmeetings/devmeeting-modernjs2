import React from 'react';
import TasksList from '../components/TasksList';
import tasks from '../../data/tasks.json';

export default class TasksContainer extends React.Component {

  state = {
    now: 0,
    tasks: [],
    sortBy: 'name'
  };

  componentDidMount () {
    setTimeout(() => {
      this.handleSortTasks(tasks, this.state.sortBy);
    }, 500);

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

