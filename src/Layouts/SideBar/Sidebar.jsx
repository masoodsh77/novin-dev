import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { FaCloudscale,FaPowerOff} from 'react-icons/fa'

function Sidebar(props) {
  const handleLogout = () =>{
    localStorage.removeItem("token")
  }
  return (
    <div className="h-100 sidebar  flex-wrap">
      <div className="LogoPosition d-flex justify-content-center align-items-center">
        <img src={logo} width="250px" className="logo" alt="Logo" />
      </div>
      <div className="Menu">
        <ul>
          <NavLink className="li" exact to="/dashboard" activeClassName="activeMenu">
            <FaCloudscale className="sidebarMenuIcon"/> کاربران
          </NavLink>
          <NavLink  className="li" to="/" onClick={handleLogout}>
          <FaPowerOff className="sidebarMenuIcon"/> خروج
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
