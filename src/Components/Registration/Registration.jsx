// Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Create an Account</h2>
      {error && <p className="register-error">{error}</p>}
      <form className="register-form">
        <label className="register-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
        />
        <label className="register-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
        />
        <button
          type="button"
          onClick={handleRegister}
          className="register-button"
        >
          Create an Account
        </button>
      </form>
    </div>
  );
};

export default Registration;
