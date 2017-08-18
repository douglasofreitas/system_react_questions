import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import 'bulma/css/bulma.css';
import './index.css';

import App from './App';
import InsertPoll from './components/polls/Insert';
import UpdatePoll from './components/polls/Update';

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/polls/insert' component={InsertPoll} />
      <Route exact path='/polls/:id(\d+)' component={UpdatePoll} />
    </div>
  </Router>,
  document.getElementById('root')
);
