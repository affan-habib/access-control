import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
const MainLayout = Loadable(lazy(() => import("layout/MainLayout")));
const AuthGuard = Loadable(lazy(() => import("utils/route-guard/AuthGuard")));
const Dashboard = Loadable(lazy(() => import("pages/admin/dashboard/Dashboard")));


const AdminRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        
      ],
    },
  ],
};

export default AdminRoutes;
