import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const FiisHome = () => {
    let [ fiis, setFiis ] = useState([]);

    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(cookie => cookie.trim());
        cookies[name] = value;
        return cookies;
    }, {});

    const walletIdString = cookies.WalletIdCookie;
    const walletId = parseInt(walletIdString, 10);

    useEffect(() => {
        const fetchData = async () => {

            await getFiis();
        };
        fetchData();
    }, []);

    async function getFiis(){
        fiis = await api.get(`fiis/GetAllFiisByWalletIdAsync/${walletId}`)
        setFiis(fiis.data)
    }
    return(
        <div>
            <div className="card">
                <div className="card-header">
                    Fundos Imobiliários
                </div>
                <div className="card-body">
                { fiis.length > 0
                        ?   <AssetsHomeForm 
                                setToForm={fiis}
                            />
                        :   <div>
                                Adicione Ações
                            </div>
                    }
                </div>
            </div>
            <a className="text-decoration-none btn btn-outline-success" href="/createassets">Adicionar Ação</a>
        </div>
    )

}

export default FiisHome;