import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({
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
    alert("Login screen is working. Backend login is not connected yet.");
  };

  return (
    <section className="page form-page">
      <h1>Login</h1>
      <p>Use this screen to test the login layout. Backend authentication still needs to be connected.</p>

      <form onSubmit={handleSubmit} className="form-card">
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

        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
