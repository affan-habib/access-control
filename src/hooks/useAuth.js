// auth provider
import { getAccessToken } from "helpers/AuthUtils";

// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
  //const context = useContext(AuthContext);
  const context = getAccessToken() ? true : false;
  return context;
};

export default useAuth;
