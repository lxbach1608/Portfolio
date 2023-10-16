import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import classNames from "classnames/bind";
import style from "./Header.module.scss";

import images from "~/assets/images";

import Button from "~/components/Button";

const cx = classNames.bind(style);

const Header = function () {
  const [active, setActive] = useState("item");

  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.pageYOffset;
      if (st > lastScrollTop) {
        setScrollDirection("down");
      } else if (st < lastScrollTop) {
        setScrollDirection("up");
      }
      if (st < 30) {
        setScrollDirection("top");
      }

      lastScrollTop = st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classes = cx("wrapper", {
    show: scrollDirection === "up",
    hide: scrollDirection === "down",
    top: scrollDirection === "top",
  });

  return (
    <header className={classes}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <svg
            className={cx("logo-svg")}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 84 96"
          >
            <g transform="translate(-8.000000, -2.000000)">
              <g transform="translate(11.000000, 5.000000)">
                <polygon
                  id="Shape"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="39 0 0 22 0 67 39 90 78 68 78 23"
                ></polygon>
                <path
                  d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                  fill="currentColor"
                ></path>
              </g>
            </g>
          </svg>
        </div>

        <nav className={cx("nav")}>
          <ol>
            <li className={cx("nav-item")}>
              <a href="#!">About</a>
            </li>
            <li className={cx("nav-item")}>
              <a href="#!">Experience</a>
            </li>
            <li className={cx("nav-item")}>
              <a href="#!">Assignment</a>
            </li>
            <li className={cx("nav-item")}>
              <a href="#!">Contact</a>
            </li>
          </ol>
          <Button ml15>Resume</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// <header className={cx("header")}>
//   <Link to="/" className={cx("logo")}>
//     Bale.dev
//   </Link>
//   <ul className="header-list">
//     <li className="item active">
//       <Link to="/">Home</Link>
//     </li>
//     <li className="item">
//       <Link to="/assignments">assignments</Link>
//     </li>
//     <li className="item">
//       <a href="#">Projects</a>
//     </li>
//     <li className="item">
//       <a>Contact</a>
//     </li>
//     <span className="line"></span>
//   </ul>
// </header>

//   useEffect(() => {
//     const itemActive = document.querySelector(".item.active");

//     const line = document.querySelector(".line");

//     line.style.left = itemActive.offsetLeft + "px";
//     line.style.width = itemActive.offsetWidth + "px";

//     const headerItems = document.querySelectorAll(".header-list .item");

//     headerItems.forEach((item, index) => {
//       item.onclick = function (e) {
//         document.querySelector(".item.active");

//         itemActive.classList.remove("active");

//         this.classList.add("active");

//         const newItemActive = document.querySelector(".item.active");

//         if (itemActive.classList.value === newItemActive.classList.value) {
//           setActive("item active");
//         } else {
//           setActive(
//             active === newItemActive.classList.value
//               ? "item"
//               : newItemActive.classList.value
//           );
//         }
//       };
//     });
//   }, [active]);
