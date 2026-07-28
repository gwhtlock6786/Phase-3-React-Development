import Counter from "./components/Counter/Counter";
import Toggle from "./components/Toggle/Toggle";
import StockTracker from "./components/StockTracker/StockTracker";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import TipCalculator from "./components/TipCalculator/TipCalculator";

function App() {
  return (
    <div className="App">
      <Counter />

      <hr className="fancy-divider" />

      <Toggle />

      <hr className="fancy-divider" />

      <StockTracker />

      <hr className="fancy-divider" />

      <FeedbackForm />

      <hr className="fancy-divider" />

      <TipCalculator />
    </div>
  );
}

export default App;
