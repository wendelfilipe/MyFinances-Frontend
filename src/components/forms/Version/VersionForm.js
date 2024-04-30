import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const VersionForm = () => {

    return(
        <div className="Container">
                <div className="card fixed-bottom w-100 bg-dark text-white p-3">
                    <div className="card-header">v0.0.2</div>
                    <div className="card-body">
                        <p className="card-text">Versão Atualizada, mas ainda não pode criar um usuario!, na versão 1.0 estára pronto para usar!</p>
                    </div>
                </div>
        </div>
    )
}

export default VersionForm;

