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
            
            <button type="button" className="btn btn-dark mt-5" id="comp"><a href="https://www.passline.com/eventos/tombola-de-la-joda">COMPRAR AHORA POR $150</a></button>
        
            </div>
            </div>

            <div className="card carta" id="dos">
            <div className="card-body">
            <h3>¿CÓMO Y CUÁNDO SE SORTEA?</h3>
            <br />
            <p id="texto3">
            ● Vía streaming el día 31 de Octubre de 2022.<br />
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
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <div className="card carta d-block" id="uno">
            <div className="card-body ">
            <h3>¿CÓMO PARTICIPAR?</h3>
            <br />
            <p id="texto2">
            Adquirir tu ticket por Passline a $150.- (ciento cincuenta pesos argentinos), sin límite
            de compra por usuario. Aumenta tus chances de ganar, comprando la cantidad que desees.
            </p>
            
            <button type="button" className="btn btn-dark mt-5" id="compra"><a href="https://www.passline.com/eventos/tombola-de-la-joda">COMPRAR AHORA POR $150</a></button>
        
            </div>
            </div>
                    </div>
                    <div class="carousel-item">
               
            <div className="card carta d-block" id="dos">
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
                    </div>
                    <div class="carousel-item">
                    <div className="card carta d-block" id="tres">
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
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" style={{color:"black"}}>
                    <span class="carousel-control-prev-icon" aria-hidden="true" style={{color:"black"}}></span>
                    <span class="visually-hidden" style={{color:"black"}}  >Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
       
    )
}