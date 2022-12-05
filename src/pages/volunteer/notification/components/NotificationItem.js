import classes from "./NotificationItem.module.css";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { Fragment, useState } from "react";
import Profile from "./Profile";

const NotificationItem = (props) => {
  const [seeProfile, setSeeProfile] = useState(false);

  const handleSeeProfile = () => {
    setSeeProfile(!seeProfile);
  };

  const closeProfile = () => {
    setSeeProfile(false);
  };

  const info = {
    name: props.value.name,
    info1: "blabla",
    info2: "blabla",
    info3: "blabla",
    info4: "blabla",
  };

  return (
    <Fragment>
      <div className={classes.notificationContainer}>
        <div className={classes.left}>
          <div className={classes.group}>
            <VscCircleLargeFilled className={classes.iconOn} />
            {props.value.name}
          </div>
          <div className={classes.urgency}>
            Level of emergency: {props.value.urgencyLevel}
          </div>
        </div>
        <div className={classes.right}>
          <button className={classes.myButton}>CONFIRM</button>
          {!seeProfile && (
            <button className={classes.myButton} onClick={handleSeeProfile}>
              SEE PROFILE
            </button>
          )}
        </div>
      </div>
      {seeProfile && <Profile value={info} handleClose={closeProfile} />}
    </Fragment>
  );
};

export default NotificationItem;
