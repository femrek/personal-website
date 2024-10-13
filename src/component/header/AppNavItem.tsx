import { NavLink } from "react-router-dom";

interface AppNavItemProps {
  to: string;
  name: string;
}

function AppNavItem({ to, name }: AppNavItemProps) {
  return (
    <NavLink to={to} className="nav-link">
      <div className={"hover:bg-teal-600 px-2 h-full content-center"}>
        {name}
      </div>
    </NavLink>
  );
}

export default AppNavItem;
