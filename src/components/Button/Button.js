import classNames from "classnames/bind";
import style from "./Button.module.scss";

const cx = classNames.bind(style);

const Button = function ({ children }) {
  return <button className={cx("btn")}>{children}</button>;
};

export default Button;
