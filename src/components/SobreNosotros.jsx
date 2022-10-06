import React from "react";
import './SobreNosotros.css'

export default function SobreNosotros (){
    return(
        <div className="container" >
            <h1 className="col text-center" >SOBRE NOSOTROS</h1>

            <hr />
            <div id="sobre-nosotros">
            <div className="card carta" id="uno">
            <div className="card-body">
            <h3>ANDAR PRODUCTIONS</h3>
            <br />
            <p id="texto">
            Andar Productions es una joven productora de eventos, conformada por amigos y
            familia. Orientada a apoyar e impulsar la carrera artística de los talentos locales,
            brindándoles la oportunidad de posicionarse en la escena nacional e internacional.
            </p>
            </div>
            </div>

            <div className="card carta" id="dos">
            <div className="card-body">
            <h3>¿QUÉ ES UNA TÓMBOLA?</h3>
            <br />
            <p id="texto1">
            Es una rifa en la que los premios son objetos diversos y cuyos beneficios suelen
            destinarse a fines benéficos.
            </p>
            </div>
            </div>

            <div className="card carta" id="tres">
            <div className="card-body">
            <h3>¿CÓMO LO REPRESENTAMOS DESDE ANDAR?</h3>
            <br />
            <p>
            En esta primera edición de “La tómbola de la joda” vamos a estar presentando vía
            streaming un line up variado de distintos talentos locales, desde las 18:00 hs del día 31 de
            octubre, hasta las 01:00 hs del 1 de noviembre. En el cual habrá distintas sorpresas en presencia de escribano público.
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
            <h3>¿CÓMO LO REPRESENTAMOS DESDE ANDAR?</h3>
            <br />
            <p>
            En esta primera edición de “La tómbola de la joda” vamos a estar presentando vía
            streaming un line up variado de distintos talentos locales, desde las 18:00 hs del día 14 de
            octubre, hasta las 06:00 hs del 15 de octubre. En el cual habrá distintas sorpresas y se
            realizará un gran sorteo en presencia de escribano público.
            </p>
            </div>
            </div>
                </div>
                <div className="carousel-item">
                <div className="card carta" id="dos">
            <div className="card-body">
            <h3>¿QUÉ ES UNA TÓMBOLA?</h3>
            <br />
            <p>
            Es una rifa en la que los premios son objetos diversos y cuyos beneficios suelen
            destinarse a fines benéficos.
            </p>
            </div>
            </div>
                </div>
                <div className="carousel-item">
                <div className="card carta" id="uno">
            <div className="card-body">
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