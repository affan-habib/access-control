import { lazy } from "react";

// project import
import { Box } from "@mui/material";



const AdminRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <>
          <h1>Home page</h1>
        </>
      ),
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
