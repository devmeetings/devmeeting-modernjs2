import React from 'react';
import {render} from 'react-dom';

import UrlProvider from './providers/UrlProvider';
import TasksContainer from './containers/TasksContainer';

//6/ Wrapujemy naszą apkę w kontekst (provider)
render(
  <UrlProvider url="data/tasks.json">
    <TasksContainer />
  </UrlProvider>,
  document.querySelector('#app')
);
