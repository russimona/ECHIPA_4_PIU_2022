import React from "react";
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
import BlindMenu from "./blind/logic/MenuLogic";
import CameraPage from "./blind/logic/CameraLogic";
import ConfirmationPage from "./blind/logic/CofirmationLogic";
import EmergencyInputPage from "./blind/logic/EmergencyLogic";
import RoutesdMenuLogic from "./blind/logic/RoutesLogic";
import OrderFoodPage from "./blind/logic/OrderFoodLogic"

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/admin-home-page" element={<HomeAdmin />} />
          <Route exact path="/admin-create-user" element={<AddUser />} />
          <Route exact path="/admin-add-route" element={<AddRoute />} />
          <Route exact path="/admin-plan-daily-menu" element={<PlanMenu />} />
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route exact path="/blindMenu" element={<BlindMenu />} />
          <Route exact path="/camera/:action" element={<CameraPage />} />
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
