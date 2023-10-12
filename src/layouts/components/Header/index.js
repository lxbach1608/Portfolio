import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.scss";

const cx = classNames.bind(style);

const Header = function () {
  const [active, setActive] = useState("item");

  useEffect(() => {
    const itemActive = document.querySelector(".item.active");

    const line = document.querySelector(".line");

    line.style.left = itemActive.offsetLeft + "px";
    line.style.width = itemActive.offsetWidth + "px";

    const headerItems = document.querySelectorAll(".header-list .item");

    headerItems.forEach((item, index) => {
      item.onclick = function (e) {
        document.querySelector(".item.active");

        itemActive.classList.remove("active");

        this.classList.add("active");

        const newItemActive = document.querySelector(".item.active");

        if (itemActive.classList.value === newItemActive.classList.value) {
          setActive("item active");
        } else {
          setActive(
            active === newItemActive.classList.value
              ? "item"
              : newItemActive.classList.value
          );
        }
      };
    });
  }, [active]);

  return (
    <header className={cx("header")}>
      <Link to="/" className={cx("logo")}>
        Bale.dev
      </Link>
      <ul className="header-list">
        <li className="item active">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/assignments">assignments</Link>
        </li>
        <li className="item">
          <a href="#">Projects</a>
        </li>
        <li className="item">
          <a>Contact</a>
        </li>
        <span className="line"></span>
      </ul>
    </header>
  );
};

export default Header;
