import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const FixedHome = () => {
    let [ fixed, setFixed ] = useState([]);

    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(cookie => cookie.trim());
        cookies[name] = value;
        return cookies;
    }, {});

    const walletIdString = cookies.WalletIdCookie;
    const walletId = parseInt(walletIdString, 10);

    useEffect(() => {
        getFixed();
    }, []);

    async function getFixed(){
        fixed = await api.get(`fixed/GetAllFixedByWalletIdAsync/${walletId}`)
        setFixed(fixed.data)
    }

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    Renda Fixa
                </div>
                <div className="card-body">
                    <AssetsHomeForm 
                        setToForm={fixed}
                    />
                </div>
            </div>
            <a className="text-decoration-none btn btn-outline-success" href="/createassets">Adicionar Ação</a>
        </div>
    )

}

export default FixedHome;