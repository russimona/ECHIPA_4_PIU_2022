import React from "react";

//components
import NavbarAdmin from "../navbar";
import MenuItem from "./MenuItem";

const PlanMenu = () => {
  return (
    <>
      <NavbarAdmin />
      <div
        style={{
          backgroundColor: "#E0E0EB",
          height: "100vh",
          paddingLeft: "250px",
          display: "flex",
          flexDirection: "row",
          columnGap: "150px",
        }}
      >
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              height: "50%",
              paddingLeft: "20px",
            }}
          >
            <div style={{ borderBottom: "2px solid #000000" }}>Breakfast</div>
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
          <div style={{ paddingLeft: "20px" }}>
            <div style={{ borderBottom: "2px solid #000000" }}>Dinner</div>
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <div style={{ height: "40%", width: "150%" }}>
            <div style={{ borderBottom: "2px solid #000000" }}>Lunch</div>
            <div>
              <div style={{ borderBottom: "2px solid #000000" }}>Soup </div>
              <MenuItem />
              <MenuItem />
              <MenuItem />
            </div>
          </div>

          <div style={{ height: "35%", width: "150%" }}>
            <div style={{ borderBottom: "2px solid #000000" }}>
              Main course
            </div>
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
          <div>
            <div style={{ borderBottom: "2px solid #000000", width: "150%" }}>
              Dessert
            </div>
            <MenuItem />
            <MenuItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanMenu;
