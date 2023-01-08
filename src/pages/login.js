import React, { useState } from "react";
import { Button } from "reactstrap";
//assets
import eye from "../assets/violet-eye.png";
//others
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(false);

  const onLoginHandler = () => {
    if (email === "admin@admin.com" && password === "admin") {
      window.location.href = "/admin-home-page";
    } else {
      alert("Please enter a correct username & password ");
    }
  };

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
        <input
          placeholder="email"
          className="input"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label className="label">Password</label>
        <input
          placeholder="password"
          type="password"
          className="input"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button className="button-login" onClick={onLoginHandler}>
          Login
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
