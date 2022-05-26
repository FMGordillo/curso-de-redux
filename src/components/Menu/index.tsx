import classes from "./index.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <header className={classes.container}>
      <nav>
        <ul className={classes.content}>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${classes.listItem} ${
                  isActive ? classes.listItemActive : classes.listItemInactive
                }`
              }
              to="/"
            >
              Index
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${classes.listItem} ${
                  isActive ? classes.listItemActive : classes.listItemInactive
                }`
              }
              to="/users"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Menu };
