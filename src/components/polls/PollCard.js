import React from 'react';

const component = ({question, options}) => (
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
    </div>
  </div>
);

export default component;
