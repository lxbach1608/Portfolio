import "./DefaultLayout.scss";

import { Fragment } from "react";
import Header from "../components/Header";
import Home from "../../pages/Home";

const DefaultLayout = function ({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="content">
          {/* <Home /> */}
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default DefaultLayout;
