import React from "react";

//components
import NavbarAdmin from "../navbar";

const HomeAdmin = () => {
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
            fontSize: "60px",
            fontWeight: "bold",
            justifyContent: "center",
            display: "flex",
            paddingTop: "40px",
            color: "white",
            textShadow: "2px 2px black",
          }}
        >
          Welcome to Eyes for everyone
        </div>
        <div
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            display: "flex",
            paddingTop: "100px",
            color: "#3D3D5C",
            textShadow: "2px 2px black",
            width: "600px",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            paddingLeft: '35%'
          }}
        >
          "There is no better way to thank God for your sight than by giving a
          helping hand to someone in the dark."
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;
