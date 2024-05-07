import React, { useEffect, useState } from "react";
import axios from "axios";
import AssetsForm from "../forms/assets/AssetsForm";

const CreateAssets = () => {
    const [ searchAssets, setSearchAssets ] = useState("");
    const [ assets, setAssets ] = useState([]);
    const [ clickedSearch, setClickedSearch ] = useState(false)
    const [ closePriceFloat, setClosePriceFloat ] = useState(0)

    async function getAssetsByApi(e){
        const apiSearch = axios.create({
            baseURL: "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo"
        });
        const response = await apiSearch.get();
        const assets = response.data.bestMatches;
        setAssets(assets);
    }

    async function handleClickSearch(){
        const apiAssets = axios.create({
            //$"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbolAsset}&outputsize=full&apikey=FWDJWLVR5XXX6J59";
            baseURL: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo"
        });
        const response = await apiAssets.get();
        const timesSeries = response.data["Time Series (Daily)"];
        const latestDate = Object.keys(timesSeries)[0];
        const closePrice = timesSeries[latestDate]["4. close"];
        const closePriceFloat = parseFloat(closePrice);
        setClickedSearch(true)
        setClosePriceFloat(closePriceFloat)
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
                onChange={(e) => { setSearchAssets(e.target.value);
                    getAssetsByApi();}}/>
            <datalist id="datalistOptions">
                {assets.map(an => (
                   <option value={an["1. symbol"]} >{an["2. name"]}</option>
                ))}
            </datalist>
            <div>
                {clickedSearch 
                    ?   <div className="mt-3">
                            <AssetsForm 
                                codName = {searchAssets}
                                currentPrice = {closePriceFloat}
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