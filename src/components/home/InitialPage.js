import React from "react"

import '../../styles/initialPage/style.css'


const InitialPage = () => {

    return (
        <>
            <div className="header">
                <p>My Fincances</p>
            </div>
            <div className="container">
                <div className="text inline-block">
                    <div className="title-text">
                        <p>Começa nosso App</p>
                    </div>
                    "My Finances" é um app de organização de ativos de investimentos que permite aos usuários monitorar 
                    e gerenciar suas finanças pessoais de forma centralizada e eficiente. Através do aplicativo, 
                    os usuários podem acompanhar o desempenho de diversos ativos, como ações, fundos imobiliários, 
                    títulos, além de receber análises detalhadas e alertas em tempo real. Com uma interface intuitiva, 
                    o "My Finances" facilita a tomada de decisões financeiras, ajudando os investidores a otimizar suas carteiras e 
                    alcançar seus objetivos financeiros de maneira eficaz.
                </div>
                <div className="app-img inline-block">
                    <div className="title-img">
                        My Finances app
                    </div>
                    <figure>
                        <img src="" alt="App img"></img>
                    </figure>
                    <div className="block">
                        <a href="https://www.google.com" target="_blank" rel="noreferrer"><img src="img/google_play_logo.png"></img></a>
                        <a href="https://www.apple.com/br/store" target="_blank" rel="noreferrer"><img src="img/app_store_download.png"></img></a>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default InitialPage;