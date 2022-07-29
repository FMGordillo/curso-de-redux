import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import {
  cloneElement,
  useState,
  useEffect,
  ReactElement,
  Children,
} from "react";
import classes from "./ActiveLink.module.css";

type ActiveLinkProps = LinkProps & {
  children: ReactElement;
};

const ActiveLink = ({ children, ...props }: ActiveLinkProps) => {
  const { asPath, isReady } = useRouter();

  const child = Children.only(children);
  const childClassName = classes.listItem;
  const [className, setClassName] = useState(childClassName);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      const newClassName =
        linkPathname === activePathname
          ? `${childClassName} ${classes.listItemActive}`.trim()
          : childClassName;

      if (newClassName !== className) {
        setClassName(newClassName);
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    childClassName,
    setClassName,
    className,
  ]);

  return (
    <Link {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
