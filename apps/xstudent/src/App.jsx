import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !grade) return;

    const newStudent = {
      id: Date.now(),
      name,
      age,
      grade,
    };

    setStudents([...students, newStudent]);
    setName("");
    setAge("");
    setGrade("");
  };

  const handleRemove = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleClear = () => {
    setName("");
    setAge("");
    setGrade("");
  };

  return (
    <div style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>Student Entry Form</h1>
      <p>Add students and review the list below.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            name="name"
            placeholder="e.g. MS Dhoni"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Age</label>
          <br />
          <input
            name="age"
            placeholder="e.g. 14"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label>Grade</label>
          <br />
          <select
            name="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="">Select grade</option>
            {[1,2,3,4,5,6,7,8,9,10].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        <br />

        <button type="submit">Add Student</button>
        <button type="button" onClick={handleClear} style={{ marginLeft: 10 }}>
          Clear
        </button>
      </form>

      <hr />

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <ul>
          {students.map((s) => (
            <li key={s.id}>
              <strong>{s.name}</strong> — {s.age} — Class {s.grade}{" "}
              <button onClick={() => handleRemove(s.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
