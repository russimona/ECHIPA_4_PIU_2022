import classes from "./ProfileItem.module.css";
import {VscCircleLargeFilled} from "react-icons/vsc";
import {useNavigate} from "react-router-dom";

const ProfileItem = (props) => {
    const navigate = useNavigate();

    const handleSeeDetails = (email) => {
        navigate("/volunteer-all-profiles/"+email);
    }

    return (
        <div className={classes.profileContainer} style={{backgroundColor: props.color}}>

            <div className={classes.left}>
                <VscCircleLargeFilled className={classes.iconOn}/>
                {props.value.name}
            </div>
            <div className={classes.right}>
                <button className={classes.myButton} onClick={() => handleSeeDetails(props.value.email)}>
                    SEE DETAILS
                </button>
            </div>


        </div>
    )
}

export default ProfileItem;