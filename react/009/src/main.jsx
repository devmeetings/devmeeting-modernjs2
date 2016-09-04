import React from 'react';
import {render} from 'react-dom';

// Importujemy komponent z osobnego pliku
import Task from './components/Task';

class Tasks extends React.Component {

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

