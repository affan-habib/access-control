import Loadable from "components/Loadable";
import AdminLayout from "layout/AdminLayout";
import { lazy } from "react";

const ProjectProfileEntry = Loadable(lazy(() => import("pages/project-profile/ProjectProfileEntry")));
const BasicLayout = Loadable(lazy(() => import("layout/BasicLayout")));

const AdminRoutes = {
  path: "/",
  element: <BasicLayout />,
  children: [
    {
      path: "project-profile-entry",
      element: <ProjectProfileEntry />,
    },
  ],
}

export default AdminRoutes;
