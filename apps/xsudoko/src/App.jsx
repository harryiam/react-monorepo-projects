import React from "react";

export default function App() {
  const board = Array.from({ length: 81 }, (_, i) => i);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Sudoku Validator</h1>
      <p>Enter numbers 1-9 and validate the board.</p>

      <div
        className="board"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 40px)",
          gap: "5px",
          justifyContent: "center",
          margin: "20px 0"
        }}
      >
        {board.map((_, i) => (
          <input
            key={i}
            className="cell"
            maxLength={1}
            style={{
              width: 40,
              height: 40,
              textAlign: "center",
              fontSize: 18
            }}
          />
        ))}
      </div>

      <button>Validate</button>
      <button style={{ marginLeft: 10 }}>Clear</button>
    </div>
  );
}
