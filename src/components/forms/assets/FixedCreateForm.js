import React, { useState } from "react";
import api from "../../../api/Api";

const FixedCreateForm = (props) =>{
    const [ buyPrice, setBuyPrice ] = useState(0);
    const [ amount, setAmount ] = useState(0);
    const [ sourceTypeAssets, setSourceTypeAssets ] = useState(0);
    const [ buyDate, setBuyDate ] = useState();
    const [ expirationDate, setExpirationDate ] = useState();
    const [ perCentCDI, setPerCentCDI ] = useState();

    
    const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.split('=').map(cookie => cookie.trim());
        cookies[name] = value;
        return cookies;
    }, {});
        
    

    async function postCreateAssets(e){
        e.preventDefault();

        const walletIdIdString = cookies.WalletIdCookie;
        const walletId = parseInt(walletIdIdString, 10);

        
        const asset = {
            codname: "Selic",
            currentprice: buyPrice,
            buyPrice: buyPrice,
            walletid: walletId,
            sourcecreate: 1,
            sourcetypeassets: parseInt(sourceTypeAssets), 
            amount: 1,
            percentcdi: perCentCDI,
            startdate: buyDate,
            enddate: expirationDate
        }
        await api.post("fixed/PostCreateFixedAsync", asset)
    }

    return (

        <form>
            <div className="mb-3">
                <label htmlFor="buyPrice" className="form-label">Preço pago*</label>
                <input type="number" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} className="form-control" id="buyPrice" placeholder="Preço pago"/>
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Taxa % (somente numeros)*</label>
                <input type="number" value={perCentCDI} onChange={(e) => setAmount(e.target.value)} className="form-control" id="buyPrice" placeholder="Quantidade"/>
            </div>
            <div className="mb-3">
                <label htmlFor="buyDate" className="form-label">
                    Data da Compra*
                    <span className="ms-5">
                        Data do Vencimento*
                    </span>
                </label>
                <div className="input-group">
                    <input type="date" value={buyDate} onChange={(e) => setBuyDate(e.target.value)} aria-label="First name" className="form-control" placeholder="Inicio"/>
                    <input type="date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} aria-label="Last name" className="form-control" placeholder="Fim"/>
                </div>
            </div>
            <div className="mb-3">
                <select className="form-select" aria-label="Default select example" value={sourceTypeAssets} onChange={(e) => setSourceTypeAssets(e.target.value)}>
                    <option selected>Selecione um tipo*</option>
                    <option value="1">Acões</option>
                    <option value="4">Fundos Imobiliários</option>
                    <option value="3">Ativos Internacionais</option>
                    <option value="2">Renda Fixa</option>
                </select>
            </div>
            <button className="btn btn-primary me-2" onClick={postCreateAssets}>Adicionar</button>
            <a className="btn btn-primary" href="/fixedhome">Cancelar</a>
        </form>

    )
}

export default FixedCreateForm;