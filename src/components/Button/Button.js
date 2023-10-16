import classNames from "classnames/bind";
import style from "./Button.module.scss";

const cx = classNames.bind(style);

const Button = function ({
  children,
  to,
  href,
  onClick,
  mt50,
  ml15,
  ...passProps
}) {
  let Comp = "button";

  const _props = {
    onClick,
    ...passProps,
  };

  const classes = cx("wrapper", {
    mt50,
    ml15,
  });

  return (
    <Comp className={classes} {..._props}>
      <span>{children}</span>
    </Comp>
  );
};

export default Button;
