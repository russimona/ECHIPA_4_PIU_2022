import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
//assets
import eye from "../assets/violet-eye.png";
//others
import "./login.css";

const Login = () => {
  return (
    <div>
      <div className="child-left">
        <h2
          style={{
            justifyContent: "center",
            display: "flex",
            paddingTop: "30px",
            marginBottom: "80px",
          }}
        >
          Login to Your Account
        </h2>
        <label className="label">Email</label>
        <input placeholder="email" className="input" />
        <label className="label">Password</label>
        <input placeholder="password" type="password" className="input" />
        <Button
          className="button-login"
        >
           <Link to={"/admin-home-page"} style={{ color: "#ffffff" }}> Login </Link>
        </Button>
      </div>

      <div className="child-right">
        <img src={eye} alt="logo" className="img" />
        <h1 className="logo">Eyes for everyone</h1>
      </div>
    </div>
  );
};

export default Login;
