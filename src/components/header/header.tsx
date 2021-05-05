import React from "react";
import "./header.css";
import {ReactComponent as Logo} from "../assests/svg/logo.svg"

function Header() {
  return (
    <div className="HeaderContainer">
      <div className="Logo"><Logo/></div>
      <nav className="Nav">
  <ul>
    <li className="NavItem"><a href="#" className="NavItemA">Products</a></li>
    <li className="NavItem"><a href="#" className="NavItemA">Our Blog</a></li>
    <li className="NavItem"><a href="#" className="NavItemA">Contact</a></li>
  </ul>
</nav>
    </div>
  );
}

export default Header;
