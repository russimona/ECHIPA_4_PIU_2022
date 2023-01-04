import React from "react";

const TableRowVisionDeficit = ({
  name,
  address,
  phone_number,
  icon,
  email,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#3D3D5C",
        borderRadius: "10px",
        padding: "5px",
        margin: "10px",
        color: "white",
      }}
    >
      <label
        style={{
          float: "left",
          marginLeft: "10px",
          fontSize: "10px",
          marginTop: "7px",
        }}
      >
        {email ? email : "Email"}
      </label>
      <label
        style={{
          float: "left",
          marginLeft: name ? "50px" : "100px",
          fontSize: "10px",
          marginTop: "7px",
        }}
      >
        {name ? name : "Full Name"}
      </label>
      <label style={{ marginLeft: address ? "14%" : "12%", fontSize: "10px" }}>
        {address ? address : "Postal Code"}
      </label>
      <label
        style={{ marginLeft: phone_number ? "13%" : "10%", fontSize: "10px" }}
      >
        {phone_number ? phone_number : "Phone Number"}
      </label>
      {icon ? (
        <img
          alt=""
          src={icon}
          style={{ height: "15px", width: "20px", marginLeft: "13%" }}
        />
      ) : (
        <label style={{ marginLeft: "10%", fontSize: "10px" }}>Delete</label>
      )}
    </div>
  );
};

const TableRowVolunteer = ({ email, name, phone_number, icon }) => {
  return (
    <div
      style={{
        backgroundColor: "#3D3D5C",
        borderRadius: "10px",
        padding: "5px",
        margin: "10px",
        color: "white",
      }}
    >
      <label
        style={{
          float: "left",
          marginLeft: "10px",
          fontSize: "10px",
          marginTop: "7px",
        }}
      >
        {email ? email : `Email`}
      </label>
      <label
        style={{
          float: "left",
          marginLeft: name ? "60px" : "110px",
          fontSize: "10px",
          marginTop: "7px",
        }}
      >
        {name ? name : "Full Name"}
      </label>
      <label
        style={{ marginLeft: phone_number ? "20%" : "18%", fontSize: "10px" }}
      >
        {phone_number ? phone_number : "Phone Number"}
      </label>
      {icon ? (
        <img
          alt=""
          src={icon}
          style={{ height: "15px", width: "20px", marginLeft: "25%" }}
        />
      ) : (
        <label style={{ marginLeft: "22%", fontSize: "10px" }}>Delete</label>
      )}
    </div>
  );
};

export { TableRowVisionDeficit, TableRowVolunteer };
