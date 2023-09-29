import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container unselectable">
      <h1>Counter App</h1>
      <p className="counter">Count: {count}</p>
      <div className="container-btn">
        <button onClick={decrement} className="btn red">Decrement</button>
        <button onClick={increment} className="btn green">Increment</button>
      </div>
    </div>
  );
}

export default App;
