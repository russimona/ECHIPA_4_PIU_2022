import classes from "./NotificationItem.module.css";
import { VscCircleLargeFilled } from "react-icons/vsc";
import {Fragment, useContext, useState} from "react";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import StoreContext from "../../StoreContext";

const NotificationItem = (props) => {
  const [seeProfile, setSeeProfile] = useState(false);
  const storeCtx = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSeeProfile = () => {
    setSeeProfile(!seeProfile);
  };

  const closeProfile = () => {
    setSeeProfile(false);
  };

  const blindUser = storeCtx.blindUsers.find(x => x.email === props.value.email)

  const handleCall = () => {
    storeCtx.confirmNotification(props.value.email)
    navigate("/volunteer-notifications");
  }
  return (
    <Fragment>
      <div className={classes.notificationContainer}>
        <div className={classes.left}>
          <div className={classes.group}>
            <VscCircleLargeFilled className={classes.iconOn} />
            {blindUser.name}
          </div>
          <div className={classes.urgency}>
            Level of emergency: {props.value.urgencyLevel}
          </div>
        </div>
        <div className={classes.right}>
          <button className={classes.myButton} onClick={handleCall}>CONFIRM </button>
          {!seeProfile && (
            <button className={classes.myButton} onClick={handleSeeProfile}>
              SEE PROFILE
            </button>
          )}
        </div>
      </div>
      {seeProfile && <Profile value={blindUser} handleClose={closeProfile} />}
    </Fragment>
  );
};

export default NotificationItem;
