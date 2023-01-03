import React from "react";
import { Button } from "reactstrap";
import NavbarAdmin from "../navbar";
import edit from "../../../assets/edit.png";
const AddRoute = ({ blindUsers, setCurrentUser, setAddPath }) => {
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
                  margin: "10px",
                  color: "white",
                  height: "20px",
                  width: "600px",
                  margin: "auto",
                  fontSize: "12px",
                }}
              >
                <span>{user.email}</span>
                <img
                  src={edit}
                  style={{
                    height: "20px",
                    width: "20px",
                    float: "right",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setAddPath(true);
                    setCurrentUser(user);
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
