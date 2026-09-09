import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import Subscription from "../pages/Subcription";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Public layout routes*/}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/subscription" element={<Subscription />} />
        </Route>

        {/*Auth routes*/}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/*Protected routes*/}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Route>

        {/*Redirects & fallback*/}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;