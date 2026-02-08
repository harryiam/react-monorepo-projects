import React from "react";

export default function App() {
  const digits = ["0","1","2","3","4","5","6","7","8","9"];

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Drag & Drop Digits</h1>

      <p>Drag the boxes to reorder the digits 0–9.</p>
      <p>Tip: Try reordering to make 0123456789 or reverse it!</p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px"
        }}
      >
        {digits.map((d) => (
          <div
            key={d}
            draggable
            style={{
              width: 40,
              height: 40,
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              cursor: "grab"
            }}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}
