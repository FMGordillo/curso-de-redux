import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Index</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </nav>
  );
};

export { Menu };