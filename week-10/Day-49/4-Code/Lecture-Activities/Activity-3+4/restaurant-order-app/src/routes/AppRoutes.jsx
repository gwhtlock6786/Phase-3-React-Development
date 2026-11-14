import { Routes, Route } from "react-router-dom";

import ShoppingCartPage from "../pages/ShoppingCartPage.jsx";
import MenuPage from "../pages/MenuPage.jsx";

const AppRoutes = ({
  cart,
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  calculateSubtotal,
  calculateTax,
  calculateTotal,
  calculateTotalItemsInCart,
}) => {
  return (
    <Routes>
      <Route
        path="/cart"
        element={
          <ShoppingCartPage
            cart={cart}
            removeItem={removeItem}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            calculateSubtotal={calculateSubtotal}
            calculateTax={calculateTax}
            calculateTotal={calculateTotal}
          />
        }
      />

      <Route
        path="/menu"
        element={
          <MenuPage
            addItem={addItem}
            calculateSubtotal={calculateSubtotal}
            calculateTotalItemsInCart={calculateTotalItemsInCart}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
