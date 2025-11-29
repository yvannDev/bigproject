import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
// Lucide icons (assumes package `lucide-react` is installed)
import { Home, User, Briefcase, Grid, Mail } from "lucide-react";

const Navbar = () => {
  const [menu, setmenu] = useState(null);
  const handleMenu = () => {
    setmenu((prev) => !prev);
  };
  return (
    <>
      <header className="navHeader">
        <nav className="nav-bar">
          <Link to={"/"} className="nav-logo">
            yvan<span className="logo">Dev</span>
          </Link>
          <ul className={`nav-menu ${menu ? "active" : ""}`}>
            <li className="nav-items">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setmenu(false)}
              >
                <Home className="nav-icon" size={16} />
                accuiel
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                to={"/apropos"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setmenu(false)}
              >
                <User className="nav-icon" size={16} />
                apropos
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                to={"/service"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setmenu(false)}
              >
                <Briefcase className="nav-icon" size={16} />
                service
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                to={"/portfolio"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}` 
                }
                onClick={() => setmenu(false)}
              >
                <Grid className="nav-icon" size={16} />
                portfolio
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setmenu(false)}
              >
                <Mail className="nav-icon" size={16} />
                contact
              </NavLink>
            </li>
          </ul>

          <div
            onClick={handleMenu}
            className={`hamburger ${menu ? "active" : ""}`}
            role="button"
            aria-label="Toggle navigation"
            aria-expanded={menu}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleMenu();
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
