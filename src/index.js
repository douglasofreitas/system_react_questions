import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import 'bulma/css/bulma.css';
import './index.css';

import App from './App';
import InsertPoll from './components/polls/Insert';

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/polls/insert' component={InsertPoll} />
    </div>
  </Router>,
  document.getElementById('root')
);
