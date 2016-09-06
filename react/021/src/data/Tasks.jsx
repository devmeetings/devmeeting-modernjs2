import React, { PropTypes } from 'react';

import tasks from '../../data/tasks.json!';

export default class TasksData extends React.Component {

  static propTypes = {
    sortBy: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    onTasks: PropTypes.func.isRequired
  };

  static contextTypes = {
    serverUrl: PropTypes.string.isRequired
  };

  state = {
    allTasks: [],
  };

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        allTasks: tasks
      });
      this.handleSortingAndSearching(tasks, this.props);
    }, 1500);
  }

  componentWillReceiveProps (newProps) {
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

    this.props.onTasks(tasks);
  }

  render () {
    return null;
  }

}

