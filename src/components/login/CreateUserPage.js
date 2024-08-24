import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/Api";

import '../../styles/login/createUser.css'

const CreateUserPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let [ message , setMessage ] = useState();
    const [confirmPassword, setConfirmPassword] = useState('');

    let user = {
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }

    const navigate = useNavigate();

    async function handleClickCreateUser(e){
        e.preventDefault();

        if(email === '') {
            alert("Campo Email é obrigatório");
        }
        if(password ===  ''){
            alert("Campo Password é obrigatório ");
        }
            
        else{
            
            const responde = await api.post("token/CreateUser", user)
            message = responde.data;
            setMessage(message);
            alert(message)

            navigate("/loginpage");
        }
    }

    return(
        <div className="container">
            <div className="form-body">
                <div className="form-header">
                    <h3>Criar Usuario</h3>
                </div>
                <form>
                    <div className="form-items">
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
                            value={email}
                            required
                        />
                    </div>
                    <div className="form-items">
                        <label htmlFor="password">
                            Password<span>*</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="block"
                            placeholder="Password"
                            value={password}
                            onChange={(e => setPassword(e.target.value))}
                            required
                        />
                    </div>
                    <div className="form-items">
                        <label htmlFor="confirmed">
                            Confimar Senha<span>*</span>
                        </label>
                        <input 
                            className="block"
                            type="password"
                            id="confirmed"
                            name="confirmed"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={((e) => setConfirmPassword(e.target.value))}
                            required
                        />
                    </div>
                </form>
                <div className="btn-form">
                    <button
                        className="btn btn-outline-success me-2"
                        onClick={handleClickCreateUser}>
                            Criar Usuario
                    </button>
                    <button 
                        className="btn btn-outline-success"
                        onClick={() => navigate("/")}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )

}

export default CreateUserPage;