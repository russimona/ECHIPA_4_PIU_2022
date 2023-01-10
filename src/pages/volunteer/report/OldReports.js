import classes from "./OldReports.module.css";
import {RxTriangleUp} from "react-icons/rx";
import {useContext} from "react";
import StoreContext from "../StoreContext";
import ReportItem from "./ReportItem";

const OldReports = (props) => {
    const storeCtx = useContext(StoreContext);

    return (
        <div className={classes.reportsContainer}>
            <div className={classes.closeSection}>
                <RxTriangleUp size={27} onClick={props.handleClose} />
                <div>Close</div>
            </div>
            {storeCtx.reports.filter(x => x.email === props.value.value).map((item, index) => (
                <ReportItem color="#B3B3CC"value={item} key={index} />
            ))}
            <br/>
        </div>
    );
};

export default OldReports;