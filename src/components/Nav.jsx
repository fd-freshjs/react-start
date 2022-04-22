import NavLink from './NavLink';

function Nav() {
  return (
    <nav>
      <ul>
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

export default Nav;
