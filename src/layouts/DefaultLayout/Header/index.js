import "./Header.scss";
import classNames from "classnames/bind";
import style from "./Header.scss";

const cx = classNames.bind(style);

const Header = function () {
  return (
    <header className={cx("header")}>
      <h3>Họ và tên: Lê Xuân Bách</h3>
      <h3>mssv: 21110359</h3>
    </header>
  );
};

export default Header;
