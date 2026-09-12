import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
