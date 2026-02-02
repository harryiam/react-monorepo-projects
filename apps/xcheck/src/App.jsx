import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const checkNumber = () => {
    const num = Number(number);

    if (isNaN(num)) {
      setMessage("Not a valid number!");
      return;
    }

    if (num % 2 === 0) {
      setMessage(`The number ${num} is even!`);
    } else {
      setMessage(`Oops, ${num} is odd!`);
    }
  };

  return (
    <div style={{ padding: 30, fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>Even/Odd Checker App</h1>

      <input
        type="text"
        name="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ padding: 8, width: 150 }}
      />
      <br />
      <br />
      <button onClick={checkNumber}>Check</button>

      {message && (
        <p style={{ marginTop: 20, fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}
