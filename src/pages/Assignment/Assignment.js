import { Fragment } from "react";
import { motion } from "framer-motion";

import Button from "~/components/Button";

import classNames from "classnames/bind";
import style from "./Assignment.module.scss";

const cx = classNames.bind(style);

const Assignment = function () {
  const routeVariants = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.7,
      },
    },
  };

  return (
    <div className={cx("assignment")}>
      <motion.div variants={routeVariants} initial="initial" animate="final">
        <h1 className={cx("heading")}>
          Assignments section'UI is in processing.... The developer is falling
          asleep now. I'm sorry for the inconvenience announcement. Everything
          is temporary :((
        </h1>

        <ul className={cx("assignment-list")}>
          <li className={cx("item")}>
            <a
              href="https://lexuanbach-21110359-exercise5-2.onrender.com/exercise5_2/"
              className={cx("btn")}
              target="_blank"
            >
              Exercise 5.2
            </a>
            <span className={cx("status")}>Done</span>
          </li>

          <li className={cx("item")}>
            <a
              href="https://lexuanbach-21110359-survey.onrender.com/survey/"
              className={cx("btn")}
              target="_blank"
            >
              Survey Application
            </a>
            <span className={cx("status")}>Done</span>
          </li>

          <li className={cx("item")}>
            <a
              href="https://lexuanbach-21110359-emaillist.onrender.com/emaillist"
              className={cx("btn")}
              target="_blank"
            >
              EmailList Application
            </a>
            <span className={cx("status")}>Done</span>
          </li>

          <li className={cx("item")}>
            <a
              href="https://lexuanbach-21110359-download.onrender.com/download_app/"
              className={cx("btn")}
              target="_blank"
            >
              Download Application
            </a>
            <span className={cx("status")}>Done</span>
          </li>

          <li className={cx("item")}>
            <a
              href="https://lexuanbach-21110359-cart.onrender.com/cart_apphttps://lexuanbach-21110359-cart.onrender.com/cart_app"
              className={cx("btn")}
              target="_blank"
            >
              Cart Application
            </a>
            <span className={cx("status")}>Done</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Assignment;
