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

  //3/ Na dowolną zmianę po prostu zapisujemy nowy stan.
  onTasks = (tasks) => this.setState({ tasks });
  onSortingChange = (sortBy) => this.setState({ sortBy });
  onSearchingChange = (search) => this.setState({ search });

  render () {
    const { search, sortBy } = this.state;
    return (
      <div>
        {/* Tworzymy data-component przekazując aktualne filtrowanie/sortowanie i callback na zadania */}
        <TasksData search={search} sortBy={sortBy} onTasks={this.onTasks} />
        {/*4/ Renderujemy listę */}
        <TasksList {...this.state}
          onSortingChange={this.onSortingChange}
          onSearchingChange={this.onSearchingChange}
          />
      </div>
    );
  }

}

