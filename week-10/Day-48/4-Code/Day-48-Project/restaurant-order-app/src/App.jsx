import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Heaader/Header";
import AppRoutes from "./routes/AppRoutes";
import { addItemUtil } from "./utils/shoppingCartUtils";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  function addItem(menuItem) {
    setCart((currentCart) => addItemUtil(currentCart, menuItem));
  }
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes addItem={addItem} cart={cart} />
      </BrowserRouter>
    </>
  );
}

export default App;
