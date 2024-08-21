import React, { useState, useEffect } from "react";
import authService from "../auth";
import './auth.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    authService.login(username, password).then(
      (response) => {
        setMessage("Login successful");
        setIsLoggedIn(true);
      },
      (error) => {
        setMessage("Invalid credentials");
        setIsLoggedIn(false);
      }
    );
  };

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    setMessage("You have been logged out.");
  };

  return (
    <div className="auth-container">
      {!isLoggedIn ? (
        <form className="auth-form" onSubmit={handleLogin}>
          <h2 className="auth-title">Login</h2>
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
          <button type="submit" className="auth-button">Login</button>
          {message && <div className="auth-message">{message}</div>}
        </form>
      ) : (
        <div className="auth-form"> {/* Reuse auth-form class for consistent styling */}
          <p className="auth-message">{message}</p>
          <button onClick={handleLogout} className="auth-button">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;