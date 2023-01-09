import NavbarVolunteer from "../navbar";
import classes from "./ReportForm.module.css";

const ReportForm = () => {
  return (
    <div
      style={{
        backgroundColor: "#B3B3CC",
          width: "640vw",
          height: "640vh"
      }}
    >
      <NavbarVolunteer />
      <div
        style={{
          height: "100%",
        }}
      >
        <form className={classes.myForm}></form>
      </div>
    </div>
  );
};

export default ReportForm;
