import React, { useState } from 'react';
import menuData from 'menu-items';

const MenuBar = () => {
  // State to keep track of the selected menu and submenu items
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);

  const handleMenuClick = (menuLabel) => {
    setSelectedMenu(menuLabel);
    setSelectedSubmenu(null); // Clear the selected submenu when a menu item is clicked
  };

  const handleSubmenuClick = (submenuLabel) => {
    setSelectedSubmenu(submenuLabel);
  };

  const renderSubmenu = (submenuItems) => {
    return (
      <ul className="submenu">
        {submenuItems.map((submenuItem) => (
          <li
            className={`submenu-item ${
              submenuItem.label === selectedSubmenu ? 'selected' : ''
            }`}
            key={submenuItem.label}
            onClick={() => handleSubmenuClick(submenuItem.label)}
          >
            {submenuItem.label}
          </li>
        ))}
      </ul>
    );
  };

  const renderMenu = (items) => {
    return (
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
    );
  };

  return (
    <nav className="menu-bar">
      {renderMenu(menuData)}
    </nav>
  );
};

export default MenuBar;
