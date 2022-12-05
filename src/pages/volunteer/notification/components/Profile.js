import classes from "./Profile.module.css";
import { RxTriangleUp } from "react-icons/rx";

const Profile = (props) => {
  return (
    <div className={classes.profileContainer}>
      <div className={classes.closeSection}>
        <RxTriangleUp size={27} onClick={props.handleClose} />
        <div>Close</div>
      </div>
      <div className={classes.fieldsContainer}>
        <div className={classes.field}> Info1:&emsp; {props.value.info1}</div>
        <div className={classes.field}> Info2:&emsp; {props.value.info2}</div>
        <div className={classes.field}> Info3:&emsp; {props.value.info3}</div>
        <div className={classes.field}> Info4:&emsp; {props.value.info4}</div>
      </div>
    </div>
  );
};

export default Profile;
