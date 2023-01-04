import React, { useState } from "react";
import edit from "../../../assets/edit.png";
import check from "../../../assets/check.png";
const MenuItem = () => {
  const [menu, setMenu] = useState("");
  const [isEdit, setIsEdit] = useState(true)
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
      }}
    >
      <input
        style={{
          backgroundColor: "#3D3D5C",
          borderRadius: "10px",
          width: "250px",
          height: "25px",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          padding: '2px'
        }}
        placeholder={menu}
        onChange={(e) => {
          setMenu(e.target.value);
        }}
        disabled ={isEdit}
      />

      <img
        src={isEdit? edit : check}
        style={{
          height: "20px",
          width: "20px",
          marginLeft: "-30px",
          marginTop: "7px",
          cursor: "pointer",
        }}
        onClick={()=>{setIsEdit((edit)=> !edit)}}
      />
    </div>
  );
};

export default MenuItem;
