import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../login/Login';
import Home from '../home/Home';

import 'bootstrap/dist/css/bootstrap.min.css'; 

const RouterComponent = () => {
  return (
    <Routes>
        <Route 
            path="/" 
            element={<Login />} 
        />
        <Route 
            path="/home" 
            element={<Home />} 
        />
    </Routes>
  );
};

export default RouterComponent;