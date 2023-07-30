import {

  BankOutlined,


} from "@ant-design/icons";
import EngineeringIcon from '@mui/icons-material/Engineering';
// icons
const icons = {

  BankOutlined,
  EngineeringIcon,

};
// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const adminRoutes = {
  id: "admin-routes",
  type: "group",
  children: [


    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/dashboard",
      icon: icons.BankOutlined,
    },

    {
      id: "Menu1",
      title: "Menu 1",
      type: "collapse",
      icon: icons.EngineeringIcon,
      children: [
        {
          id: "Submenu1",
          title: "Submenu 1",
          type: "item",
          url: "/submenu",
          icon: icons.EngineeringIcon,
        },

      ],
    },

  ],
};

export default adminRoutes;
