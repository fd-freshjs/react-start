import React from 'react';
import NavLink from '../NavLink';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-list">
          <NavLink href="/">
            {/* children */}
            Home
          </NavLink>
          <NavLink href="/about">{/* children */}About</NavLink>
          <NavLink href="https://google.com">{/* children */}Google</NavLink>
        </ul>
      </nav>
    );
  }
}

export default Nav;
