import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='nav-right nav-menu'>
        <Link className='nav-item' to='/'>My Polls</Link>
      </div>
    );
  }
};

export default Menu;
