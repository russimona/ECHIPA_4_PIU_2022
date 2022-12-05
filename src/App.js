import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import MainMenu from "./blind/presentational/principal_menu.js"
import CameraPage from './blind/presentational/camera.js'
import ConfirmationPage from './blind/presentational/confirmation'
import EmergencyPage from './blind/presentational/emergency'

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route exact path="/blindMenu" element={<MainMenu />} />
                  <Route exact path="/camera" element={<CameraPage />} />
                  <Route exact path="/confirm" element={<ConfirmationPage />} />
                  <Route exact path="/emergency" element={<EmergencyPage />} />
        </Routes>
      </div>
    </Router>
  );
}
