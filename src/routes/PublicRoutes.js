import { Box, Typography } from "@mui/material";
import Layout from "layout/Layout";
import HomePage from "pages/HomePage";
import SolutionSection from "pages/Solution";


const PublicRoutes = {
  path: "/",
  element: <Layout />,
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
      element: <Box height={300} width={4000} bgcolor="red" />,
    },
  ],
};

export default PublicRoutes;
