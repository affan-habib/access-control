import Loadable from "components/Loadable";
import { lazy } from "react";

const Layout = Loadable(lazy(() => import("layout/AdminLayout")));
const HomePage = Loadable(lazy(() => import("pages/HomePage")));

const AdminRoutes = {
  path: "/admin",
  element: <Layout />,
  children: [
    {
      path: "dashboard",
      element: <HomePage />,
    },
  ],
}

export default AdminRoutes;
