import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      setUser(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setUser(null);

      const res = await fetch(`https://api.github.com/users/${username}`);

      if (!res.ok) throw new Error("Not found");

      const data = await res.json();
      setUser(data);
    } catch {
      setError("User not found. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") fetchUser();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ width: 350, textAlign: "center" }}>
        <h1>GitHub User Finder</h1>
        <p>Search a GitHub username to see profile details.</p>

        <input
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ padding: 8, width: "70%" }}
        />

        <br />
        <br />

        <button onClick={fetchUser} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>

        {error && (
          <p style={{ color: "red", marginTop: 10 }}>{error}</p>
        )}

        {user && (
          <div style={{ marginTop: 20 }}>
            <img
              src={user.avatar_url}
              alt={user.login}
              width={100}
              style={{ borderRadius: "50%" }}
            />
            <h2>{user.name}</h2>
            <p>@{user.login}</p>
            {user.location && <p>{user.location}</p>}
            {user.bio && <p>{user.bio}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
