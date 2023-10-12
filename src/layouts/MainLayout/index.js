import { Header } from "~/layouts/components";

import "./MainLayout.scss";

import { Fragment } from "react";

const MainLayout = function ({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </Fragment>
  );
};

export default MainLayout;
