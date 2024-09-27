import React, { useEffect, useState } from 'react';
import api  from '../../api/Api'
import { useNavigate } from 'react-router-dom';
import VersionForm from '../forms/Version/VersionForm';

import '../../styles/login/loginPage.css';

const LoginPage = (propsRoute) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await UpdateAssets();
    //     }
    //     fetchData();
    // });

    // function UpdateAssets(){
    //     const response  = api.get("assets/UpdateAssetsAsync")
    // }

    let user = {
        email: email,
        password: password
    };

    
    async function handleClickLogin(e){
        e.preventDefault();
        
        if(email ===''){
            alert("Email é obrigatótio")
        }
        if(password ===''){
            alert("Senha é obrigatório")
        }
        else{
            const response1 = await api.post("token/LoginUser", user)

            if(response1.status === 200)
            {
                const token = response1.data.token;

                localStorage.setItem('authToken', token)
                
                const response2 = await fetch("http://localhost:5001/api/token/GetUserId", {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
                if(response2.ok)
                {
                    const userId = await response2.text();

                    let dataDeExpiracao = new Date();

                    dataDeExpiracao.setHours(dataDeExpiracao.getHours() + 24);
                    document.cookie = `UserIdCookie=${userId};expires=${dataDeExpiracao}`;
        
                    propsRoute.onLogin();
        
                    navigate("/homepage");
                }
            }
            else{
                alert("Email ou senha invalida");
            }
        }
    }

    async function handleClickCreateUser(){
        navigate('/createuserpage')
    }


    return (
        <form>
            <div className="container">
                <div className="form-container">
                    <div className="form-header-login">
                        <h3>Login</h3>
                    </div>
                    <form>
                        <div className="form-login">
                            <label
                                htmlFor="email">
                                    Email<span>*</span>
                            </label>
                            <input
                                type="email"  
                                onChange={(e => setEmail(e.target.value))} 
                                id="email" 
                                name="email" 
                                className="block" 
                                placeholder="Email" 
                                value = {email}
                                required
                            />
                        </div>
                        <div className="form-login">
                            <label 
                                htmlFor="password">
                                    Password<span>*</span>
                            </label>
                            <input 
                                type="password" 
                                value = {password} 
                                onChange={e => setPassword(e.target.value)} 
                                id="password" 
                                name="password" 
                                className="block" 
                                placeholder="Password"
                                required
                            />
                        </div>
                    </form>
                    <div className="form-btn">
                        <button 
                            className="btn btn-outline-success me-2" 
                            onClick={handleClickLogin}>
                                Login
                        </button>
                        <button 
                            className="btn btn-outline-success"
                            onClick={handleClickCreateUser}>
                                Criar Usuario
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <VersionForm />
            </div>
        </form>
    );
};
export default LoginPage;