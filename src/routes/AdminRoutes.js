import { lazy } from "react";

// project import
import { Box } from "@mui/material";
import HomePage from "pages/HomePage";
import Layout from "layout/Layout";



const AdminRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: <HomePage />,
        },

      ],
    },
  ],
};

export default AdminRoutes;
