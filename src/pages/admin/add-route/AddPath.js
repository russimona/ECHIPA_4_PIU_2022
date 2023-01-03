import React from "react";
import { Button } from "reactstrap";
import NavbarAdmin from "../navbar";
import edit from "../../../assets/edit.png";
import RouteItem from "./components/RouteItem";
const AddPath = ({ user,  path }) => {

    console.log(path);
  return (
    <>
      <NavbarAdmin />
      <div
        style={{
          backgroundColor: "#E0E0EB",
          height: "100vh",
          paddingLeft: "250px",
        }}
      >
        <div
          style={{
            paddingTop: "20px",
            paddingLeft: "40%",
          }}
        >
          <div
            style={{
              paddingTop: "20px",
            }}
          >
            <label>Phone number : </label>
            <label style={{ textDecoration: "underline" }}>{user.phone}</label>
          </div>

          <div
            style={{
              paddingTop: "20px",
            }}
          >
            <label>Address : </label>
            <label style={{ textDecoration: "underline" }}>
              
              {user.postalCode}
            </label>
          </div>

          <div
            style={{
              paddingTop: "20px",
            }}
          >
            <label>Name : </label>
            <label style={{ textDecoration: "underline" }}> {user.name}</label>
          </div>
        </div>
        {path.map((item) => {
          <RouteItem departure={item.departure} arrival={item.arrival} />;
        })}

        <Button
          style={{ cursor: "pointer", width: "610px" }}
          className="button-login"
          onClick={() => {
            window.location.href = "/add-route";
          }}
        >
          Add ROUTE
        </Button>
      </div>
    </>
  );
};

export default AddPath;
