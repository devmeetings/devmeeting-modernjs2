import React from 'react';
import {render} from 'react-dom';

//3/ Upraszczamy główny plik, który tylko renderuje całość.
import TasksContainer from './containers/TasksContainer';
render(<TasksContainer />, document.querySelector('#app'));

