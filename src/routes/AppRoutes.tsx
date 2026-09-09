import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
import SubscriptionPage from "../pages/Subcription";
import ContactPage from "../pages/Contact";

function AppRoutes() {
  return (
    <BrowserRouter basename="/gymx">
      <Routes>
        {/*Public layout routes*/}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/*Redirects & fallback*/}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
