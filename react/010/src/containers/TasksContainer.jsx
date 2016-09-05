import React from 'react';
// Importujemy komponent odpowiedzialny za renderowanie
import TasksList from '../components/TasksList';
import tasks from '../data/tasks.json!';

//28/ Ten komponent odpowiada za zarządzanie stanem całej aplikacji.
export default class TasksContainer extends React.Component {

  state = {
    now: 0,
    tasks: []
  };

  componentDidMount () {
    setTimeout(() => {
      this.setState({ tasks });
    }, 500);

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

