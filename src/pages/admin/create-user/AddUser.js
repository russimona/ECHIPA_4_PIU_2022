import React from "react";
import "./adduser.css";

import {
  TableRowVisionDeficit,
  TableRowVolunteer,
} from "./components/tableRow";
//components
import NavbarAdmin from "../navbar";
import deleteIcon from "../../../assets/delete.png";
import { Router } from "react-router-dom";
const AddUser = ({ blindUsers, volunteers }) => {
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
