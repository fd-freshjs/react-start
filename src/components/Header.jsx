import Nav from './Nav';
import NavLink from './NavLink';
import Avatar from './Avatar';

function Header(props) {
  const user = { name: 'Oleg', image: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg' };

  return (
    <header className="logo">
        <h1>{props.logoText}</h1>

        <Nav />

        <NavLink href="/profile" simpleLink={true}>
          <Avatar src={user.image} alt={user.name} />
        </NavLink>
    </header>
  );
}

export default Header;
