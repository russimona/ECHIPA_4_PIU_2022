import React from "react";
import "./adduser.css";

import {
  TableRowVisionDeficit,
  TableRowVolunteer,
} from "./components/tableRow";
//components
import NavbarAdmin from "../navbar";
import deleteIcon from "../../../assets/delete.png";
const AddUser = () => {
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

  const volunteers = [
    {
      email: "userv1@gmail.com",
      name: "userv1",
      password: "userv1",
      phone: "0723456789",
    },
    {
      email: "userv2@gmail.com",
      name: "userv1",
      password: "userv2",
      phone: "0723456789",
    },
    {
      email: "userv3@gmail.com",
      name: "userv1",
      password: "userv3",
      phone: "0723456789",
    },
    {
      email: "userv4@gmail.com",
      name: "userv1",
      password: "userv4",
      phone: "0723456789",
    },
    {
      email: "userv5@gmail.com",
      name: "userv1",
      password: "userv5",
      phone: "0723456789",
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
              onClick={() => (window.location.href = "/add-blind-person")}
            >
              +
            </span>
          </h4>
          <TableRowVisionDeficit />
          {blindUsers.map((user) => {
            return (
              <TableRowVisionDeficit
                name={user.name}
                email={user.email}
                address={user.postalCode}
                phone_number={user.phone}
                icon={deleteIcon}
              />
            );
          })}
        </div>
        <div className="child-right-add-user">
          <h4 className="title-add-user">
            Volunteer
            <span
              style={{
                marginLeft: "30px",
                fontWeight: "bolder",
                cursor: "pointer",
                fontSize: "25px",
                marginTop: "-7px",
              }}
              onClick={() => (window.location.href = "/add-volunteer")}
            >
              +
            </span>
          </h4>
          <TableRowVolunteer />
          {volunteers.map((user) => {
            return (
              <TableRowVolunteer
                email={user.email}
                name={user.name}
                phone_number={user.phone}
                icon={deleteIcon}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddUser;
