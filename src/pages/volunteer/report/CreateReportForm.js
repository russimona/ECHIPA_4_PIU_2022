import classes from "./CreateReportForm.module.css";
import {RxTriangleUp} from "react-icons/rx";
import {useContext, useRef} from "react";
import StoreContext from "../StoreContext";

const CreateReportForm = (props) => {
    const storeCtx = useContext(StoreContext);
    const dateInputRef = useRef();
    const textInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        storeCtx.addNewReport({
            volunteerName: "Volunteer 1",
            date: dateInputRef.current.value,
            email: props.value.value,
            text: textInputRef.current.value,
        });
        props.handleClose();
    }
    return (
        <div className={classes.reportsContainer}>
            <div className={classes.closeSection}>
                <RxTriangleUp size={27} onClick={props.handleClose} />
                <div>Close</div>
            </div>
            <form onSubmit={submitHandler}>
                <label>Date of interaction:</label>
                <div >
                    <input type="date" required ref={dateInputRef} />
                </div>

                <div>
                    <textarea  cols="40" rows="4"  required ref={textInputRef} />
                </div>

                <button className={classes.myButton} >
                    PUBLISH
                </button>

            </form>
        </div>
    );
};

export default CreateReportForm;