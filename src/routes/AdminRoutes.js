import { lazy } from "react";

// project import
import { Box } from "@mui/material";
import HomePage from "pages/HomePage";



const AdminRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Box/>,
      children: [
        {
          path: "dashboard",
          element: <Box />,
        },
        
      ],
    },
  ],
};

export default AdminRoutes;
