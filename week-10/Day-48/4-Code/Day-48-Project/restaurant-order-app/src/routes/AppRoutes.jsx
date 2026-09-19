import { Routes, Route } from "react-router-dom";
import ShoppingCartPage from "../pages/ShoppingCartPage.jsx";
import MenuPage from "../pages/MenuPage.jsx";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/cart" element={<ShoppingCartPage />}></Route>
      <Route path="/menu" element={<MenuPage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
