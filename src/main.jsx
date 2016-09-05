import React from 'react';
import {render} from 'react-dom';

import tasks from '../data/tasks.json';
// Importujemy komponent z osobnego pliku
import Task from './components/Task';

class Tasks extends React.Component {

  state = {
    now: 0,
    tasks: []
  };

  componentDidMount () {
    //5/ Pobieramy zadania na starcie
    setTimeout(() => {
      this.setState({ tasks });
    }, 500);

    this.interval = setInterval(() => this.setState({ now: Date.now() }), 1000);
  }

  componentWillUnMount () {
    clearInterval(this.interval);
  }

  render () {
    const { now, tasks } = this.state;

    return (
      <div>
        <h1>Hello React!</h1>
        {/*4/ Korzystamy z zaimportowanego komponentu w JSX */}
        { tasks.map((task, idx) =>(
          <Task task={task} now={now} key={idx} />
        )) }
      </div>
    );
  }

}

render(<Tasks />, document.querySelector('#app'));

