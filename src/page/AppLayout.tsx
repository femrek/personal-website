import AppHeader from "../component/header/AppHeader.tsx";
import { Outlet } from "react-router-dom";
import AppFooter from "../component/footer/AppFooter.tsx";

function AppLayout() {
  return (
    <div className={"min-h-screen flex flex-col"}>
      {/* Header */}
      <AppHeader />

      {/* Page Content */}
      <div className={"flex-grow"}>
        <Outlet />
      </div>

      {/* Footer */}
      <AppFooter />
    </div>
  );
}

export default AppLayout;
