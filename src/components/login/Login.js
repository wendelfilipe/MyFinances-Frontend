import React, { useState } from 'react';
import api  from '../../api/Api'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    
    async function handleClick(){
        await api.get(`user/${email}`)
        navigate('/home')
    }


    return (
        <form>
            <div className="mt-3 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label
                            htmlFor="email">
                                Email
                        </label>
                        <input
                            type="text" 
                            value = {email} 
                            onChange={(e => setEmail(e.target.value))} 
                            id="email" 
                            name="email" 
                            className="form-control mt-2" 
                            placeholder="Email" />
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
                        />
                    </div>
                    <div className="col-12">
                        <button 
                            className="btn btn-outline-success me-2" 
                            onClick={handleClick}>
                                Login
                        </button>
                        <button 
                            className="btn btn-outline-success">
                                Criar Usuario
                        </button>
                    </div>
                </div>
            </div>
            <div className="Container">
                <div class="card fixed-bottom w-100 bg-primary text-white p-3" style={{width: "18rem"}}>
                    <div class="card-header">v0.0.1</div>
                    <div class="card-body">
                        <p class="card-text">Web Api ainda sendo construida</p>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default Login;