import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StatsPage from "../pages/StatsPage";
import AddShiftPage from "../pages/AddShiftPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/stats" element={<StatsPage />}></Route>
        <Route path="/addShift" element={<AddShiftPage />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
