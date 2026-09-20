import { Routes, Route } from "react-router-dom";
import ShoppingCartPage from "../pages/ShoppingCartPage.jsx";
import MenuPage from "../pages/MenuPage.jsx";
const AppRoutes = ({ addItem, cart }) => {
  return (
    <Routes>
      <Route path="/cart" element={<ShoppingCartPage cart={cart} />}></Route>
      <Route path="/menu" element={<MenuPage addItem={addItem} />}></Route>
    </Routes>
  );
};

export default AppRoutes;
