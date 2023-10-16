import classNames from "classnames/bind";
import style from "./Aside.module.scss";

const cx = classNames.bind(style);

const AsideRight = function () {
  return (
    <div className={cx("wrapper-right")}>
      <a href="mailto:lxbach1608@gmail.com" className={cx("email")}>
        lxbach1608@gmail.com
      </a>
    </div>
  );
};

export default AsideRight;
