import React, { useState } from "react";
type CounterState = {
  count: number;
};
import "./App.css";

const App: React.FC = () => {
  const [state, setState] = useState<CounterState>({ count: 0 });

  const decrement = () => {
    setState({ count: state.count - 1 });
  };

  const increment = () => {
    setState({ count: state.count + 1 });
  };

  const reset = () => {
    setState({ count: 0 });
  };

  return (
    <div className="Counter-app">
      <h2 className="stateCount">
        Counter <br></br>
        <span>{state.count}</span>
      </h2>
      <button
        onClick={decrement}
        style={{ height: "20px", width: "70px", margin: "0px 15px 0px 0px" }}
      >
        decrease
      </button>

      <button onClick={reset} style={{ height: "20px", width: "60px" }}>
        Reset
      </button>

      <button
        onClick={increment}
        style={{ height: "20px", width: "70px", margin: "0px 0px 0px 15px" }}
      >
        increase
      </button>
    </div>
  );
};

export default App;
