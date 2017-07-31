import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header className='nav'>
        <nav className='container'>
          <div className='nav-left'>
            <Link className='nav-item is-large' to='/'>
              <strong>UPX</strong>
            </Link>
          </div>

          <Menu />
        </nav>
      </header>
    )
  };
}

export default Header;
