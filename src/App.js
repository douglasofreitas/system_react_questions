import React, { Component } from 'react';
import Header from './components/Header/Header';
import PollsList from './components/polls/List';

class App extends Component {
  render () {
    return (
      <main>
        <Header />

        <section className='page container'>
          <h1 className='title is-1'>My Polls</h1>
          <PollsList />
        </section>
      </main>
    );
  }
}

export default App;
