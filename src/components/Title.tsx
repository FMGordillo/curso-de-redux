import classes from "./styles.module.css";

export const Title = ({ children }) => (
  <h1 className={classes.title}>{children}</h1>
);
