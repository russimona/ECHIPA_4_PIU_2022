import NavbarVolunteer from "../navbar";
import classes from "./ReportForm.module.css";

const ReportForm = () => {
  return (
    <div
      style={{
        backgroundColor: "#B3B3CC",
      }}
    >
      <NavbarVolunteer />
      <div
        style={{
          height: "100vh",
        }}
      >
        <form className={classes.myForm}></form>
      </div>
    </div>
  );
};

export default ReportForm;
