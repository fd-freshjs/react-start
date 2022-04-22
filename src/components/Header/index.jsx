import React from 'react';
import Nav from '../Nav';
import NavLink from '../NavLink';
import Avatar from '../Avatar/index';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="logo">
          <h1>{this.props.logoText}</h1>

          <Nav />

          <NavLink href="/profile" simpleLink={true}>
            <Avatar src={this.props.user.image} alt={this.props.user.name} />
          </NavLink>
      </header>
    );
  }
}

export default Header;
