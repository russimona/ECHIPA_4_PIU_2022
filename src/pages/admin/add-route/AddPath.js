import React, { useState } from "react";
import { Button } from "reactstrap";
import NavbarAdmin from "../navbar";
import RouteItem from "./components/RouteItem";
import arrow from "../../../assets/arrow.png";
const AddPath = () => {
  const [addPath, setAddPath] = useState(false);
  const user = {
    email: "userb1@gmail.com",
    name: "userb1",
    password: "userb1",
    phone: "0723456789",
    postalCode: "500410",
  };

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("")

  const [path, setPath] = useState([
    {
      emailUser: "userb1@gmail.com",
      departure: "A",
      arrival: "B",
    },

   
  ]);


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
            paddingTop: "20px",
            paddingLeft: "40%",
          }}
        >
          <div
            style={{
              paddingTop: "20px",
            }}
          >
            <label>Phone number : </label>
            <label style={{ textDecoration: "underline" }}>{user.phone}</label>
          </div>

          <div
            style={{
              paddingTop: "20px",
            }}
          >
            <label>Address : </label>
            <label style={{ textDecoration: "underline" }}>
              {user.postalCode}
            </label>
          </div>

          <div
            style={{
              paddingTop: "20px",
            }}
          >
            <label>Name : </label>
            <label style={{ textDecoration: "underline" }}> {user.name}</label>
          </div>
        </div>
        {path.map((item) => (
          <RouteItem departure={item.departure} arrival={item.arrival} />
        ))}

        {addPath && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "10px",
              justifyContent: "center",
              padding: "10px 0px 10px 0px",
            }}
          >
            <input
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
              onChange={(e)=> {setDeparture(e.target.value)}}
            ></input>
            <img alt="" src={arrow} style={{ height: "30px" }} />
            <input
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
              onChange={(e)=> {setArrival(e.target.value)}}
            ></input>
          </div>
        )}

        <Button
          style={{ cursor: "pointer", width: "610px" }}
          className="button-login"
          onClick={() => {
            addPath ? setAddPath(false) : setAddPath(true);
            
            (addPath && arrival.length != 0 && departure.length !=0 ) &&  setPath((crrPath)=> [...crrPath, {email : user.email, departure:departure , arrival: arrival}])
        setArrival("") && setDeparture("")
          
        }
        }
        >
          {!addPath ? "Add ROUTE" : "Save Route"}
        </Button>
      </div>
    </>
  );
};

export default AddPath;
