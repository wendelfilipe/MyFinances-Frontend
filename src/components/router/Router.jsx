import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import HomePage from '../home/HomePage';
import CreateUserPage from '../login/CreateUserPage';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import WalletHome from '../home/walletHome/WalletHome';
import CreateWallet from '../wallet/CreateWallet';

const RouterComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();

    // Componente de rota protegida
    async function handleLogin(){
        setIsLoggedIn(true);
    };

  return (
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
  );
};

export default RouterComponent;