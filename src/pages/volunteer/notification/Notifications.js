import NavbarVolunteer from "../navbar";
import NotificationItem from "./components/NotificationItem";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      name: "John Smith",
      urgencyLevel: "High",
    },
    {
      id: 2,
      name: "Jane Doe",
      urgencyLevel: "Medium",
    },
    {
      id: 3,
      name: "Joe Doe",
      urgencyLevel: "Low",
    },
  ];

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
        {notifications.map((item) => (
          <NotificationItem value={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
