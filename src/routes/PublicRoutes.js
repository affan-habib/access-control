import { Box, Typography } from "@mui/material";


const PublicRoutes = {
  path: "/",
  children: [
    {
      children: [
        {
          path: "/",
          element:  <Typography variant="h1">Home page</Typography>,
        },
        {
          path: "*",
          element: <Box height={300} width={4000} bgcolor="red"/>,
        },

      ],
    },
  ],
};

export default PublicRoutes;
