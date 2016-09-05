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

  handleSortTasks (tasks, sortBy) {
    // Posortujmy listę zadań
    tasks.sort((a, b) => a[sortBy] < b[sortBy]);
    // I ustawmy nowy stan
    this.setState({ tasks });
  }

  render () {
    return (
      <TasksList {...this.state} />
    );
  }

}

