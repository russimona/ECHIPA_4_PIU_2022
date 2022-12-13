//components
import NavbarVolunteer from "../navbar";
import { Fragment } from "react";

const HomeVolunteer = () => {
  return (
    <Fragment>
      <NavbarVolunteer />
      <div
        style={{
          backgroundColor: "#B3B3CC",
          height: "100vh",
        }}
      >
        Homepage
      </div>
    </Fragment>
  );
};

export default HomeVolunteer;
