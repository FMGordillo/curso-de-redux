import Link from "next/link";
import ActiveLink from "../ActiveLink/ActiveLink";
import classes from "./index.module.css";

const Menu = () => {
  return (
    <header className={classes.container}>
      <nav>
        <ul className={classes.content}>
          <ActiveLink href="/">
            <li>Index</li>
          </ActiveLink>
          <ActiveLink href="/users">
            <li>Users</li>
          </ActiveLink>
        </ul>
      </nav>
    </header>
  );
};

export { Menu };
