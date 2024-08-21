import React, { useState, useEffect } from "react";
import authService from "../auth";
import "./auth.css";

const Logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
  };

  return (
    <div className="auth-container">
      {isLoggedIn ? (
        <div>
          <p className="auth-message">You are logged in.</p>
          <button onClick={handleLogout} className="auth-button">
            Logout
          </button>
        </div>
      ) : (
        <p className="auth-message">You are not logged in.</p>
      )}
    </div>
  );
};

export default Logout;
