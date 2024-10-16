import { NavLink } from "react-router-dom";

interface AppNavItemProps {
  to: string;
  name: string;
}

function AppNavItem({ to, name }: AppNavItemProps) {
  return (
    <NavLink to={to} className={"hover:bg-teal-600 px-2 h-full content-center"}>
      {name}
    </NavLink>
  );
}

export default AppNavItem;
