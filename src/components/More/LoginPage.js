import React from "react";
import '../../App.css';
import './auth.css'

import Navbar from "../Navbar";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

function LoginPage () {
    return (
        <div className="App">
            <div className="login__container">
            <div className="login__container-inner">
                <Navbar />
            <Login />
            <Register />
            </div>
            </div>
        </div>
    );
}

export default LoginPage;