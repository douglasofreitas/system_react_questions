import React from 'react';
import { Link } from 'react-router-dom';

const component = ({questionId, question, options}) => (
  <div className='card poll-card'>
    <header className='card-header'>
      <span className='card-header-title'>{question}</span>
    </header>
    <div className='card-content'>
      <ul className='poll-card-options'>
        {options.map((choice, index) => (
          <li key={index}>{choice}</li>
        ))}
      </ul>
      <br /><br /> 
      <Link className='button is-primary button-add-poll'
        to={'/polls/'+questionId}>
        Edit Poll
      </Link>
    </div>
  </div>
);

export default component;
