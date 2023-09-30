import { useRoutes } from 'react-router-dom';
// project import
import PublicRoutes from './PublicRoutes';
import AdminRoutes from './AdminRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([PublicRoutes]);
}
