import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import AddRoute from "./pages/admin/add-route/AddRoute";
import AddUser from "./pages/admin/create-user/AddUser";
import HomeAdmin from "./pages/admin/home/home";
import PlanMenu from "./pages/admin/plan-menu/plan-menu";
import HomeVolunteer from "./pages/volunteer/home/home";
import Notifications from "./pages/volunteer/notification/Notifications";
import Reports from "./pages/volunteer/report/Reports";
import ReportForm from "./pages/volunteer/report/ReportForm";
import Login from "./pages/login";
import MainMenu from "./blind/presentational/principal_menu.js";
import CameraPage from "./blind/presentational/camera.js";
import ConfirmationPage from "./blind/presentational/confirmation";
import EmergencyPage from "./blind/presentational/emergency";
import AddBlindPerson from "./pages/admin/create-user/add-blind-person/AddBlindPerson.js";
import AddVolunteer from "./pages/admin/create-user/add-volunteer/AddVolunteer.js";
import AddPath from "./pages/admin/add-route/AddPath";

export default function App() {
  const [addPath, setAddPath] = useState(false);
  const [blindUsers, setBlindUsers] = useState([
    {
      email: "userb1@gmail.com",
      name: "userb1",
      password: "userb1",
      phone: "0723456789",
      postalCode: "500410",
    },
    {
      email: "userb2@gmail.com",
      name: "userb1",
      password: "userb2",
      phone: "0723456789",
      postalCode: "500412",
    },
    {
      email: "userb3@gmail.com",
      name: "userb1",
      password: "userb3",
      phone: "0723456789",
      postalCode: "500413",
    },
    {
      email: "userb4@gmail.com",
      name: "userb1",
      password: "userb4",
      phone: "0723456789",
      postalCode: "500414",
    },
    {
      email: "userb5@gmail.com",
      name: "userb1",
      password: "userb5",
      phone: "0723456789",
      postalCode: "500415",
    },
  ]);

  const [route, setRoute] = useState([
    {
      emailUser: "userb1@gmail.com",
      departure: "place12",
      arrival: "place22",
    },
    {
      emailUser: "userb1@gmail.com",
      departure: "place13",
      arrival: "place23",
    },
  ]);
  const [currentUser, setCurrentUser] = useState({
    email: "userb3@gmail.com",
    name: "userb1",
    password: "userb3",
    phone: "0723456789",
    postalCode: "500413",
  });

  const [currentPath, setCurrentPath] = useState([
    {
      emailUser: "uderb1@gmail.com",
      departure: "place11",
      arrival: "place21",
    },
  ]);

  const [volunteers, setVolunteers] = useState([
    {
      email: "userv1@gmail.com",
      name: "userv1",
      password: "userv1",
      phone: "0723456789",
    },
    {
      email: "userv2@gmail.com",
      name: "userv1",
      password: "userv2",
      phone: "0723456789",
    },
    {
      email: "userv3@gmail.com",
      name: "userv1",
      password: "userv3",
      phone: "0723456789",
    },
    {
      email: "userv4@gmail.com",
      name: "userv1",
      password: "userv4",
      phone: "0723456789",
    },
    {
      email: "userv5@gmail.com",
      name: "userv1",
      password: "userv5",
      phone: "0723456789",
    },
  ]);

  useEffect(() => {
    if (addPath) {
      const pathAux = route.filter(
        (path) => path.emailUser === currentUser.email
      );
      // console.log("pathaux",pathAux);
      setCurrentPath(pathAux);
      if(addPath){
        setAddPath(false)
        window.location.href = "/add-path";
      }
    }
  }, [currentUser]);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/admin-home-page" element={<HomeAdmin />} />
          <Route
            exact
            path="/admin-create-user"
            element={
              <AddUser blindUsers={blindUsers} volunteers={volunteers} />
            }
          />
          <Route
            exact
            path="/admin-add-route"
            element={
              <AddRoute
                blindUsers={blindUsers}
                setCurrentUser={setCurrentUser}
                setAddPath={setAddPath}
              />
            }
          />
          <Route
            exact
            path="/add-path"
            element={<AddPath user={currentUser} path={currentPath} />}
          />
          <Route exact path="/admin-plan-daily-menu" element={<PlanMenu />} />
          <Route exact path="/add-volunteer" element={<AddVolunteer />} />
          <Route exact path="/add-blind-person" element={<AddBlindPerson />} />
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route exact path="/blindMenu" element={<MainMenu />} />
          <Route exact path="/camera" element={<CameraPage />} />
          <Route exact path="/confirm" element={<ConfirmationPage />} />
          <Route exact path="/emergency" element={<EmergencyPage />} />
          <Route
            exact
            path="/volunteer-home-page"
            element={<HomeVolunteer />}
          />
          <Route
            exact
            path="/volunteer-notifications"
            element={<Notifications />}
          />
          <Route exact path="/volunteer-reports" element={<Reports />} />
          <Route
            exact
            path="/volunteer-create-report"
            element={<ReportForm />}
          />
        </Routes>
      </div>
    </Router>
  );
}
