import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

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

    if (!form.name || !form.email || !form.password) {
      alert("Complete all fields.");
      return;
    }

    localStorage.setItem("mpumalanga_registered_user", JSON.stringify(form));
    alert("Account created. You can now sign in.");
    navigate("/login");
  };

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <h1>Create an account</h1>
        <p>Start bidding, selling, and tracking auction deals.</p>

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

          <button type="submit">Create account</button>
        </form>

        <p className="auth-switch">
          Already registered? <Link to="/login">Sign in</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
