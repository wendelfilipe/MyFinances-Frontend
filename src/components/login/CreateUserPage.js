import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/Api";

const CreateUserPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    let newUser = {
        name: name,
        email: email,
        password: password
    }

    const navigate = useNavigate();

    async function handleClickCreateUser(){
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
            api.post('user', newUser)
        }
    }

    return(
        <form>
            <div className="mt-3 d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label
                                htmlFor="email">
                                    Name*
                            </label>
                            <input
                                type="text"  
                                onChange={(e => setName(e.target.value))} 
                                id="name" 
                                name="name" 
                                className="form-control mt-2" 
                                placeholder="Name" 
                                value = {name}
                                required
                            />
                        </div>
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
                                value={email}
                                required
                                
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input 
                                className="form-control mt-2"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e => setPassword(e.target.value))}
                                required
                            />
                        </div>
                        <div>
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
        </form>
    )

}

export default CreateUserPage;