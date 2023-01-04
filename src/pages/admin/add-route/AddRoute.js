import React from "react";
import { Button } from "reactstrap";
import NavbarAdmin from "../navbar";
import edit from "../../../assets/edit.png";
const AddRoute = () => {
  const blindUsers = [
    {
      email: "userb1@gmail.com",
      name: "userb1",
      password: "userb1",
      phone: "0723456789",
      postalCode: "500410",
    },
    {
      email: "userb2@gmail.com",
      name: "userb1",
      password: "userb2",
      phone: "0723456789",
      postalCode: "500412",
    },
    {
      email: "userb3@gmail.com",
      name: "userb1",
      password: "userb3",
      phone: "0723456789",
      postalCode: "500413",
    },
    {
      email: "userb4@gmail.com",
      name: "userb1",
      password: "userb4",
      phone: "0723456789",
      postalCode: "500414",
    },
    {
      email: "userb5@gmail.com",
      name: "userb1",
      password: "userb5",
      phone: "0723456789",
      postalCode: "500415",
    },
  ];

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
            justifyContent: "center",
            display: "flex",
            padding: "20px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Add route
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: "20px",
          }}
        >
          {blindUsers.map((user) => {
            return (
              <div
                style={{
                  backgroundColor: "#3D3D5C",
                  borderRadius: "10px",
                  padding: "5px",
                  color: "white",
                  height: "20px",
                  width: "600px",
                  margin: "auto",
                  fontSize: "12px",
                }}
              >
                <span>{user.email}</span>
                <img
                  alt=""
                  src={edit}
                  style={{
                    height: "20px",
                    width: "20px",
                    float: "right",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.location.href = "/add-path";
                  }}
                />
              </div>
            );
          })}

          <Button
            style={{ cursor: "pointer", width: "610px" }}
            className="button-login"
            onClick={() => {
              window.location.href = "/add-blind-person";
            }}
          >
            ADD NEW USER
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddRoute;
