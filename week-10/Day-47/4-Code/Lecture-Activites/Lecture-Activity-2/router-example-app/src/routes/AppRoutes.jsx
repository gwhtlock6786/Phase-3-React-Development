import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import EmployeeListPage from "../pages/EmployeeListPage";
import EmployeeDetailsPage from "../pages/EmployeeDetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/employee-list" element={<EmployeeListPage />} />
      <Route path="/employee-list/:id" element={<EmployeeDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
