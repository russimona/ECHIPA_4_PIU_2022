import React, { useState } from "react";
import NavbarAdmin from "../../navbar";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
const AddBlindPerson = ({ setBlindUsers }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddresss] = useState("");
  const [pasword, setPassword] = useState("");

  const addBlindUserHandler = () => {
    setBlindUsers((prevList) => [
      ...prevList,
      {
        email: email,
        name: name,
        password: pasword,
        phone: phoneNumber,
        postalCode: address,
      },
    ]);
  };
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
              onChange={(event) => {
                setEmail(event.target.value);
              }}
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
              onChange={(event) => {
                setName(event.target.value);
              }}
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
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
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
              onChange={(event) => {
                setAddresss(event.target.value);
              }}
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
              onChange={(event) => {
                setPassword(event.target.value);
              }}
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
          style={{ cursor: "pointer" }}
          className="button-login"
          onClick={addBlindUserHandler}
        >
          <Link to={"/admin-create-user"} style={{ color: "#ffffff" }}>
            {" "}
            ADD BLIND USER{" "}
          </Link>
        </Button>
      </div>
    </>
  );
};

export default AddBlindPerson;
