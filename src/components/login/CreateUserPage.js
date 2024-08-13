import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/Api";

import '../../styles/login/createUser.css'

const CreateUserPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let [ message , setMessage ] = useState();

    let user = {
        email: email,
        password: password
    }

    const navigate = useNavigate();

    async function handleClickCreateUser(e){
        e.preventDefault();

        if (name === ''){
            alert("Campo Nome é obrigatório");
        }
        if(email === '') {
            alert("Campo Email é obrigatório");
        }
        if(password ===  ''){
            alert("Campo Password é obrigatório ");
        }
            
        else{
            
            const responde = await api.post("token/CreateUser", user)
            debugger
            message = responde.data;
            setMessage(message);

            alert(message)
        }
    }

    return(
        <div className="container">
            <div className="form-body">
                <div className="form-header">
                    <h3>Criar Usuario</h3>
                </div>
                <form>
                    <div className="form-itens">
                        <label
                            htmlFor="email">
                                Name<span>*</span>
                        </label>
                        <input
                            type="text"  
                            onChange={(e => setName(e.target.value))} 
                            id="name" 
                            name="name"
                            className="block"
                            placeholder="Name" 
                            value = {name}
                            required
                        />
                    </div>
                    <div className="form-itens">
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
                    <div className="form-itens">
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