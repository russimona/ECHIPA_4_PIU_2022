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
        <div className={classes.field}> Address:&emsp; {props.value.address}</div>
        <div className={classes.field}> Email:&emsp; {props.value.email}</div>
        <div className={classes.field}> Phone:&emsp; {props.value.phone}</div>
        <div className={classes.field}> Vision:&emsp; {props.value.vision}</div>
      </div>
    </div>
  );
};

export default Profile;
