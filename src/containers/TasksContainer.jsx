import React from 'react';
import TasksList from '../components/TasksList';
import tasks from '../../data/tasks.json';

export default class TasksContainer extends React.Component {

  state = {
    now: 0,
    allTasks: [],
    tasks: [],
    search: '',
    sortBy: 'name'
  };

  componentDidMount () {
    setTimeout(() => {
      //3/ Musimy zapamiętać listę wszystkich zadań.
      this.setState({
        allTasks: tasks
      });

      //2/ Oraz ustawić przefiltrowaną i posortowana listę
      const { sortBy, search } = this.state;
      this.handleSortingAndSearching(tasks, sortBy, search);
    }, 500);

    this.interval = setInterval(() => this.setState({ now: Date.now() }), 1000);
  }

  componentWillUnMount () {
    clearInterval(this.interval);
  }

  onSortingChange = (newSorting) => {
    this.setState({
      sortBy: newSorting
    });

    const { allTasks, search } = this.state;
    this.handleSortingAndSearching(allTasks, newSorting, search);
  };

  onSearchingChange = (newSearching) => {
    const search = newSearching.toLowerCase();
    this.setState({ search });

    const { allTasks, sortBy } = this.state;
    this.handleSortingAndSearching(allTasks, sortBy, search);
  };

  handleSortingAndSearching (tasks, sortBy, search) {
    //6/ Najpierw przefiltrujmy
    tasks  = tasks.filter(task => {
        if (!search) {
          return true;
        }
        return task.name.toLowerCase().indexOf(search) !== -1;
    });
    // Sortujemy
    tasks.sort((a, b) => a[sortBy] < b[sortBy]);

    // I wstawiamy do stanu
    this.setState({ tasks: tasks });
  }

  render () {
    return (
      <TasksList {...this.state}
        onSortingChange={this.onSortingChange}
        onSearchingChange={this.onSearchingChange}
        />
    );
  }

}

