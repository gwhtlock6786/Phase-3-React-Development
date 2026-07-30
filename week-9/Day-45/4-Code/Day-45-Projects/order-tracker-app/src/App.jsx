import "./App.css";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import sampleOrders from "./data/sample-orders";

function App() {
  return (
    <section className="app-section">
      <Header />
      <Stats pending={5} completed={6} revenue={110.23} />
      <DashboardLayout orders={sampleOrders} />
    </section>
  );
}

export default App;
