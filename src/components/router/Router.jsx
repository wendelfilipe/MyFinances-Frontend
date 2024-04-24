import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../login/Login';
import Home from '../home/Home';
import CreateUser from '../login/CreateUser';

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
        <Route
            path='/creteuser'
            element={<CreateUser />}
        />
    </Routes>
  );
};

export default RouterComponent;