import React from "react";
import arrow from "../../../../assets/arrow.png";
const RouteItem = ({ departure, arrival }) => {
   
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        columnGap: "20px",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          backgroundColor: "#3D3D5C",
          borderRadius: "10px",
          width: "250px",
          height: "34px",
          color: "white",
        }}
      >
        departure
      </div>
      <img src={arrow} style={{ height: "30px" }} />
      <div
        style={{
          backgroundColor: "#3D3D5C",
          borderRadius: "10px",
          width: "250px",
          height: "34px",
          color: "white",
        }}
      >
        arrival
      </div>
    </div>
  );
};

export default RouteItem;
