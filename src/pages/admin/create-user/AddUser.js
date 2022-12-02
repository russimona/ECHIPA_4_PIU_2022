import React from "react";

//components 
import NavbarAdmin from "../navbar";

const AddUser = () =>{
return (
        <>
            <NavbarAdmin/>
            <div style={{backgroundColor : "#E0E0EB", height: "100vh", paddingLeft: '250px'}}>
                <div>
                    Add user
                </div>
            </div>
        </>)

}

export default AddUser;