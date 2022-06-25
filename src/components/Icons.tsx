import { CSSProperties, FC } from "react";
import icons from "./icons.module.css";

type IconProps = {
  style?: CSSProperties;
};

export const Eye: FC<IconProps> = ({ style }) => (
  <div className={icons.eye} style={style} />
);

export const Loading: FC<IconProps> = ({ style }) => (
  <div className={icons.loading} style={style} />
);
