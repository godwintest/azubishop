// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const isAuthenticated = true; // Simplified authentication
    if (isAuthenticated) {
      // localStorage.setItem("isAuthenticated", true);
      // Store user data in local storage
      const userData = { email, isAuthenticated: true };
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/cart");
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleCreateAccount = () => {
    navigate("/registration");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Sign in</h2>
      {error && <p className="login-error">{error}</p>}
      <form className="login-form">
        <label className="login-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <label className="login-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="button" onClick={handleLogin} className="login-button">
          Sign in
        </button>
      </form>
      <p className="create-account">
        Don't have an account?{" "}
        <span onClick={handleCreateAccount} className="create-account-link">
          Create one
        </span>
        .
      </p>
    </div>
  );
};

export default Login;
