import classNames from "classnames/bind";
import style from "./Aside.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(style);

const AsideLeft = function ({ children }) {
  const classes = cx("wrapper-left");

  return (
    <div className={classes}>
      <ul className={cx("social-list")}>
        <li>
          <a href="#!">
            <FontAwesomeIcon className={cx("aside-icon")} icon={faGithub} />
          </a>
        </li>

        <li>
          <a href="#!">
            <FontAwesomeIcon className={cx("aside-icon")} icon={faInstagram} />
          </a>
        </li>

        <li>
          <a href="#!">
            <FontAwesomeIcon className={cx("aside-icon")} icon={faFacebook} />
          </a>
        </li>

        <li>
          <a href="#!">
            <FontAwesomeIcon className={cx("aside-icon")} icon={faLinkedinIn} />
          </a>
        </li>

        <li>
          <a href="#!">
            <FontAwesomeIcon className={cx("aside-icon")} icon={faTwitter} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AsideLeft;
