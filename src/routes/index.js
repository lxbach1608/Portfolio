// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Assignment from "../pages/Assignment";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/assignment", component: About },
  { path: "/assignments", component: Assignment },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
