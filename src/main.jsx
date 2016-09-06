import React from 'react';
import {render} from 'react-dom';

import {Router, Route, browserHistory, Link} from 'react-router';

import UrlProvider from './providers/UrlProvider';
import TasksContainer from './containers/TasksContainer';

//12/ Komponent App z linkiem do zadań
const App = (props) => {
  return (
    <div>
      <div>
        <Link to="/tasks">Tasks</Link>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

//10/ Dokładamy definicję routowania
render(
  <UrlProvider url="data/tasks.json">
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="tasks" component={TasksContainer} />
      </Route>
    </Router>
  </UrlProvider>,
  document.querySelector('#app')
);
