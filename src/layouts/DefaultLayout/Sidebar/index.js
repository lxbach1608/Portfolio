import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = function () {
  return (
    <aside className="sidebar">
      <Link to="/">Home</Link> <br />
      <Link to="/assignments">assignments</Link>
    </aside>
  );
};

export default Sidebar;
