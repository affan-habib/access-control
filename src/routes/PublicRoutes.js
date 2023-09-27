import { Box, Typography } from "@mui/material";
import HomePage from "pages/HomePage";


const PublicRoutes = {
  path: "/",
  children: [
    {
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "*",
          element: <Box height={300} width={4000} bgcolor="red" />,
        },

      ],
    },
  ],
};

export default PublicRoutes;
