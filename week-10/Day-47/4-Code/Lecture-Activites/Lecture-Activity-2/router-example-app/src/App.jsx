import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";

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
