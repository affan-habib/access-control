import { lazy } from "react";
import Loadable from "components/Loadable";

const CommonLayout = Loadable(lazy(() => import("layout/CommonLayout")));
const Portal = Loadable(lazy(() => import("pages/portal/Portal")));
const AuthLogin = Loadable(lazy(() => import("pages/auth/login")));
const Error404 = Loadable(lazy(() => import("pages/maintenance/404")));

const PublicRoutes = {
  path: "/",
  children: [
    {
      children: [
        {
          path: "/",
          element: <CommonLayout layout="simple"/>,
          children: [
            {
              path: "/",
              element: <Portal/>
            }
          ]
        },
        {
          path: "login",
          element: <AuthLogin />,
        },

        {
          path: "*",
          element: <Error404 />,
        },

      ],
    },
  ],
};

export default PublicRoutes;
