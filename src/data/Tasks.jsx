import React, { PropTypes } from 'react';

export default class TasksData extends React.Component {

  static propTypes = {
    sortBy: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    onTasks: PropTypes.func.isRequired
  };

  //3/ Komponent, który używa kontekstu musi to zadeklarować
  static contextTypes = {
    serverUrl: PropTypes.string.isRequired
  };

  state = {
    allTasks: [],
  };

  //2/ Wykorzystujemy parametr z kontekstu aby odwołać się do odpowiedniego URLa
  componentDidMount () {
      fetch(this.context.serverUrl)
      .then(res => res.json())
      .then(tasks => {
        this.setState({
          allTasks: tasks
        });
        this.handleSortingAndSearching(tasks, this.props);
      });
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

