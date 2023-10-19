import classNames from "classnames/bind";
import style from "./Button.module.scss";

import { motion } from "framer-motion";

const cx = classNames.bind(style);

const Button = function ({
  large,
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
    large,
    mt50,
    ml15,
  });

  return (
    <>
      <motion.button className={classes} {..._props} whileTap={{ scale: 1.1 }}>
        <span>{children}</span>
      </motion.button>
    </>
  );
};

export default Button;
