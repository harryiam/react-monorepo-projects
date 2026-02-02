import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (!item.trim()) return;
    setList([...list, item]);
    setItem("");
  };

  const handleRemove = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Items to List</h1>

      <input
        name="item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {list.map((val, index) => (
          <li key={index}>
            {val}{" "}
            <button onClick={() => handleRemove(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
