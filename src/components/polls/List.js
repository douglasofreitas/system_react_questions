import React, { Component } from 'react';
import axios from 'axios';

import Loader from '../Loader';
import NewPollCard from './NewPollCard';
import PollCard from './PollCard';

class PollsList extends Component {
  constructor () {
    super();

    this.state = {
      polls: []
    };

    axios.get('http://localhost:1337/questions')
    .then((response) => {
      this.setState({ polls: response.data });
    })
    .catch(err => {
      if (err) {
        console.log(err)
      } else {
        return false;
      }
    });

    this.updateTimer = setInterval(() => {
      axios.get('http://localhost:1337/questions')
      .then((response) => this.setState({ polls: response.data }))
      .catch(err => {
        if (err) {
          console.log(err)
        } else {
          return false;
        }
      });
    }, 60000);
  }

  componentWillUnmount () {
    clearInterval(this.updateTimer);
  }

  render () {
    return (
      <div className='columns is-multiline'>

        {this.state.polls.length === 0 &&
          <Loader />
        }

        {!!this.state.polls.length &&
          <div className='column is-4'>
            <NewPollCard />
          </div>
        }

        {this.state.polls.map((poll, index) => (
          <div key={index} className='column is-4'>
            <PollCard key={index}
              question={poll.question}
              options={poll.options} />
          </div>
        ))}
      </div>
    );
  }
}

export default PollsList;
