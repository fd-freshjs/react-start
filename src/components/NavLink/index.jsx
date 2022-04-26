
function NavLink(props) {
  // условный рендеринг
  if (props.simpleLink) {
    // дочернее содержимое
    return <a href={props.href}>{props.children}</a>
  }

  return (
    <li>
      <a href={props.href}>{props.children}</a>
    </li>
  );
}

export default NavLink;
