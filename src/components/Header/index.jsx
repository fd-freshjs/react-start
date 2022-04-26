import React from 'react';
import Nav from '../Nav';
import NavLink from '../NavLink';
import Avatar from '../Avatar/index';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
          <h1 className="logo">{this.props.logoText}</h1>

          <Nav />

          <div className="user-info">
            <span>
              {this.props.user.name}
            </span>
            <NavLink href="/profile" simpleLink={true}>
              <Avatar src={this.props.user.image} alt={this.props.user.name} />
            </NavLink>
          </div>
      </header>
    );
  }
}

export default Header;
