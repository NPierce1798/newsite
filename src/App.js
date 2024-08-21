import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/Home/HomePage';
import LearnPage from './components/LearnPage';

import GamePage from './components/Portfolio/AdvGamePage'
import LoginPage from './components/More/LoginPage';


function App() {
  return (
<Router>
  <Routes>
    <Route exact path="/" Component={HomePage} />
    <Route path="/learn" Component={LearnPage} />
    <Route path="/portfolio/ai-game" Component={GamePage} />
    <Route path="/login" Component={LoginPage} />
  </Routes>
</Router>
  );
}

export default App;
