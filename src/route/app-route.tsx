import HomePage from "../page/HomePage";
import { RouteObject } from "react-router-dom";
import AppLayout from "../page/AppLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export default routes;
