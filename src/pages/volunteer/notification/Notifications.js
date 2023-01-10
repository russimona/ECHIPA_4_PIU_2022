import NavbarVolunteer from "../navbar";
import NotificationItem from "./components/NotificationItem";
import {useContext} from "react";
import StoreContext from "../StoreContext";

const Notifications = () => {
    const storeCtx = useContext(StoreContext);

  return (
    <div
      style={{
        backgroundColor: "#B3B3CC",
        width: "640vw",
        height: "640vh"
      }}
    >
      <NavbarVolunteer />
      <div
        style={{
          backgroundColor: "#B3B3CC",
          height: "100%",
          width: "100%"
        }}
      >
        {storeCtx.notifications.filter(item => !item.confirmed).map((item) => (
          <NotificationItem value={item} key={item.email} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
