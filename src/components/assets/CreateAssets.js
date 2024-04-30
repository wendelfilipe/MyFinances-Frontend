import React, { useEffect, useState } from "react";
import axios from "axios";

const CreateAssets = () => {
    const [ assetsName, setAssetsName ] = useState([]);
    const [ assetsSymbol, setAssetsSymbol ] =useState([]); 
    let isClicked;


    const apiAssets = axios.create({
        baseURL: "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo"
    });

    async function getAssetsByApi(e){

        const url = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo";
        const response = await apiAssets.get("");
        const assets = response.data.bestMatches;
        const assetsName = assets.map(asset => asset["2. name"]);
        const assetsSymbol = assets.map(asset => asset["1. symbol"]);
        setAssetsName(assetsName)
        debugger

    }


    return (

        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={assetsSymbol} aria-label="Text input with dropdown button"/>
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={getAssetsByApi}>Dropdown</button>
                <ul className="dropdown-menu dropdown-menu-end">
                    {assetsName.map((a) => (
                         <li><a className="dropdown-item">{a}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <a className="btn btn-outline-success">Buscar</a>
                <a className="btn btn-outline-success" href="/homepage">Cancelar</a>
            </div>
        </div>

    )

}

export default CreateAssets;