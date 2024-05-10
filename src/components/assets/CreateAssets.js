import React, { useEffect, useState } from "react";
import axios from "axios";
import AssetsForm from "../forms/assets/AssetsForm";

const CreateAssets = (props) => {
    const [ searchAssets, setSearchAssets ] = useState("");
    const [ assets, setAssets ] = useState([]);
    const [ clickedSearch, setClickedSearch ] = useState(false)
    const [ regularMarketOpen, setRegularMarketOpen ] = useState(0)

    async function getAssetsByApi(){

        axios.get(`https://brapi.dev/api/available?search=${searchAssets}&token=eJGEyu8vVHctULdVdHYzQd`)
        .then(responseSearch => {
            debugger
            const assets = responseSearch.data.stocks
            setAssets(assets)
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }
    

    async function handleClickSearch(){

        axios.get(`https://brapi.dev/api/quote/${searchAssets}?token=tSC4Zp6TZfoC6u7qeDGtdh`)
        .then(response => {
            debugger
            const regularMarketOpenResult = response.data.results;
            const regularMarketOpen = regularMarketOpenResult[0].regularMarketOpen;
            setClickedSearch(true)
            setRegularMarketOpen(regularMarketOpen)
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }


    return (
    <div className="d-flex justify-content-center">
        <div>
            <label htmlFor="stocks" className="form-label">Buscar ações</label>
            <input 
                className="form-control" 
                value={searchAssets} 
                list="datalistOptions" 
                id="stocks" 
                placeholder="Acões" 
                onChange={(e) => { 
                    setSearchAssets(e.target.value);
                    getAssetsByApi();}}
                />
            <datalist id="datalistOptions">
                {assets.map(an => (
                   <option key={an.id} value={an} >{an}</option>
                ))}
            </datalist>
            <div>
                {clickedSearch 
                    ?   <div className="mt-3">
                            <AssetsForm 
                                codName = {searchAssets}
                                currentPrice = {regularMarketOpen}
                            />
                        </div> 
                    :   <div>
                            <a className="btn btn-outline-success" onClick={handleClickSearch}>Buscar</a>
                            <a className="btn btn-outline-success" href="/homepage">Cancelar</a>
                        </div>
                }
            </div>
        </div>
    </div>


    )

}

export default CreateAssets;