import { NavLink } from "react-router-dom";

interface AppNavItemProps {
  to: string;
  name: string;
  onClick: () => void;
}

function AppNavMenuItem({ to, name, onClick }: AppNavItemProps) {
  return (
    <NavLink to={to} className="nav-link" onClick={onClick}>
      <div
        className={"hover:bg-teal-600 p-4 h-full content-center select-none"}
      >
        {name}
      </div>
    </NavLink>
  );
}

export default AppNavMenuItem;
