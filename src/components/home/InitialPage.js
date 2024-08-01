import React from "react"

import '../../styles/initialPage/style.css'


const InitialPage = () => {

    return (
        <>
            <div className="header">
                <p>My Fincances App</p>
            </div>
            <div className="container-text inline-block">
                <div className="title-text">
                    <p>Aqui vai vim o Titulo</p>
                </div>
                <div className="text">
                    Aqui vai vim o text
                </div>
            </div>
            <div className="app-img inline-block">
                <div className="title-img">
                    Aqui o titulo da imagem
                </div>
                <img src="" alt="Aqui vai a imagem"></img> 
            </div>
        </>
    )
} 

export default InitialPage;