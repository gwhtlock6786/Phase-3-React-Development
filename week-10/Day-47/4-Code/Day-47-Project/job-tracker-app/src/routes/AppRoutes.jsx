import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import JobsPage from "../pages/JobsPage/JobsPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/jobs" element={<JobsPage />} />
    </Routes>
  );
};

export default AppRoutes;
