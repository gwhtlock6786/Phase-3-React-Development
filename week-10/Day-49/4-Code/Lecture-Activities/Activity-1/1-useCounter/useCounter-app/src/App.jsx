import { useCounter } from "./hooks/useCounter";
import "./App.css";

function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <section id="center">
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
      <section id="spacer"></section>
    </>
  );
}

export default App;
