import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// routes
import { publicRoutes } from "./routes";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";

// style
import classNames from "classnames/bind";
import style from "./App.module.scss";

const cx = classNames.bind(style);

function App() {
  return (
    <Router>
      <div className={cx("app")}>
        <Routes>
          {publicRoutes.map(function (route, index) {
            const Layout = DefaultLayout;

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

        <img
          src="https://fullstack.edu.vn/landing/htmlcss/assets/img/hero-bg-circle.svg"
          className={cx("circle-img")}
        />

        <img
          src="https://fullstack.edu.vn/landing/htmlcss/assets/img/hero-bg-square.svg"
          className={cx("square-img")}
        />
      </div>
    </Router>
  );
}

export default App;
