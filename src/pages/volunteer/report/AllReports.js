import {useContext, useState} from "react";
import StoreContext from "../StoreContext";
import NavbarVolunteer from "../navbar";
import classes from "./AllReports.module.css";
import Select from "react-select";
import ReportItem from "./ReportItem";


const AllReports = () => {
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
            <NavbarVolunteer />
            <div className={classes.searchContainer}>
                <div className={classes.label}>
                    See reports for user:
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

                <br/>
                {selectedPerson !== null && storeCtx.reports.filter(x => x.email === selectedPerson.value).map((item, index) => (
                    <ReportItem color="white" value={item} key={index} />
                ))}

                {selectedPerson === null && storeCtx.reports.map((item, index) => (
                    <ReportItem color="white" value={item} key={index} />
                ))}
                <br/>

        </div>
    );
};

export default AllReports;