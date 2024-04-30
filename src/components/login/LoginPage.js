import React, { useState } from 'react';
import api  from '../../api/Api'
import { useNavigate } from 'react-router-dom';
import VersionForm from '../forms/Version/VersionForm';
import cryptoJs from 'crypto-js';
import RouterComponent from '../router/Router';

const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    
    async function handleClickLogin(e){
        e.preventDefault();

        if(email ===''){
            alert("Email é obrigatótio")
        }
        if(password ===''){
            alert("Senha é obrigatório")
        }
        else{
            const user = await api.get(`user/GetUserDTOByEmailAsync/${email}`)
            if(email === user.data.email && password === user.data.password){

                let dataDeExpiracao = new Date();
                dataDeExpiracao.setHours(dataDeExpiracao.getHours() + 24);
                document.cookie = `UserIdCookie=${user.data.id};expires=${dataDeExpiracao}`;

                await props.onLogin();
                navigate("/homepage");
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
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label
                            htmlFor="email">
                                Email
                        </label>
                        <input
                            type="text"  
                            onChange={(e => setEmail(e.target.value))} 
                            id="email" 
                            name="email" 
                            className="form-control mt-2" 
                            placeholder="Email" 
                            value = {email}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label 
                            htmlFor="password">
                                Password
                        </label>
                        <input 
                            type="password" 
                            value = {password} 
                            onChange={e => setPassword(e.target.value)} 
                            id="password" 
                            name="password" 
                            className="form-control mt-2" 
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="col-12">
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