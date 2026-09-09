import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Subscription from "../pages/Subcription";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Public layout routes*/}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/*Redirects & fallback*/}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
