import React from "react";
import "./adduser.css";

import {
  TableRowVisionDeficit,
  TableRowVolunteer,
} from "./components/tableRow";
//components
import NavbarAdmin from "../navbar";

import deleteIcon from "../../../assets/delete.png"
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
          <TableRowVisionDeficit />
          <TableRowVisionDeficit name={'Name1 Surname1'} address={'500410'} phone_number={'0764000000'} icon={deleteIcon}/>
          <TableRowVisionDeficit name={'Name3 Surname3'} address={'500410'} phone_number={'0764000000'} icon={deleteIcon}/>
          <TableRowVisionDeficit name={'Name4 Surname4'} address={'500410'} phone_number={'0764000000'} icon={deleteIcon}/>
          <TableRowVisionDeficit name={'Name5 Surname5'} address={'500410'} phone_number={'0764000000'} icon={deleteIcon}/>
        
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
            >
              +
            </span>
          </h4>
          <TableRowVolunteer />
          <TableRowVolunteer name={'Name1 Surname1'} phone_number={'0764000000'} icon={deleteIcon} />
          <TableRowVolunteer name={'Name2 Surname2'} phone_number={'0764000000'} icon={deleteIcon} />
          <TableRowVolunteer name={'Name3 Surname3'} phone_number={'0764000000'} icon={deleteIcon} />

          
        </div>
      </div>
    </>
  );
};

export default AddUser;
