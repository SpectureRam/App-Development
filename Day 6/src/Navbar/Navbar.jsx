import React, { useState } from "react";
import { useSelector } from "react-redux"; // Import the useSelector hook from Redux

// ICONS
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";
import { login } from "../Login/User";
// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const user = useSelector(state=>(state.user.value));
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <p className="ml-10">{user.name}</p>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
