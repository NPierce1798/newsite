import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/users/";

const register = (username, password) => {
    return axios.post(API_URL + 'register/', {
        username,
        password,
    });
};

const login = (username, password) => {
    return axios.post(API_URL + 'token/', {
        username,
        password,
    })
    .then((response) => {
        if (response.data.access) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

// Assign the object to a variable before exporting
const authService = {
    register,
    login,
    logout,
    getCurrentUser
};

export default authService;
