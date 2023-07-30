// project import
import Routes from "routes";
import ThemeCustomization from "themes";
import ScrollTop from "components/ScrollTop";
import Snackbar from "components/@extended/Snackbar";
import './styles.css'
import Toaster from "components/Toaster";
// auth provider

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    {/* <RTLLayout> */}
    <>
      <ScrollTop>
        <>
          <Routes />
          <Snackbar />
          <Toaster />
        </>
      </ScrollTop>
    </>
    {/* </RTLLayout> */}
  </ThemeCustomization>
);

export default App;
