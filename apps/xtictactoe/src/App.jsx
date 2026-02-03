import { useState } from "react";

function App() {
  const [scores, setScores] = useState({
    x: 0,
    o: 0,
    draws: 0,
  });

  const handleRestart = () => {
    // round reset logic can go here later
    console.log("Round restarted");
  };

  const handleResetAll = () => {
    setScores({ x: 0, o: 0, draws: 0 });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Tic-Tac-Toe</h1>

      <div>
        <p>X: {scores.x}</p>
        <p>Draws: {scores.draws}</p>
        <p>O: {scores.o}</p>
      </div>

      <button onClick={handleRestart}>
        Restart Round
      </button>

      <button onClick={handleResetAll} style={{ marginLeft: 10 }}>
        Reset All
      </button>
    </div>
  );
}

export default App;
