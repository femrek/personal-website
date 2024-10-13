import AppHeader from "../component/AppHeader";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}

export default AppLayout;
