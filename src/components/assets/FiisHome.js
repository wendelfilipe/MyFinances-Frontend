import React, { useEffect, useState } from "react";
import AssetsHomeForm from "../forms/assets/AssetsHomeForm";
import api from "../../api/Api";

const FiisHome = () => {
    let [ userAssetsFiis, setUserAssetsFiis ] = useState([]);
    let [ userFiis, setUserFiis ] = useState([]);
    let [ totalAssets, setTotalAssets ] = useState([]);
    let token = localStorage.getItem('authToken');

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

            await getAssets();
        };
        fetchData();
    }, []);

    async function getFiis(){
       
        try {
            const response = await fetch(`http://localhost:5001/api/fiis/GetAllFiisByWalletIdAsync/${walletId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
    
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
    
            const fiis = await response.json();  // Converte o corpo da resposta para JSON
            userFiis = fiis.fiiAssets;     // Obtém os fiis do usuário
            userAssetsFiis = fiis.userFiis; // Obtém os assets fiis do usuário
    
            setUserFiis(userFiis);                // Atualiza o estado com os fiis
            setUserAssetsFiis(userAssetsFiis);    // Atualiza o estado com os assets fiis
        } catch (error) {
            console.error('Erro ao buscar FIIs:', error);
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
            console.error('Erro ao buscar FIIs:', error);
        }
    }

    return(
        <div>
            <div className="card">
                <div className="card-header">
                    Fundos Imobiliários
                </div>
                <div className="card-body">
                { userAssetsFiis.length > 0
                        ?   <AssetsHomeForm 
                                setUserAssetsToForm={userFiis}
                                setAllUserAssetsToForm={userAssetsFiis}
                                setTotalAssetsToForm={totalAssets}
                            />
                        :   <div>
                                Adicione Ações
                            </div>
                    }
                </div>
            </div>
            <div>
                <a className="text-decoration-none btn btn-outline-success" href="/createassets">Adicionar Ação</a>
                <a className="text-decoration-none btn btn-outline-success" href="/homepage">Voltar</a>
            </div>
        </div>
    )

}

export default FiisHome;