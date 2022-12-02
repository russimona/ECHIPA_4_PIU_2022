import React from "react";

//components 
import NavbarAdmin from "../navbar";

const HomeAdmin = () =>{
return (
        <>
            <NavbarAdmin/>
            <div style={{backgroundColor : "#E0E0EB", height: "100vh", paddingLeft: '250px'}}>
                <div>
                    Home page
                </div>
            </div>
        </>)

}

export default HomeAdmin;