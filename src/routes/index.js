import { useRoutes } from 'react-router-dom';
// project import
import PublicRoutes from './PublicRoutes';
import AdminRoutes from './AdminRoutes';
import EmployerRoutes from './EmployerRoutes';
import { getUserRole } from 'helpers/AuthUtils';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  let role = getUserRole();

  let routes = [];

  if (role == '5') {
    routes = [PublicRoutes, AdminRoutes];
  } else {
    routes = [PublicRoutes, EmployerRoutes];
  }

  return useRoutes(routes);
}
