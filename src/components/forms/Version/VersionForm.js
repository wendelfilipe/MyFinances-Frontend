import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const VersionForm = () => {

    return(
        <div className="Container">
                <div className="card fixed-bottom w-100 bg-white text-white p-3">
                    <div className="card-header text-black bg-white">v1.0.2</div>
                    <div className="card-body">
                        <p className="card-text">
                            Em manutenção!
                        </p>
                        <hr />
                    </div>
                </div>
        </div>
    )
}

export default VersionForm;

