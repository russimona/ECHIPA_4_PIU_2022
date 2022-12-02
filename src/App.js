import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import AddRoute from "./pages/admin/add-route/AddRoute";
import AddUser from "./pages/admin/create-user/AddUser";
import HomeAdmin from "./pages/admin/home/home";
import PlanMenu from "./pages/admin/plan-menu/plan-menu";

import Login from "./pages/login";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path='/admin-home-page' element={<HomeAdmin/>} />
          <Route exact path='/admin-create-user' element={<AddUser/>} />
          <Route exact path='/admin-add-route' element={<AddRoute/>} />
          <Route exact path='/admin-plan-daily-menu' element={<PlanMenu/>} />
        </Routes>
      </div>
    </Router>
  );
}
