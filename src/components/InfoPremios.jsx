import React from "react";
import './InfoPremios.css'

export default function InfoPremios(){
    return(
            <div className="container" id="InfoPremios" >
                
            <div id="sobre-nosotros">
            <div className="card carta" id="uno">
            <div className="card-body">
            <h3>¿CÓMO PARTICIPAR?</h3>
            <br />
            <p id="texto2">
            Adquirir tu ticket por Passline a $150.- (ciento cincuenta pesos argentinos), sin límite
            de compra por usuario. Aumenta tus chances de ganar, comprando la cantidad que desees.
            </p>
            
            <button type="button" className="btn btn-dark mt-5">COMPRAR AHORA POR $150</button>
        
            </div>
            </div>

            <div className="card carta" id="dos">
            <div className="card-body">
            <h3>¿CÓMO Y CUÁNDO SE SORTEA?</h3>
            <br />
            <p id="texto3">
            ● Vía streaming el día 14 de Octubre de 2022.<br />
            ● Se dispondrá de cuatro bolilleros para sortear los números en presencia de
            un escribano público.<br />
            ● Una vez completo el número, nos comunicaremos con el afortunado o la
            afortunada solo por vía telefónica.
            </p>
            </div>
            </div>

            <div className="card carta" id="tres">
            <div className="card-body">
            <h3>¿COMO Y CUANDO RECIBO LOS PREMIOS?</h3>
            <br />
            <p id="texto4">
            ● Los tickets de los eventos serán enviados inmediatamente al ganador al mail
            que nos proporcione.<br />
            ● La estadía en el hotel será transferida al día siguiente cargando sus datos
            personales en la reserva previamente hecha para la productora.<br />
            ● El dinero será enviado por medio de una transferencia bancaria a la cuenta
            que elija el ganador con un plazo máximo de 72hs hábiles concluido el
            evento.
            </p>
            </div>
            </div>
            </div>


            <div id="display">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="card carta" id="tres">
            <div className="card-body">
            <h3>¿CÓMO PARTICIPAR?</h3>
            <br />
            <p>Adquirir tu ticket por Passline a $150.- (ciento cincuenta pesos argentinos), sin límite
            de compra por usuario. Aumenta tus chances de ganar, comprando la cantidad que desees.
            </p>
            <button type="button" className="btn btn-dark mt-5">COMPRAR AHORA POR $150</button>
            </div>
            </div>
                </div>
                <div className="carousel-item">
                <div className="card carta" id="dos">
            <div className="card-body">
            <h3>¿CÓMO Y CUÁNDO SE SORTEA?</h3>
            <br />
            <p>  
            ● Vía streaming el día 14 de Octubre de 2022.<br />
            ● Se dispondrá de cuatro bolilleros para sortear los números en presencia de
            un escribano público.<br />
            ● Una vez completo el número, nos comunicaremos con el afortunado o la
            afortunada solo por vía telefónica.
            </p>
            </div>
            </div>
                </div>
                <div className="carousel-item">
                <div className="card carta" id="uno">
            <div className="card-body">
            <h3>¿COMO Y CUANDO RECIBO LOS PREMIOS?</h3>
            <br />
            <p>
            ● Los tickets de los eventos serán enviados inmediatamente al ganador al mail
            que nos proporcione.<br />
            ● La estadía en el hotel será transferida al día siguiente cargando sus datos
            personales en la reserva previamente hecha para la productora.<br />
            ● El dinero será enviado por medio de una transferencia bancaria a la cuenta
            que elija el ganador con un plazo máximo de 72hs hábiles concluido el
            evento.
            </p>
            </div>
            </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            </div>
        </div>
       
    )
}