import { Fragment, useState } from "react";
import classes from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import eye from "../../assets/violet-eye.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const NavbarVolunteer = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const logoutHandler = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <div className={classes.topBar}>
        <GiHamburgerMenu
          className={classes.icon}
          size="27px"
          onClick={toggleMenu}
        />
        <div className={classes.appTitle}>Eyes for Everyone</div>
        <div className={classes.imgContainer}>
          <img src={eye} alt="logo" />
        </div>
      </div>
      {isMenuOpen && (
        <nav className={classes.navBar}>
          <NavLink className={classes.navLink} to="/volunteer-reports">
            <HiOutlineDocumentReport className={classes.icon} size="27px" />
            <div class={classes.menuItem}> REPORTS</div>
          </NavLink>
          <hr class={classes.underline} />
          <NavLink className={classes.navLink} to="/volunteer-notifications">
            <IoIosNotifications className={classes.icon} size="27px" />
            <div class={classes.menuItem}>NOTIFICATIONS</div>
          </NavLink>
          <hr class={classes.underline} />
          <NavLink className={classes.navLink} to="/volunteer-all-profiles">
            <BsFillPeopleFill className={classes.icon} size="27px" />
            <div class={classes.menuItem}>PROFILES</div>
          </NavLink>
          <hr class={classes.underline} />
          <div className={classes.signOut} onClick={logoutHandler}>
            <FaSignOutAlt className={classes.icon} size="27px" />
            <div class={classes.menuItem}>SIGN OUT</div>
          </div>
          <hr class={classes.underline} />
        </nav>
      )}
    </Fragment>
  );
};

export default NavbarVolunteer;
