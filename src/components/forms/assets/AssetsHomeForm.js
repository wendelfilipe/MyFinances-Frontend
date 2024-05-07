import React from "react";

const AssetsHomeForm = (props) => {
    let assets = props.setToForm;
    let perCent = props.setPerCent;

    return (
        <div className="card">
        <div className="card-header">
            Código da Ação: {assets.name}
        </div>
        <div className="card-body">
            <p className="card-title d-inline-block me-3">Preço atual: R$ {assets.currentPrice}</p>
            <p className="card-title d-inline-block me-3">Preço pago: R$ {assets.buyPrice}</p>
            <p className="card-title d-inline-block me-3">Quantidade: R$ {assets.Amout}</p>
            <p className="card-title d-inline-block me-3">Preço medio: R$ {assets.AveregePrice}</p>
            <p className="card-title d-inline-block me-3">Porcetagem: {perCent}%</p>
        </div>
    </div>
    )
}

export default AssetsHomeForm;