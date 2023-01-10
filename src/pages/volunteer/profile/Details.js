import {useContext, useState} from "react";
import StoreContext from "../StoreContext";
import NavbarVolunteer from "../navbar";
import classes from "./Details.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {VscCircleLargeFilled} from "react-icons/vsc";

const Details = () => {

    const email = useParams().email;
    const storeCtx = useContext(StoreContext);

    const blindUser = storeCtx.blindUsers.find(x => x.email === email)

    return (
        <div
            style={{
                backgroundColor: "#B3B3CC",
                width: "640vw",
                height: "640vh"
            }}
        >
            <NavbarVolunteer/>

            <div className={classes.detailsContainer}>
                <div className={classes.name}>
                    <VscCircleLargeFilled className={classes.iconOn}/>
                    {blindUser.name}
                </div>
                <div className={classes.fieldsContainer}>
                    <div className={classes.field}> Address:&emsp; {blindUser.address}</div>
                    <div className={classes.field}> Email:&emsp; {blindUser.email}</div>
                    <div className={classes.field}> Phone:&emsp; {blindUser.phone}</div>
                    <div className={classes.field}> Vision:&emsp; {blindUser.vision}</div>
                </div>
            </div>

        </div>
    );
};

export default Details;