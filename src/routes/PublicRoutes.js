import Loadable from "components/Loadable";
import { lazy } from "react";
const Layout = Loadable(lazy(() => import("layout/Layout")));
const HomePage = Loadable(lazy(() => import("pages/HomePage")));
const NotFoundPage = Loadable(lazy(() => import("pages/NotFoundPage")));


const PublicRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      children: [
        {
          path: "/da",
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
