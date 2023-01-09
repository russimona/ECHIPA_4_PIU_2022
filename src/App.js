import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import AddBlindPerson from "./pages/admin/create-user/add-blind-person/AddBlindPerson.js";
import AddVolunteer from "./pages/admin/create-user/add-volunteer/AddVolunteer.js";
import AddRoute from "./pages/admin/add-route/AddRoute";
import AddUser from "./pages/admin/create-user/AddUser";
import HomeAdmin from "./pages/admin/home/home";
import PlanMenu from "./pages/admin/plan-menu/plan-menu";
import HomeVolunteer from "./pages/volunteer/home/home";
import Notifications from "./pages/volunteer/notification/Notifications";
import Reports from "./pages/volunteer/report/Reports";
import ReportForm from "./pages/volunteer/report/ReportForm";
import Login from "./pages/login";

import CameraLogic from "./blind/logic/CameraLogic.js";
import ConfirmationPage from "./blind/logic/CofirmationLogic.js";
import AddPath from "./pages/admin/add-route/AddPath";
import BlindMenu from "./blind/logic/MenuLogic";
import RoutesdMenuLogic from "./blind/logic/RoutesLogic";
import OrderFoodPage from "./blind/logic/OrderFoodLogic";
import EmergencyInputPage from "./blind/logic/EmergencyLogic";

export default function App() {
  const [volunteers, setVolunteers] = useState([
    {
      email: "userv1@gmail.com",
      name: "userv1",
      password: "userv1",
      phone: "0723456789",
    },
  ]);

  const [blindUsers, setBlindUsers] = useState([
    {
      email: "userb1@gmail.com",
      name: "userb1",
      password: "userb1",
      phone: "0723456789",
      postalCode: "500410",
    },
  ]);

  const [path, setPath] = useState([
    {
      emailUser: "userb1@gmail.com",
      departure: "A",
      arrival: "B",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

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
              <AddUser volunteers={volunteers} blindUsers={blindUsers} />
            }
          />
          <Route
            exact
            path="/admin-add-route"
            element={
              <AddRoute
                blindUsers={blindUsers}
                setSelectedUser={setSelectedUser}
              />
            }
          />

          <Route
            exact
            path="/add-path"
            element={
              <AddPath
                path={path}
                setPath={setPath}
                selectedUser={selectedUser}
              />
            }
          />
          <Route exact path="/admin-plan-daily-menu" element={<PlanMenu />} />
          <Route
            exact
            path="/add-volunteer"
            element={<AddVolunteer setVolunteers={setVolunteers} />}
          />
          <Route
            exact
            path="/add-blind-person"
            element={<AddBlindPerson setBlindUsers={setBlindUsers} />}
          />

          <Route exact path="/blindMenu" element={<BlindMenu />} />
          <Route exact path="/camera/:action" element={<CameraLogic />} />
          <Route exact path="/confirm/:option" element={<ConfirmationPage />} />
          <Route exact path="/emergency" element={<EmergencyInputPage />} />
          <Route exact path="/travel" element={<RoutesdMenuLogic />} />
          <Route exact path="/orderfood" element={<OrderFoodPage />} />
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
