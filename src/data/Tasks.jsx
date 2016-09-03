import React, { PropTypes } from 'react';

export default class TasksData extends React.Component {

  static propTypes = {
    sortBy: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    onTasks: PropTypes.func.isRequired
  };

  state = {
    allTasks: [],
  };

  //10/ Podczas montowania pobieramy dane.
  componentDidMount () {
      fetch('data/tasks.json')
      .then(res => res.json())
      .then(tasks => {
        this.setState({
          allTasks: tasks
        });
        this.handleSortingAndSearching(tasks, this.props);
      });
  }

  componentWillReceiveProps (newProps) {
    //3/ Musimy się upewnić, że cokolwiek się zmieniło! React będzie wołał tę funkcję przy każdej potencjalnej zmianie.
    if (newProps.search !== this.props.search || newProps.sortBy !== this.props.sortBy) {
      this.handleSortingAndSearching(this.state.allTasks, newProps);
    }
  }

  handleSortingAndSearching (tasks, { sortBy, search }) {
    search = search.toLowerCase();
    tasks  = tasks.filter(task => {
        if (!search) {
          return true;
        }
        return task.name.toLowerCase().indexOf(search) !== -1;
    });
    tasks.sort((a, b) => a[sortBy] < b[sortBy]);

    // Zamiast ustawiać stan wołamy callback.
    this.props.onTasks(tasks);
  }

  //3/ I nic nie renderujemy.
  render () {
    return null;
  }

}

