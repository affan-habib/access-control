import Loadable from "components/Loadable";
import { lazy } from "react";
const HomePage = Loadable(lazy(() => import("pages/HomePage")));
const NotFoundPage = Loadable(lazy(() => import("pages/NotFoundPage")));
const BasicLayout = Loadable(lazy(() => import("layout/BasicLayout")));


const PublicRoutes = {
  path: "/",
  element: <BasicLayout />,
  children: [
    {
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
};

export default PublicRoutes;
