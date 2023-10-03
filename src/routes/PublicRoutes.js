import Layout from "layout/Layout";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";


const PublicRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      children: [
        {
          path: "/da",
          element: <HomePage />,

        },

      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
};

export default PublicRoutes;
