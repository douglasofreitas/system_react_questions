import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Header from '../Header/Header';
import QuickAdd from '../QuickAdd/Quick-Add';
import axios from 'axios';

class InsertPoll extends Component {
  constructor () {
    super();

    this.state = {
      question: ''
    };

    this.insert = this.insert.bind(this);
    this.change = this.change.bind(this);
  }

  insert (event) {
    event.preventDefault();

    const question = this.state.question;
    const options = this.refs.QuickAdd.state.items;
    const data = {
      question: question,
      options: options,
    };

    axios.post('http://localhost:1337/questions', data)
    .then(res => this.props.history.push('/'))
    .catch(err => {
      if (err) {
        console.log(err)
      } else {
        return false;
      }
    });
  }

  change (event) {
    this.setState({
      question: event.target.value
    });
  }

  render () {
    return (
      <main>
        <Header />
        <section className='page container'>
          <h1 className='title is-1'>Add Poll</h1>

          <div className='columns'>
            <form className='card column is-half is-offset-one-quarter' onSubmit={this.insert}>
              <div className='card-content'>
                <div className='field'>
                  <label className='label'
                    htmlFor='question'>
                    Question
                  </label>
                  <input className='input is-expanded'
                    autoFocus
                    type='text'
                    name='question'
                    value={this.state.question}
                    onChange={this.change}
                    required />
                </div>

                <div className='field'>
                  <QuickAdd ref='QuickAdd' />
                </div>

                <div className='control'>
                  <button className='button'>Send</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(InsertPoll);
