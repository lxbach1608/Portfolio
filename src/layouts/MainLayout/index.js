import { Header, AsideLeft, asideRight, Loader } from "~/layouts/components";
import "./MainLayout.scss";

import { Fragment, useEffect, useState } from "react";
import AsideRight from "../components/Aside/AsideRight";

const MainLayout = function ({ children }) {
  return (
    <Fragment>
      {/* <Loader /> */}
      <Header />
      <AsideLeft />
      <AsideRight />
      <div className="container">
        <main className="content">{children}</main>
      </div>
    </Fragment>
  );
};

export default MainLayout;
