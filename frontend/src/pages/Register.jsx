import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Register screen is working. Backend registration is not connected yet.");
  };

  return (
    <section className="page form-page">
      <h1>Register</h1>
      <p>Create account layout is working. Backend registration still needs to be connected.</p>

      <form onSubmit={handleSubmit} className="form-card">
        <label>
          Name
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@example.com"
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>

        <button type="submit">Create Account</button>
      </form>
    </section>
  );
}

export default Register;
