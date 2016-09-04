import React from 'react';
// Importujemy komponent odpowiedzialny za renderowanie
import TasksList from '../components/TasksList';

//28/ Ten komponent odpowiada za zarządzanie stanem całej aplikacji.
export default class TasksContainer extends React.Component {

  state = {
    now: 0,
    tasks: []
  };

  componentDidMount () {
    fetch('data/tasks.json')
      .then(res => res.json())
      .then(tasks => this.setState({
        tasks
      }));

    this.interval = setInterval(() => this.setState({ now: Date.now() }), 1000);
  }

  componentWillUnMount () {
    clearInterval(this.interval);
  }

  render () {
    //3/ Propsy możemy przekazać z użyciem operatora `spread`.
    return (
      <TasksList {...this.state} />
    );
  }

}

