import "./DefaultLayout.scss";

import { Fragment } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DefaultLayout = function ({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </Fragment>
  );
};

export default DefaultLayout;