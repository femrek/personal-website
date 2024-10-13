import {NavLink} from "react-router-dom";

function AppNavItem() {
  return (
    <NavLink to="/app" className="nav-link">
      <div className={"hover:bg-teal-600 px-2 h-full content-center"}>
        App Nav
      </div>
    </NavLink>
  );
}

export default AppNavItem;
