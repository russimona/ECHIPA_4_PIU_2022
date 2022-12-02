import React from "react";
//assets
import eye from "../../assets/violet-eye.png";
import logout from "../../assets/logout.png";
//others
import "./navbar.css";

const NavbarAdmin = () => {
  return (
    <div className="container">
      <div className="header">
        <img src={eye} alt="logo" className="navbar-img" />
        <h4 className="h4">Eyes for everyone</h4>
      </div>
      <div
        className="pages"
        style={{
          backgroundColor: window.location.href.includes("admin-home-page")
            ? "#C2C2D6"
            : "#8585AD",
        }}
        onClick={() => {
          window.location.href = "/admin-home-page";
        }}
      >
        <h4 className="h4-pages">Home</h4>
      </div>
      <div
        className="pages"
        style={{
          backgroundColor: window.location.href.includes("admin-create-user")
            ? "#C2C2D6"
            : "#8585AD",
        }}
        onClick={() => {
          window.location.href = "/admin-create-user";
        }}
      >
        <h4 className="h4-pages">Add User</h4>
      </div>
      <div
        className="pages"
        style={{
          backgroundColor: window.location.href.includes("admin-add-route")
            ? "#C2C2D6"
            : "#8585AD",
        }}
        onClick={() => {
          window.location.href = "/admin-add-route";
        }}
      >
        <h4 className="h4-pages">Add route</h4>
      </div>
      <div
        className="pages"
        style={{
          backgroundColor: window.location.href.includes(
            "admin-plan-daily-menu"
          )
            ? "#C2C2D6"
            : "#8585AD",
        }}
        onClick={() => {
          window.location.href = "/admin-plan-daily-menu";
        }}
      >
        <h4 className="h4-pages">Plan daily menu</h4>
      </div>

      <div
        className="logout"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <h5 className="h5-logout">
          Logout
          <span>
            <img alt="logout" src={logout} className="img-logout" />
          </span>
        </h5>
      </div>
    </div>
  );
};

export default NavbarAdmin;
