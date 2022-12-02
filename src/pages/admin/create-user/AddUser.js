import React from "react";

//
import "./adduser.css";
//components
import NavbarAdmin from "../navbar";

const AddUser = () => {
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
        <div className="child-left-add-user">
          <h4 className="title-add-user">
            User Vision Deficit{" "}
            <span
              style={{
                marginLeft: "30px",
                fontWeight: "bolder",
                cursor: "pointer",
                fontSize: "25px",
                marginTop: "-7px",
              }}
            >
              +
            </span>
          </h4>

          <div
            style={{
              backgroundColor: "#3D3D5C",
              borderRadius: "10px",
              padding: "5px",
              margin: "10px",
              color: "white",
            }}
          >
            <label style={{ float: "left", marginLeft: "10px" }}>
              Full Name
            </label>
            <label style={{ marginLeft: "10%" }}>Address</label>
            <label style={{ marginLeft: "13%" }}>Phone Number</label>
            <label style={{ marginLeft: "13%" }}>Delete</label>
          </div>
        </div>
        <div className="child-right-add-user">
          <h4 className="title-add-user">
            Volunteer{" "}
            <span
              style={{
                marginLeft: "30px",
                fontWeight: "bolder",
                cursor: "pointer",
                fontSize: "25px",
                marginTop: "-7px",
              }}
            >
              +
            </span>
          </h4>
          <div
            style={{
              backgroundColor: "#3D3D5C",
              borderRadius: "10px",
              padding: "5px",
              margin: "10px",
              color: "white",
            }}
          >
            <label style={{ float: "left", marginLeft: "10px" }}>
              Full Name
            </label>
            <label style={{ marginLeft: "20%" }}>Phone Number</label>
            <label style={{ marginLeft: "25%" }}>Delete</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
