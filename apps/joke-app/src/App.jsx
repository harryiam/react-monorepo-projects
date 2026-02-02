import { useState } from "react";

export default function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJoke = async () => {
    setLoading(true);
    setError("");
    setJoke(null);

    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      setJoke(data);
    } catch (err) {
      setError("Could not fetch a joke. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Random Joke</h1>

      <p>Click the button to fetch a fresh one.</p>

      {!error && (
        <button onClick={fetchJoke} disabled={loading}>
          {loading ? "Fetching..." : "Fetch joke"}
        </button>
      )}

      {error && (
        <>
          <p>{error}</p>
          <button onClick={fetchJoke}>Try again</button>
        </>
      )}

      {joke && (
        <div style={{ marginTop: 20 }}>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </div>
      )}
    </div>
  );
}
