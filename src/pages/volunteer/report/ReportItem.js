import classes from "./ReportItem.module.css";
import {VscCircleLargeFilled} from "react-icons/vsc";

const ReportItem = (props) => {
    return(
        <div className={classes.reportContainer} style={{backgroundColor: props.color}}>
                <div>
                    <VscCircleLargeFilled className={classes.iconOn} />
                    {props.value.volunteerName}
                </div>
            <div>
                {props.value.date}
            </div>
            <div >
                {props.value.text}
            </div>
        </div>
    )
}

export default  ReportItem;