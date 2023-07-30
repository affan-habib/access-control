import Loader from "components/Loader";
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import("./Header"));

const CommonLayout = ({ layout = "blank" }) => {
  return (
    <>
      {(layout === "landing" || layout === "simple") && (
        <Suspense fallback={<Loader />}>
          <Header layout={layout} />
          <Outlet />
        </Suspense>
      )}
      {layout === "blank" && <Outlet />}
    </>
  );
};

CommonLayout.propTypes = {
  layout: PropTypes.string,
};

export default CommonLayout;
