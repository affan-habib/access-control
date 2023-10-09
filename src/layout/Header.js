import React, { useState } from 'react';
import menuData from 'menu-items';
import { useNavigate } from 'react-router';
import { AppBar } from '@mui/material';

const MenuBar = () => {
  // State to keep track of the selected menu and submenu items
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);
  const navigate = useNavigate()
  const handleMenuClick = (menuLabel) => {
    setSelectedMenu(menuLabel);
    setSelectedSubmenu(null); // Clear the selected submenu when a menu item is clicked
  };

  const handleSubmenuClick = (submenuLabel, link) => {
    setSelectedSubmenu(submenuLabel);
    navigate(link)
  };

  const renderSubmenu = (submenuItems) => {
    return (
      <ul className="submenu">
        {submenuItems.map((submenuItem) => (
          <li
            className={`submenu-item ${submenuItem.label === selectedSubmenu ? 'selected' : ''
              }`}
            key={submenuItem.label}
            onClick={() => handleSubmenuClick(submenuItem.label, submenuItem.link)}
          >
            {submenuItem.label}
          </li>
        ))}
      </ul>
    );
  };

  const renderMenu = (items) => {
    return (
      <AppBar>
        <ul className="menu-list">
          {items.map((item) => (
            <li
              className={`menu-item ${item.label === selectedMenu ? 'selected' : ''}`}
              key={item.label}
              onClick={() => handleMenuClick(item.label)}
            >
              {item.label}
              {item.submenu && renderSubmenu(item.submenu)}
            </li>
          ))}
        </ul>
      </AppBar>
    );
  };

  return (
    <nav className="menu-bar">
      {renderMenu(menuData)}
    </nav>
  );
};

export default MenuBar;
