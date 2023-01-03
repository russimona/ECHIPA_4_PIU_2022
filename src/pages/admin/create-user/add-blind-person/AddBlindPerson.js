import React from "react";
import NavbarAdmin from "../../navbar";
import { Button } from "reactstrap";
const AddBlindPerson = () => {
  return (
    <>
      <NavbarAdmin />
      <div
        style={{
          backgroundColor: "#E0E0EB",
          height: "100vh",
          paddingLeft: "250px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            fontSize: "20px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          Add blind person
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: "20px",
          }}
        >
          <div>
            <label style={{ margin: "auto", marginLeft: "320px" }}>Email</label>
            <input
              placeholder="email"
              style={{
                display: "flex",
                margin: "auto",
                width: "30vw",
                padding: "10px",
                height: "20px",
                borderRadius: "20px",
                border: "1px",
                backgroundColor: "white",
              }}
            />
          </div>

          <div>
            <label style={{ margin: "auto", marginLeft: "320px" }}>Name</label>
            <input
              placeholder="name"
              style={{
                display: "flex",
                margin: "auto",
                width: "30vw",
                padding: "10px",
                height: "20px",
                borderRadius: "20px",
                border: "1px",
                backgroundColor: "white",
              }}
            />
          </div>
          <div>
            <label style={{ margin: "auto", marginLeft: "320px" }}>Phone</label>
            <input
              placeholder="phone number"
              style={{
                display: "flex",
                margin: "auto",
                width: "30vw",
                padding: "10px",
                height: "20px",
                borderRadius: "20px",
                border: "1px",
                backgroundColor: "white",
              }}
            />
          </div>

          <div>
            <label style={{ margin: "auto", marginLeft: "320px" }}>
              Address
            </label>
            <input
              placeholder="address"
              style={{
                display: "flex",
                margin: "auto",
                width: "30vw",
                padding: "10px",
                height: "20px",
                borderRadius: "20px",
                border: "1px",
                backgroundColor: "white",
              }}
            />
          </div>

          <div>
            <label style={{ margin: "auto", marginLeft: "320px" }}>
              Password
            </label>
            <input
              placeholder="password"
              style={{
                display: "flex",
                margin: "auto",
                width: "30vw",
                padding: "10px",
                height: "20px",
                borderRadius: "20px",
                border: "1px",
                backgroundColor: "white",
              }}
            />
          </div>
        </div>
        <Button
          style={{cursor: "pointer"}}
          className="button-login"
          onClick={() => {
            window.location.href = "/admin-create-user";
          }}
        >
          ADD BLIND USER
        </Button>
      </div>
    </>
  );
};

export default AddBlindPerson;
