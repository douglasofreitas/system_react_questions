import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Header from '../Header/Header';
import QuickAdd from '../QuickAdd/Quick-Add';
import axios from 'axios';

class UpdatePoll extends Component {
  constructor () {
    super();

    this.state = {
      id: 0,
      question: '',
      options: []
    };

    this.update = this.update.bind(this);
    this.change = this.change.bind(this);
  }

  componentWillMount(){
    const id = this.props.match.params.id;

    axios.get('http://localhost:1337/questions/'+id)
    .then((response) => {
      this.setState({ id: response.data.id });
      this.setState({ question: response.data.question });
      this.setState({ options: response.data.options });
    })
    .catch(err => {
      if (err) {
        console.log(err)
      } else {
        return false;
      }
    });
  }

  update (event) {
    event.preventDefault();

    const question = this.state.question;
    const id = this.state.id;
    const options = this.refs.QuickAdd.state.items;
    const data = {
      question: question,
      options: options,
    };

    axios.put('http://localhost:1337/questions/'+id, data)
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
          <h1 className='title is-1'>Update Poll</h1>

          <div className='columns'>
            <form className='card column is-half is-offset-one-quarter' onSubmit={this.update}>
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
                  <QuickAdd ref='QuickAdd' options={this.state.options} />
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

export default withRouter(UpdatePoll);
