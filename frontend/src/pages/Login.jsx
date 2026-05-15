import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuth();

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.email || !form.password) {
      alert("Enter your email and password.");
      return;
    }

    await login(form.email, form.password);

    if (searchParams.get("next") === "sell") {
      navigate("/dashboard?tab=sell");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <h1>Sign in</h1>
        <p>Access your bids, watchlist, and selling dashboard.</p>

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

          <button type="submit">Sign in</button>
        </form>

        <p className="auth-switch">
          No account yet? <Link to="/register">Create one</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
