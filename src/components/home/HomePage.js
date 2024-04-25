import React, { useState } from "react";
import api from "../../api/Api";

const HomePage = () => {
    const name = "Wallet";

    const [ processStockS, setProcessStock ] = useState(25);
    const [ processFixed, setProcessFixed ] = useState(25);
    const [ processFiis, setProcessFiis ] = useState(25);
    const [ processInternaciolAssets, setInternacionalAssets ] = useState(25);

    

    return (
        <div className="Conteiner">
            <div className="mt-5 d-flex justify-content-center"><h2>Carteiras</h2></div>
            <div className="card mt-5 text-decoration-none" style={{ width: "18rem"}}>
            <a className="text-decoration-none" href="/">
            <h5 className="card-header" >{name}</h5>
                <div className="card-body">
                <div>
                <p className="card-text ts-sm d-inline-block me-1">Acoes</p>
                <p className="card-text ts-sm d-inline-block m-3">Renda Fixa</p>
                <p className="card-text ts-sm d-inline-block">Fiis</p>
                <p className="card-text ts-sm d-inline-block ms-4">Fora</p>
                </div>
                    <div className="Container">
                        <div className="progress-stacked">
                            <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width: `${processStockS}%`}}>
                                <div className="progress-bar">
                                    {processStockS + "%"}
                                </div>
                            </div>
                            <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: `${processFixed}%`}}>
                                <div className="progress-bar bg-success">
                                    {processFixed + "%"}
                                </div>
                            </div>
                            <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: `${processInternaciolAssets}%`}}>
                                <div className="progress-bar bg-info">
                                    {processFiis + "%"}
                                </div>
                            </div>
                            <div className="progress" role="progressbar" aria-label="Segment four" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: `${processFiis}%`}}>
                                <div className="progress-bar bg-secondary">
                                {processInternaciolAssets + "%"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </a>
            </div>
        </div>
    )
}

export default HomePage;