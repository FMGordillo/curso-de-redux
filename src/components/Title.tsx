import { FunctionComponent } from "react";
import classes from "./styles.module.css";

export const Title: FunctionComponent = ({ children }) => (
  <h1 className={classes.title}>{children}</h1>
);
