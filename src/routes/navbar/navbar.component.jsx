import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import { NAVBAR_TABS } from "./navbar-tabs.object";

import "./navbar.styles.scss";
const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState({});
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <NavLink
          to="/"
          onClick={(e) => {
            setSelectedTab(e.target);
            setIsActive(false);
          }}
        >
          <img src={logo} alt="magic-menu-logo" width="50px" height="50px" />
          <div>
            <span className="magic">Magic</span>
            <span className="menu">Menu</span>
            {selectedTab ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null}
          </div>
        </NavLink>
      </div>
      <div
        id="toggleMenu"
        className={isActive ? "menu-active" : ""}
        onClick={handleClick}
      >
        <span>menu</span>
        <span>menu</span>
        <span>menu</span>
      </div>
      <div
        className={isActive ? "routes-container show-menu" : "routes-container"}
      >
        <ul>
          {NAVBAR_TABS.map((tab) => (
            <li
              key={tab.id}
              onClick={() => {
                setSelectedTab(tab);
                setIsActive(false);
              }}
            >
              <NavLink to={tab.path}>
                {tab.name}
                {tab === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
