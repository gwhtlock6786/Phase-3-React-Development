// import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Heaader/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  function addItem(menuItem) {
    console.log("Hello", menuItem);
  }
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes addItem={addItem} />
      </BrowserRouter>
    </>
  );
}

export default App;
