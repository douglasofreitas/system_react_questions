import React from 'react';
import { Link } from 'react-router-dom';

const component = () => (
  <div className='card poll-card'>
    <header className='card-header'>
      <span className='card-header-title'>Add a new Poll</span>
    </header>
    <div className='card-content'>
      <p>Do you need a new poll? Use the button below!</p>
      <Link className='button is-primary is-large button-add-poll'
        to='/polls/insert'>
        Add Poll
      </Link>
    </div>
  </div>
);

export default component;
