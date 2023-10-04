import menuData from 'menu-items';
import React from 'react';


const renderMenu = (items) => {
    return (
        <ul className="menu-list">
            {items.map((item) => (
                <li className="menu-item" key={item.label}>
                    {item.label}
                    {item.submenu && renderSubmenu(item.submenu)}
                </li>
            ))}
        </ul>
    );
};

const renderSubmenu = (submenuItems) => {
    return (
        <ul className="submenu">
            {submenuItems.map((submenuItem) => (
                <li className="submenu-item" key={submenuItem.label}>
                    {submenuItem.label}
                </li>
            ))}
        </ul>
    );
};

const MenuBar = () => {
    return (
        <nav className="menu-bar">
            {renderMenu(menuData)}
        </nav>
    );
};

export default MenuBar;
