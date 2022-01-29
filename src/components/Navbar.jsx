import React from "react";
import "../App.css";
import { ReactComponent as ReactLogo } from "../logoipsum-logo-8.svg";
import { SidebarData } from "../SidebarData";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as BsIcon from "react-icons/bs";
import { IconContext } from "react-icons";

const Navbar = ({ showLinks, setShowLinks }) => {
  // const [showLinks, setShowLinks] = useState(false);

  const showNavbar = () => {
    setShowLinks(!showLinks);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="left-side">
          <Link to="#" className="menu-bars">
            {<ReactLogo onClick={showNavbar} />}
          </Link>
          {showLinks && (
            <nav className={showLinks ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showNavbar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.className}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
          <div className={showLinks ? "search-bar active" : "search-bar"}>
            <input type="text" placeholder="search..." />
            <button>Search</button>
          </div>
        </div>
        <div className="right-side">
          <h1 className="user">Петров В.А. </h1>
          <BsIcon.BsPersonCircle className="avatar-icon" />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;
