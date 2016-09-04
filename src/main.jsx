import React from 'react';
import {render} from 'react-dom';

class Tasks extends React.Component {

  state = {
    now: 0,
    tasks: []
  };

  componentDidMount () {
    //5/ Pobieramy zadania na starcie
    fetch('data/tasks.json')
      .then(res => res.json())
      .then(tasks => this.setState({
        tasks
      }));

    // Musimy odświeżać aktualny czas...
    this.interval = setInterval(() => this.setState({ now: Date.now() }), 1000);
  }

  //3/ ... i pamiętać o tym, żeby po sobie posprzątać
  componentWillUnMount () {
    clearInterval(this.interval);
  }

  render () {
    const { now, tasks } = this.state;

    return (
      <div>
        <h1>Hello React!</h1>
        {/* Renderowanie pojedynczego zadania przenosimy do osobnej funkcji */}
        { tasks.map((task, idx) => this.renderTask(task, now, idx)) }
      </div>
    );
  }

  renderTask (task, now, idx) {
    const isActive = !task.finished;
    const time = ((task.finished || now) - task.started) / 1000 / 60;
    const name = task.name; 

    return (
      <div className={`task ${isActive ? 'active' : ''}`} key={idx}>
        <span>{name} </span>
        <span>{time.toFixed(1)} min</span>
      </div>   
    );
  }
}

render(<Tasks />, document.querySelector('#app'));

