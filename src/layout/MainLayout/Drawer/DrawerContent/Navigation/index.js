import { useSelector } from 'react-redux';

// material-ui
import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';
// import menuItem from 'menu-items';
import adminRoutes from 'menu-items/adminMenu';
import employerRoutes from 'menu-items/employerMenu';
import { getUserRole } from 'helpers/AuthUtils';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  const role = getUserRole()
  let menuItems = {};
  if (role == '5') {
    menuItems = {
      items: [adminRoutes],
    };
  } else if (role == '2') {
    menuItems = {
      items: [employerRoutes],
    };
  }
  else {
    menuItems ={
      items: []
    }
  }
  const menu = useSelector((state) => state.menu);
  const { drawerOpen } = menu;

  const navGroups = menuItems.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: drawerOpen ? 2 : 0, '& > ul:first-of-type': { mt: 0 } }}>{navGroups}</Box>;
};

export default Navigation;