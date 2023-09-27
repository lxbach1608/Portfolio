import "./DefaultLayout.scss";

import { Fragment } from "react";
import Header from "../components/Header";

const DefaultLayout = function ({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="container">
        {/* <Sidebar /> */}
        <div className="content">{children}</div>
      </div>
      <div id="about">
        <h1 className="heading">
          About and Assignments section'UI is in processing.... The developer is
          falling asleep now.{<br></br>} I'm sorry for the inconvenience
          announcement. Everything is temporary :((
        </h1>

        <h2 className="heading2">
          You can checkout my assignments of Web Java
          <strong className="highlight"> Week 4:Survey-syntax</strong> in this
          below link: 👇
        </h2>

        <a
          href="https://week4-survey.onrender.com/W4_21110359/"
          className="assignment-btn"
          target="_blank"
        >
          Week 4: Survey-syntax
        </a>
      </div>
    </Fragment>
  );
};

export default DefaultLayout;
