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
      </div>
    </Router>
  );
}

export default App;
