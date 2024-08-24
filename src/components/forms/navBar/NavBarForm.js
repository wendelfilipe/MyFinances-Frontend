import React, { useEffect, useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import api from "../../../api/Api";
import { useNavigate } from "react-router-dom";
import RouterComponent from "../../router/Router";

import '../../../styles/navBar/navBar.css'


const NavBarForm = (propsRoute) => {
    

    async function handleClickLogOut(){
        document.cookie = 'UserIdCookie=; expires=Thu, 01 Jan 2023 00:00:00 UTC; path=/;';
        document.cookie = 'WalletIdCookie=; expires=Thu, 01 Jan 2023 00:00:00 UTC; path=/;';
        propsRoute.onLogout();
        
    }

    return(
        <form>
            <nav className="navbar bg-white fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" style={{color: "black"}} href="/">My Finances App</a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My Finances App</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link active" href="/homepage">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/loginpage">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/" onClick={handleClickLogOut}>Log out</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </nav>
        </form>
    )

}

export default NavBarForm;