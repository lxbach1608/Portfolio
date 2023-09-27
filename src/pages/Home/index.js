import classNames from "classnames/bind";
import { Fragment } from "react";
import style from "./Home.module.scss";

const cx = classNames.bind(style);

const Home = function () {
  return (
    <div className={cx("home")}>
      <div className={cx("hero")}>
        <div className={cx("intro")}>
          <h1 className={cx("intro__title")}>
            Hi! I'm Bale {<br></br>} Fullstack Developer
          </h1>
          <p className={cx("intro__desc", "mt20")}>
            A{" "}
            <strong className={cx("text-highlight")}>
              passionate Fullstack Developer
            </strong>{" "}
            based in Ho Chi Minh City (HCMC), Viet Nam 📍
          </p>
        </div>
        <div className={cx("pic")}>
          <img
            className={cx("pic__img")}
            src="https://i.pinimg.com/564x/d7/c7/97/d7c7978c8043fb0b42672a69b0156006.jpg"
          ></img>
        </div>
      </div>

      {/* tech-stack */}
      <div className={cx("tech-stack")}>
        <strong className={cx("tech-stack__text")}>Tech Stack</strong>
        <ul className={cx("skill-list")}>
          <li className={cx("skill-item")}>
            <img
              className={cx("skill-item__img")}
              src="https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png"
            />
          </li>
          <li className={cx("skill-item")}>
            <img
              className={cx("skill-item__img")}
              src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png"
            />
          </li>
          <li className={cx("skill-item")}>
            <img
              className={cx("skill-item__img", "js-logo")}
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            />
          </li>
          <li className={cx("skill-item")}>
            <img
              className={cx("skill-item__img")}
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            />
          </li>
          <li className={cx("skill-item")}>
            <img
              className={cx("skill-item__img")}
              src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png"
            />
          </li>
          <li className={cx("skill-item")}>
            <img
              className={cx("skill-item__img")}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
