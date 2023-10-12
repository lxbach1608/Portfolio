import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// routes
import { publicRoutes } from "~/routes";

// Layouts
import MainLayout from "~/layouts/MainLayout";

// style
import classNames from "classnames/bind";
import style from "./App.module.scss";

const cx = classNames.bind(style);

function App() {
  return (
    <div className={cx("app")}>
      <Router>
        <Routes>
          {publicRoutes.map(function (route, index) {
            const Layout = MainLayout;

            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>

      <img
        src="https://fullstack.edu.vn/landing/htmlcss/assets/img/hero-bg-circle.svg"
        className={cx("circle-img")}
      />

      <img
        src="https://fullstack.edu.vn/landing/htmlcss/assets/img/hero-bg-square.svg"
        className={cx("square-img")}
      />
    </div>
  );
}

export default App;
