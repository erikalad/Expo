import React from "react";
import './SobreNosotros.css'

export default function SobreNosotros (){
    return(
        <div className="container" >
            <h1 className="col text-center" >SOBRE NOSOTROS</h1>

            <hr />
            <div id="sobre-nosotros">
            <div class="card carta" id="uno">
            <div class="card-body">
            <h3>ANDAR PRODUCTIONS</h3>
            <br />
            Andar Productions es una joven productora de eventos, conformada por amigos y
            familia. Orientada a apoyar e impulsar la carrera artística de los talentos locales,
            brindándoles la oportunidad de posicionarse en la escena nacional e internacional.
            </div>
            </div>

            <div class="card carta" id="dos">
            <div class="card-body">
            <h3>¿QUÉ ES UNA TÓMBOLA?</h3>
            <br />
            Es una rifa en la que los premios son objetos diversos y cuyos beneficios suelen
            destinarse a fines benéficos
            </div>
            </div>

            <div class="card carta" id="tres">
            <div class="card-body">
            <h3>¿CÓMO LO REPRESENTAMOS DESDE ANDAR?</h3>
            <br />
            En esta primera edición de “La tómbola de la joda” vamos a estar presentando vía
            streaming un line up variado de distintos talentos locales, desde las 18:00 hs del día 14 de
            octubre, hasta las 06:00 hs del 15 de octubre. En el cual habrá distintas sorpresas en presencia de escribano público.

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
            En esta primera edición de “La tómbola de la joda” vamos a estar presentando vía
            streaming un line up variado de distintos talentos locales, desde las 18:00 hs del día 14 de
            octubre, hasta las 06:00 hs del 15 de octubre. En el cual habrá distintas sorpresas y se
            realizará un gran sorteo en presencia de escribano público.

            </div>
            </div>
                </div>
                <div class="carousel-item">
                <div class="card carta" id="dos">
            <div class="card-body">
            <h3>¿QUÉ ES UNA TÓMBOLA?</h3>
            <br />
            Es una rifa en la que los premios son objetos diversos y cuyos beneficios suelen
            destinarse a fines benéficos
            </div>
            </div>
                </div>
                <div class="carousel-item">
                <div class="card carta" id="uno">
            <div class="card-body">
            <h3>ANDAR PRODUCTIONS</h3>
            <br />
            Andar Productions es una joven productora de eventos, conformada por amigos y
            familia. Orientada a apoyar e impulsar la carrera artística de los talentos locales,
            brindándoles la oportunidad de posicionarse en la escena nacional e internacional.
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