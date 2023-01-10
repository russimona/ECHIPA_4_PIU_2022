import React, {useState} from "react";

const StoreContext = React.createContext({
    blindUsers: [],
    reports: [],
    notifications: [],
    confirmNotification: (email) => {},
    addNewReport: (report) => {},
});

const blindUsers = [{
    email: "joe.doe@piu.com",
    name: "Joe Doe",
    address: "address Joe Doe",
    phone: "phone Joe Doe",
    vision: "partial vision"
},
    {
        email: "jane.doe@piu.com",
        name: "Jane Doe",
        address: "address Jane Doe",
        phone: "phone Jane Doe",
        vision: "no vision"
    }, {
        email: "john.smith@piu.com",
        name: "John Smith",
        address: "address John Smith",
        phone: "phone John Smith",
        vision: "no vision"

    }];
const initialReports = [{
    volunteerName: "Volunteer 1",
    date: "2022-09-24",
    email: "john.smith@piu.com",
    text: "Report on date 11.07.2021 snjsc nsjjdc hsdhsnsj hssbdhc.",
},
    {
        volunteerName: "Volunteer 2",
        date: "2022-09-25",
        email: "john.smith@piu.com",
        text: "Report on date 11.07.2021 snjsc nsjjdc hsdhsnsj hssbdhc.",
    },
    {
        volunteerName: "Volunteer 1",
        date: "2022-09-23",
        email: "jane.doe@piu.com",
        text: "Report on date 11.07.2021 snjsc nsjjdc hsdhsnsj hssbdhc.",
    }];
const initialNotifications = [{
    email: "john.smith@piu.com",
    urgencyLevel: "High",
    confirmed: false,
},
    {
        email: "jane.doe@piu.com",
        urgencyLevel: "Medium",
        confirmed: false,
    },
    {
        email: "joe.doe@piu.com",
        urgencyLevel: "Low",
        confirmed: false,
    },];

export const StoreContextProvider = (props) => {
    const [reports, setReports] = useState(initialReports);
    const [notifications, setNotifications] = useState(initialNotifications);

    const confirmHandle = email => {
        const newNotifications = notifications.filter(x => x.email !== email);
        const modifiedNotification = notifications.find(element => element.email === email);
        modifiedNotification.confirmed = true
        setNotifications([
            ...newNotifications,
            modifiedNotification
        ]);
    }

    const addNewReport = report => {
        setReports([
            ...reports,
            report
        ]);
    }


    const contextValue = {
        blindUsers: blindUsers,
        reports: reports,
        notifications: notifications,
        confirmNotification: confirmHandle,
        addNewReport: addNewReport
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContext;