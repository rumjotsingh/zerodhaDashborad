import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img
        src="data:image/jpeg;base64,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"
        alt="logo"
        style={{ width: "50px" }}
      />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
