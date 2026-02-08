import React from "react";

export default function App() {
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Snake & Ladders</h1>

      <p>
        Exact 100 is required to win. Land on a ladder to climb up, a snake
        to slide down.
      </p>

      <h3>Turn: P1</h3>

      <div>
        <span style={{ marginRight: 10 }}>P1</span>
        <span>P2</span>
      </div>

      <div style={{ marginTop: 20 }}>
        <button>Roll Dice</button>
        <button style={{ marginLeft: 10 }}>Reset</button>
      </div>
    </div>
  );
}
