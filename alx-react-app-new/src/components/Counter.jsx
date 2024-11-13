// src/components/Counter.jsx
import React, { useState } from "react";

function Counter() {
  // Initialize the count state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: "0 11px" }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
