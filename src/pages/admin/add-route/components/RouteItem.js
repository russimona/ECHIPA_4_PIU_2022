import React from "react";
import arrow from "../../../../assets/arrow.png";
const RouteItem = ({ departure, arrival }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        columnGap: "10px",
        justifyContent: "center",
        padding: "10px 0px 10px 0px",
      }}
    >
      <div
        style={{
          backgroundColor: "#3D3D5C",
          borderRadius: "10px",
          width: "250px",
          height: "34px",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {departure}
      </div>
      <img alt="" src={arrow} style={{ height: "30px" }} />
      <div
        style={{
          backgroundColor: "#3D3D5C",
          borderRadius: "10px",
          width: "250px",
          height: "34px",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {arrival}
      </div>
    </div>
  );
};

export default RouteItem;
