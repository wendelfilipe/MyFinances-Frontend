import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const FixedHome = () => {
    let [ userAssetsFixed, setUserAssetsFixed ] = useState([]);
    let [ userFixed, setUserFixed ] = useState([]);
    let [ totalAssets, setTotalAssets ] = useState([]);
    let token = localStorage.getItem('authToken')

    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(cookie => cookie.trim());
        cookies[name] = value;
        return cookies;
    }, {});

    const walletIdString = cookies.WalletIdCookie;
    const walletId = parseInt(walletIdString, 10);

    useEffect(() => {
        const fetchData = async () => {

            await getFixed();

            await getAssets();
        };
        fetchData();
    }, []);

    async function getFixed(){

        try {
            const response = await fetch(`http://localhost:5001/api/fixed/GetAllFixedByWalletIdAsync/${walletId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
    
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
    
            const fixed = await response.json();  // Converte o corpo da resposta para JSON
            userFixed = fixed.stocksAssets;     // Obtém os Fixed do usuário
            userAssetsFixed = fixed.userAssetsFixed; // Obtém os assets Fixed do usuário
    
            setUserFixed(userFixed);                // Atualiza o estado com os Fixed
            setUserAssetsFixed(userAssetsFixed);    // Atualiza o estado com os assets Fixed
        } catch (error) {
            console.error('Erro ao buscar Fixed:', error);
        }
    }

    async function getAssets(){
        try {
            const response = await fetch(`http://localhost:5001/api/assets/GetTotalAssetByWalletIdAsync/${walletId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
    
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
    
            const assets = await response.json();  // Converte o corpo da resposta para JSON
            setTotalAssets(assets)
            } catch (error) {
                console.error('Erro ao buscar Renda Fixa:', error);
        }
    }

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    Renda Fixa
                </div>
                <div className="card-body">
                { userAssetsFixed.length > 0
                        ?   <AssetsHomeForm 
                                setUserAssetsToForm={userFixed}
                                setAllUserAssetsToForm={userAssetsFixed}
                                setTotalAssetsToForm={totalAssets}
                            />
                        :   <div>
                                Adicione Ações
                            </div>
                    }
                </div>
            </div>
            <div>
                <a className="text-decoration-none btn btn-outline-success" href="/createfixed">Adicionar Ação</a>
                <a className="text-decoration-none btn btn-outline-success" href="/homepage">Voltar</a>
            </div>
        </div>
    )

}

export default FixedHome;