import React from 'react';

import TasksList from '../components/TasksList';
import TasksData from '../data/Tasks';

export default class TasksContainer extends React.Component {

  state = {
    now: 0,
    tasks: [],
    search: '',
    sortBy: 'name'
  };

  componentDidMount () {
    this.interval = setInterval(() => this.setState({ now: Date.now() }), 1000);
  }

  componentWillUnMount () {
    clearInterval(this.interval);
  }

  onTasks = (tasks) => this.setState({ tasks });
  onSortingChange = (sortBy) => this.setState({ sortBy });
  onSearchingChange = (search) => this.setState({ search });

  render () {
    const { search, sortBy } = this.state;
    return (
      <div>
        <TasksData search={search} sortBy={sortBy} onTasks={this.onTasks} />
        <TasksList {...this.state}
          onSortingChange={this.onSortingChange}
          onSearchingChange={this.onSearchingChange}
          />
      </div>
    );
  }

}

