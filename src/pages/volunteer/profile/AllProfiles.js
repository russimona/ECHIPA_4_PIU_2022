import {useContext, useState} from "react";
import StoreContext from "../StoreContext";
import NavbarVolunteer from "../navbar";
import classes from "./AllProfiles.module.css";
import Select from "react-select";
import ProfileItem from "./ProfileItem";


const AllProfiles = () => {
    const storeCtx = useContext(StoreContext);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedPerson(selectedOption);
    };


    return (
        <div
            style={{
                backgroundColor: "#B3B3CC",
                width: "640vw",
                height: "640vh"
            }}
        >
            <NavbarVolunteer/>
            <div className={classes.searchProfileContainer}>
                <div className={classes.label}>
                    See details for specific user:
                </div>
                <div>
                    <Select
                        value={selectedPerson}
                        onChange={handleChange}
                        options={storeCtx.blindUsers.map(item => {
                            return {value: item.email, label: item.name}
                        })}
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

            <br/>
            {selectedPerson !== null && storeCtx.blindUsers.filter(x => x.email === selectedPerson.value).map((item, index) => (
                <ProfileItem color="white" value={item} key={index}/>
            ))}

            {selectedPerson === null && storeCtx.blindUsers.map((item, index) => (
                <ProfileItem color="white" value={item} key={index}/>
            ))}
            <br/>

        </div>
    );
};

export default AllProfiles;