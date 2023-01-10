//components
import NavbarVolunteer from "../navbar";
import classes from "../navbar.module.css";
import volunteer from "../../../assets/volunteer.png";
import volunteer2 from "../../../assets/volunteer2.png";

const HomeVolunteer = () => {
  return (
    <div
        style={{
            width: "640vw",
            height: "640vh"
        }}>
      <NavbarVolunteer />
      <div
        style={{
          backgroundColor: "#B3B3CC",
            height: "100%",
            width: "100%"
        }}
      >
          <div className={classes.homePageContainer}>
              <img src={volunteer} alt="bg" />
          </div>
          <div className={classes.homePageContainer2}>
              <img src={volunteer2} alt="bg" />
          </div>
      </div>
    </div>
  );
};

export default HomeVolunteer;
