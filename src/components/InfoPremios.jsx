import React from "react";
import './InfoPremios.css'

export default function InfoPremios(){
    return(
            <div className="container" id="InfoPremios" >
                
            <div id="sobre-nosotros">
            <div class="card carta" id="uno">
            <div class="card-body">
            <h3>¿CÓMO PARTICIPAR?</h3>
            <br />
            <p id="texto2">
            Adquirir tu ticket por Passline a $150.- (ciento cincuenta pesos argentinos), sin límite
            de compra por usuario. Aumenta tus chances de ganar, comprando la cantidad que desees.
            </p>
            
            <button type="button" className="btn btn-dark mt-5">COMPRAR AHORA POR $150</button>
        
            </div>
            </div>

            <div class="card carta" id="dos">
            <div class="card-body">
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

            <div class="card carta" id="tres">
            <div class="card-body">
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
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <div class="card carta" id="tres">
            <div class="card-body">
            <h3>¿CÓMO LO REPRESENTAMOS DESDE ANDAR?</h3>
            <br />
            <p>En esta primera edición de “La tómbola de la joda” vamos a estar presentando vía
            streaming un line up variado de distintos talentos locales, desde las 18:00 hs del día 14 de
            octubre, hasta las 06:00 hs del 15 de octubre. En el cual habrá distintas sorpresas y se
            realizará un gran sorteo en presencia de escribano público.
            </p>
            </div>
            </div>
                </div>
                <div class="carousel-item">
                <div class="card carta" id="dos">
            <div class="card-body">
            <h3>¿QUÉ ES UNA TÓMBOLA?</h3>
            <br />
            <p>Es una rifa en la que los premios son objetos diversos y cuyos beneficios suelen
            destinarse a fines benéficos
            </p>
            </div>
            </div>
                </div>
                <div class="carousel-item">
                <div class="card carta" id="uno">
            <div class="card-body">
            <h3>ANDAR PRODUCTIONS</h3>
            <br />
            <p>
            Andar Productions es una joven productora de eventos, conformada por amigos y
            familia. Orientada a apoyar e impulsar la carrera artística de los talentos locales,
            brindándoles la oportunidad de posicionarse en la escena nacional e internacional.
            </p>
            </div>
            </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            </div>
        </div>
       
    )
}