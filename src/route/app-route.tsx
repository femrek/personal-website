import HomePage from "../page/HomePage";
import { RouteObject } from "react-router-dom";
import AppLayout from "../page/AppLayout";
import Error404 from "../page/error/Error404";
import ContactPage from "../page/ContactPage.tsx";
import PortfoliosPage from "../page/portfolio/PortfoliosPage.tsx";
import PortfolioPage from "../page/portfolio/PortfolioPage.tsx";
import AppPage from "../component/AppPage.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contact", element: <ContactPage /> },
      {
        path: "portfolio",
        children: [
          { index: true, element: <PortfoliosPage /> },
          { path: ":portfolioSlug", element: <PortfolioPage /> },
        ],
      },
      { path: "*", element: <Error404 /> },
    ],
  },
];

function routeMapper(route: RouteObject): RouteObject {
  if (!route.children) {
    return {
      ...route,
      element: <AppPage>{route.element}</AppPage>,
    };
  }

  return {
    ...route,
    children: route.children.map(routeMapper),
  };
}

const pagedRoutes: RouteObject[] = routes.map(routeMapper);

export default pagedRoutes;
