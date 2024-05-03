import React, { useState } from "react";
import api from "../../api/Api";

const CreateWallet = () => {

    const [name, setName] = useState('');

    function getCookies() {
        const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
            const [name, value] = cookie.split('=').map(cookie => cookie.trim());
            cookies[name] = value;
            return cookies;
        }, {});
        return cookies;
    }
    
    // Exemplo de como usar a função getCookies()
    const cookie = getCookies();
    const userIdString = cookie.UserIdCookie;
    const userId = parseInt(userIdString, 10);

    async function getUserIdAndCriarWallet(){
        const wallet = {
            name: name,
            userid: userId,
            sourcecreate: 1 

        }
        await api.post("wallet/PostWalletDTOAsync", wallet)
    }
    

    return (

        <div>
            <div>
            <div className="input-group mb-3">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name da Carteira" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" onClick={getUserIdAndCriarWallet} type="button" id="button-addon2">Criar Carteira</button>
            </div>
            </div>
            <div>
                <a className="btn btn-outline-success" href="/homepage">Cancelar</a>
            </div>
        </div>

    )

}

export default CreateWallet;