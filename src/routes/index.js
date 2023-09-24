// Pages
import Home from "../pages/Home";
import Assignment from "../pages/Assignment";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/assignment", component: Assignment },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
