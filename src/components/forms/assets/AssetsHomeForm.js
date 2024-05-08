import React from "react";

const AssetsHomeForm = (props) => {
    let assets = props.setToForm;
    debugger

    return (
        <div>
            {assets.map(a => (
                <div className="card mb-3">
                <div className="card-header">
                    Código da Ação: {a.codName}
                </div>
                <div className="card-body">
                    <p className="card-title d-inline-block me-3">Preço atual: R$ {a.currentPrice}</p>
                    <p className="card-title d-inline-block me-3">Preço pago: R$ {a.buyPrice}</p>
                    <p className="card-title d-inline-block me-3">Quantidade: {a.amount}</p>
                    <p className="card-title d-inline-block me-3">Preço medio: R$ {a.averegePrice}</p>
                    <p className="card-title d-inline-block me-3">Porcetagem: {a.perCent}%</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default AssetsHomeForm;