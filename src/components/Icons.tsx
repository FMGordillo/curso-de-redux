import { FunctionComponent } from "react";
import icons from "./icons.module.css";

type IconProps = {
  style?: React.CSSProperties;
};

export const Eye: FunctionComponent<IconProps> = ({ style }) => (
  <div className={icons.eye} style={style} />
);

export const Loading: FunctionComponent<IconProps> = ({ style }) => (
  <div className={icons.loading} style={style} />
);
