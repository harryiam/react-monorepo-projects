import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    place: "",
    name: "",
    age: "",
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.place || !form.name || !form.age) return;

    setPeople([...people, form]);
    setForm({ place: "", name: "", age: "" });
  };

  const handleRemove = (index) => {
    const updated = people.filter((_, i) => i !== index);
    setPeople(updated);
  };

  const handleClear = () => {
    setPeople([]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Add People to Table</h1>

      <input
        name="place"
        placeholder="Place"
        value={form.place}
        onChange={handleChange}
      />

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="age"
        placeholder="Age"
        type="number"
        value={form.age}
        onChange={handleChange}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <div style={{ marginTop: 20 }}>
        {people.length === 0 ? (
          <p>No entries yet</p>
        ) : (
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                <th>Place</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {people.map((p, i) => (
                <tr key={i}>
                  <td>{p.place}</td>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                  <td>
                    <button onClick={() => handleRemove(i)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
