import React from "react";
import './SobreNosotros.css'

export default function SobreNosotros (){
    return(
        <div className="container"  id="sobre-nosotros">
            <h1 className="col text-center" id="premios">SOBRE NOSOTROS</h1>

            <hr />
            <div class="card" id="uno">
            <div class="card-body">
            Andar Productions es una joven productora de eventos, conformada por amigos y
            familia. Orientada a apoyar e impulsar la carrera artística de los talentos locales,
            brindándoles la oportunidad de posicionarse en la escena nacional e internacional.
            </div>
            </div>

            <div class="card" id="dos">
            <div class="card-body">
            <h3>¿QUÉ ES UNA TÓMBOLA?</h3>
            Es una rifa en la que los premios son objetos diversos y cuyos beneficios suelen
            destinarse a fines benéficos
            </div>
            </div>

            <div class="card" id="tres">
            <div class="card-body">
            <h3>¿CÓMO LO REPRESENTAMOS DESDE ANDAR?</h3>
            En esta primera edición de “La tómbola de la joda” vamos a estar presentando vía
            streaming un line up variado de distintos talentos locales, desde las 18:00 hs del día 14 de
            octubre, hasta las 06:00 hs del 15 de octubre. En el cual habrá distintas sorpresas y se
            realizará un gran sorteo del cual participaran con sus últimos cuatro dígitos del ticket id que
            les proporcionará Passline, siendo sorteado en vivo y comunicación activa con los
            afortunados, en presencia de escribano público.

            </div>
            </div>
        </div>
    )
}