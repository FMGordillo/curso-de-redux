import classes from "./index.module.css";
import { useLocation, Link } from "react-router-dom";
import { useCallback } from "react";

const Menu = () => {
  const location = useLocation();

  const activeLink = useCallback(
    (route) => location.pathname === route,
    [location.pathname]
  );

  return (
    <nav className={classes.nav}>
      <ul>
        <Link className={classes.link} to="/">
          <li
            className={`list-item list-item${
              activeLink("/") ? "--active" : "--inactive"
            }`}
          >
            Index
          </li>
        </Link>
        <Link className={classes.link} to="/users">
          <li
            className={`list-item list-item${
              activeLink("/users") ? "--active" : "--inactive"
            }`}
          >
            Users
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export { Menu };
