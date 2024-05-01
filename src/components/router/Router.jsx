import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import HomePage from '../home/HomePage';
import CreateUserPage from '../login/CreateUserPage';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import WalletHome from '../home/walletHome/WalletHome';
import CreateWallet from '../wallet/CreateWallet';
import NavBarForm from '../forms/navBar/NavBarForm';


const RouterComponent = (propsRoute) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", "false");
    };

    // Componente de rota protegida
    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
    };

  return (
    <div>
        <Routes>
        <Route 
            path="/" 
            element={<LoginPage onLogin={handleLogin} />} 
        />
        <Route
            path='/createuserpage'
            element={<CreateUserPage />}
        />
        <Route
                path="/homepage"
                element={isLoggedIn ? <HomePage /> : <Navigate to="/" />}
            />
        <Route
            path="/wallethome"
            element={isLoggedIn ? <WalletHome /> : <Navigate to="/" />}
        />
        <Route
            path="/createwallet"
            element={isLoggedIn ? <CreateWallet /> : <Navigate to="/" />}
        />
        </Routes>
        <NavBarForm 
            onLogout={handleLogout}    
        />
    </div>
  );
};

export default RouterComponent;