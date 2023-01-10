import NavbarVolunteer from "../navbar";
import classes from "./ReportForm.module.css";
import Select from "react-select";
import {useState, useContext} from "react";
import OldReports from "./OldReports";
import CreateReportForm from "./CreateReportForm";
import StoreContext from "../StoreContext";

const ReportForm = () => {
  const storeCtx = useContext(StoreContext);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [seeOldReports, setSeeOldReports] = useState(false);
  const [seeFormReport, setSeeFormReport] = useState(false);

  const handleChange = (selectedOption) => {
    setSelectedPerson(selectedOption);
    closeOldReports();
    closeFormReport();
  };

  const handleSeeOldReports = () => {
    if (selectedPerson !== null) {
      setSeeOldReports(!seeOldReports);
      closeFormReport();
    }
    else {
      alert("Select an user!")
    }
  }

  const handleSeeFormReport = () => {
    if (selectedPerson !== null) {
      setSeeFormReport(!seeFormReport);
      closeOldReports();
    }else{
      alert("Select an user!")
    }
  }

  const closeOldReports = () => {
    setSeeOldReports(false);
  };

  const closeFormReport = () => {
    setSeeFormReport(false);
  }

  return (
    <div
      style={{
        backgroundColor: "#B3B3CC",
          width: "640vw",
          height: "640vh"
      }}
    >
      <NavbarVolunteer />
      <div className={classes.searchContainer}>
        <div className={classes.label}>
          Name of the person that you interacted with:
        </div>
        <div>
        <Select
            value={selectedPerson}
            onChange={handleChange}
            options={storeCtx.blindUsers.map(item => {return{value: item.email, label:item.name}})}
            className={classes.mySelect}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "#f1e1fc",
                primary: "#666699",
              },
            })}
        />
        </div>
      </div>
      <div className={classes.buttonsContainer}>
        {!seeOldReports && (
            <button className={classes.myButton} onClick={handleSeeOldReports}>
              SEE OLD REPORTS
            </button>
        )}
        {!seeFormReport && (
            <button className={classes.myButton} onClick={handleSeeFormReport}>
              MAKE NEW REPORT
            </button>
        )}
      </div>
      {seeOldReports && <OldReports value={selectedPerson} handleClose={closeOldReports} />}
      {seeFormReport && <CreateReportForm value={selectedPerson} handleClose={closeFormReport} />}
    </div>
  );
};

export default ReportForm;
