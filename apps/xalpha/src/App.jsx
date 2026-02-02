import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleClick = (letter) => {
    setText((prev) => prev + letter);
  };

  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  return (
    <div style={{ textAlign: "center", padding: 30, fontFamily: "sans-serif" }}>
      <h1>Alphabet Buttons</h1>
      <p>Click letters</p>

      <div
        className="output"
        style={{
          border: "1px solid black",
          padding: 10,
          minHeight: 30,
          width: 200,
          margin: "10px auto",
        }}
      >
        {text}
      </div>

      <div style={{ maxWidth: 500, margin: "auto" }}>
        {letters.map((l) => (
          <button
            key={l}
            className="key"
            onClick={() => handleClick(l)}
            style={{ margin: 4, padding: "8px 12px" }}
          >
            {l}
          </button>
        ))}
      </div>

      <br />

      <button onClick={handleBackspace}>Backspace</button>
    </div>
  );
}
