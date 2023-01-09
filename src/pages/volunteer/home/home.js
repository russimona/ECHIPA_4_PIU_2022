//components
import NavbarVolunteer from "../navbar";

const HomeVolunteer = () => {
  return (
    <div
        style={{
            width: "640vw",
            height: "640vh"
        }}>
      <NavbarVolunteer />
      <div
        style={{
          backgroundColor: "#B3B3CC",
            height: "100%",
            width: "100%"
        }}
      >
        Homepage
      </div>
    </div>
  );
};

export default HomeVolunteer;
