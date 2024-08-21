import React, { useState } from "react";
import authService from "../auth";
import './auth.css'

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const handleRegister = (e) => {
      e.preventDefault();  // Prevents the default form submission
  
      authService.register(username, password).then(
        (response) => {
          setMessage("Registration successful");
          // Handle successful registration (e.g., redirect, notify user)
        },
        (error) => {
          setMessage("Registration failed");
          // Handle registration error
        }
      );
    };
  
    return (
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleRegister}>
          <h2 className="auth-title">Register</h2>
          <input
            type="text"
            className="auth-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="auth-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="auth-button">Register</button>
          {message && <div className="auth-message">{message}</div>}
        </form>
      </div>
    );
  };
  
  export default Register;