import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const AssetsHome = () => {
    let [ assets, setAssets ] = useState([]);

    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(cookie => cookie.trim());
        cookies[name] = value;
        return cookies;
    }, {});

    const walletIdString = cookies.WalletIdCookie;
    const walletId = parseInt(walletIdString, 10);

    useEffect(() => {
        getAssets();
    }, []);

    async function getAssets(){
        assets = await api.get(`assets/GetAllAssetsDTOAsync/${walletId}`)
        setAssets(assets.data)
        debugger
    }

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    Açoes
                </div>
                <div className="card-body">
                    <AssetsHomeForm 
                        setToForm={assets}
                    />
                </div>
            </div>
        </div>
    )

}

export default AssetsHome;