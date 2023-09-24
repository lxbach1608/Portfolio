// Pages
import Home from "../pages/Home";
import Assignment from "../pages/Assignment";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/assignments", component: Assignment },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
