import classes from "./index.module.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const calculateClassName = (isActive: boolean) =>
    `${classes.listItem} ${
      isActive ? classes.listItemActive : classes.listItemInactive
    }`;

  return (
    <header className={classes.container}>
      <nav>
        <ul className={classes.content}>
          <li>
            <NavLink
              className={({ isActive }) => calculateClassName(isActive)}
              to="/"
            >
              Index
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => calculateClassName(isActive)}
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
