import React from "react";
import { Button } from "reactstrap";
import NavbarAdmin from "../navbar";
import edit from "../../../assets/edit.png";
import { Link } from "react-router-dom";
const AddRoute = ({ blindUsers, setSelectedUser }) => {
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
                key={Math.random()}
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
                <Link
                  to={"/add-path"}
                  style={{ color: "#ffffff" }}
                  onClick={() => {
                    setSelectedUser(user);
                  }}
                >
                  <span>{user.email}</span>
                  <img
                    key={user}
                    alt=""
                    src={edit}
                    style={{
                      height: "20px",
                      width: "20px",
                      float: "right",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </div>
            );
          })}

          <Button
            style={{ cursor: "pointer", width: "610px" }}
            className="button-login"
          >
            <Link to={"/add-blind-person"} style={{ color: "#ffffff" }}>
              ADD NEW USER
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddRoute;
