import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import HomePage from '../home/HomePage';
import CreateUserPage from '../login/CreateUserPage';

import 'bootstrap/dist/css/bootstrap.min.css'; 

const RouterComponent = () => {
  return (
    <Routes>
        <Route 
            path="/" 
            element={<LoginPage />} 
        />
        <Route 
            path="/homepage" 
            element={<HomePage />} 
        />
        <Route
            path='/createuserpage'
            element={<CreateUserPage />}
        />
    </Routes>
  );
};

export default RouterComponent;