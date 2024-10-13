import AppHeader from "../component/header/AppHeader.tsx";
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
