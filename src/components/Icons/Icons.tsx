import type { CSSProperties, FunctionComponent } from "react";
import icons from "./Icons.module.css";

type IconProps = {
  style?: CSSProperties;
};

export const Eye: FunctionComponent<IconProps> = ({ style }) => (
  <div className={icons.eye} style={style} />
);

export const Loading: FunctionComponent<IconProps> = ({ style }) => (
  <div className={icons.loading} style={style} />
);
