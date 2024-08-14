import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import HomePage from '../home/HomePage';
import CreateUserPage from '../login/CreateUserPage';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import WalletHome from '../home/walletHome/WalletHome';
import CreateWallet from '../wallet/CreateWallet';
import NavBarForm from '../forms/navBar/NavBarForm';
import CreateAssets from '../assets/CreateAssets';
import CreateFixed from '../assets/CreateFixed';
import AssetsHomeForm from '../forms/assets/AssetsHomeForm';
import StocksHome from '../assets/StocksHome';
import FiisHome from '../assets/FiisHome';
import InterAssetsHome from '../assets/InterAssetsHome';
import FixedHome from '../assets/FixedHome';
import InitialPage from '../home/InitialPage';
import GraphicHomeWeek from '../home/graphics/GraphicHomeWeek';
import GraphicHomeMonth from '../home/graphics/GraphicHomeMonth';


const RouterComponent = (propsRoute) => {
    const [isLoggedIn, setIsLoggedIn] = useState();

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
    <>
        <Routes>
        <Route
            path='/'
            element={<InitialPage/>}
        />
        <Route
            path='/createuserpage'
            element={<CreateUserPage />}
        />
        <Route 
            path="/loginpage" 
            element={<LoginPage onLogin={handleLogin} />} 
        />
        <Route
            path='/graphicweek'
            element={isLoggedIn ? <GraphicHomeWeek/> : <Navigate to="/" />}
        />
        <Route 
            path='/graphicmonth'
            element={isLoggedIn ? <GraphicHomeMonth/> : <Navigate to="/" />}
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
         <Route
            path="/createassets"
            element={isLoggedIn ? <CreateAssets /> : <Navigate to="/" />}
        />
        <Route
            path='/stockshome'
            element={isLoggedIn ? <StocksHome /> : <Navigate to="/" />}
        />
        <Route
            path='/fiishome'
            element={isLoggedIn ? <FiisHome /> : <Navigate to="/" />}
        />
        <Route
            path='/interassetshome'
            element={isLoggedIn ? <InterAssetsHome/> : <Navigate to="/"/>}
        />
        <Route
            path='/fixedhome'
            element={isLoggedIn ? <FixedHome /> : <Navigate to="/"/>}
        />
        <Route
            path='/assetshomeform'
            element={isLoggedIn ? <AssetsHomeForm /> : <Navigate to="/"/>}
        />
        <Route
            path='/createFixed'
            element={isLoggedIn ? <CreateFixed /> : <Navigate to="/"/>}
        />
        </Routes>
        <NavBarForm 
            onLogout={handleLogout}    
        />
    </>
  );
};

export default RouterComponent;