import React from "react";

interface AppPageProps {
  children: React.ReactNode;
}

function AppPage({ children }: AppPageProps) {
  return <div className={"app-page"}>{children}</div>;
}

export default AppPage;
