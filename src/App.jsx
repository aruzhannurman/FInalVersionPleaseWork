import React, { useState } from 'react';
import './App.css';
// import { FaUserCircle, FaHome, FaCog, FaBell } from 'react-icons/fa';
import  Main from './Main.js'
import { useNavigate } from "react-router-dom";
// import vec5 from './photos/Vector.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Routes } from 'react-router-dom';

import Home from './Main.js';
import Dashboard from './Dashboard.js';





import  { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
function App() {
  
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </div>
);
}

//---------------------------------------------------------------

export default App;


