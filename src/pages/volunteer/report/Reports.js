import classes from "./Reports.module.css";
import NavbarVolunteer from "../navbar";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();

  const handleOtherReports = () => {};

  const handleMakeNewReport = () => {
    navigate("/volunteer-create-report");
  };

  return (
    <div
      style={{
        backgroundColor: "#B3B3CC",
      }}
    >
      <NavbarVolunteer />
      <div className={classes.buttonsContainer}>
        <button className={classes.myButton} onClick={handleOtherReports}>
          SEE OTHER REPORTS
        </button>
        <button className={classes.myButton} onClick={handleMakeNewReport}>
          MAKE NEW REPORT
        </button>
      </div>
    </div>
  );
};

export default Reports;
