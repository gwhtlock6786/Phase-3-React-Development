import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Heaader/Header";
import AppRoutes from "./routes/AppRoutes";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    cart,
    addItem,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    calculateSubtotal,
    calculateTax,
    calculateTotal,
    calculateTotalItemsInCart,
  } = useCart();

  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes
          cart={cart}
          addItem={addItem}
          removeItem={removeItem}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          calculateSubtotal={calculateSubtotal}
          calculateTax={calculateTax}
          calculateTotal={calculateTotal}
          calculateTotalItemsInCart={calculateTotalItemsInCart}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
