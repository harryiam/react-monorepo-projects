import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    college: "",
    email: "",
    password: "",
    address: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err = {};

    if (!form.name.trim()) {
      err.name = "Name is required";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      err.email = "Enter a valid email address";
    }

    if (form.password.length < 8) {
      err.password = "Password must be at least 8 characters";
    }

    setErrors(err);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label><br/>
          <input name="name" onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Username</label><br/>
          <input name="username" onChange={handleChange} />
        </div>

        <div>
          <label>College</label><br/>
          <input name="college" onChange={handleChange} />
        </div>

        <div>
          <label>Email</label><br/>
          <input name="email" onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Password</label><br/>
          <input
            name="password"
            type="password"
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <label>Address</label><br/>
          <input name="address" onChange={handleChange} />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
