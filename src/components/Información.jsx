import React from "react";
import info from './../assest/info.jpeg'
import './Información.css'
import expo from './../assest/expo-cannabis.jpeg'


export default function Info(){
    return(
        <section className="place-holder" id="información">
            <div className="card mb-3 info">
  <div className="row g-0">
    <div className="col-md-6">
      <img src={info} className="img-fluid rounded-start" alt="charlotte"/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title"><strong>Charlotte de Witte</strong></h5>
        <p>
                Charlotte de Witte es una DJ y productora discográfica belga. Su estilo es un techno de marcada tendencia minimal, así como influencias del ácid.1​ Al inicio de su carrera pinchaba con alias de Raving George. Es la fundadora del sello KNTXT. comenzó a explorar la escena de los clubes nocturnos subterráneos de Gante, donde se sintió atraída por la música electrónica. Comenzó a pinchar en 2010, principalmente tocando música electro; su trabajo de producción comenzó unos dos años después. Ganó un concurso de DJ de Studio Brussel en 2011 y posteriormente actuó en el festival Tomorrowland.
                <br />
                <br />
                El 31 de diciembre de 2020, actuó en Tomorrowland, que se llevó a cabo en línea virtualmente debido al COVID-19.1​3​
                
                El 5 de febrero de 2021, anunció su compromiso con el DJ y productor de techno italiano Enrico Sangiuliano a través de las redes sociales.4​
               
                El 29 de abril de 2021, transmitió en colaboración con la Fórmula 1, desde el autódromo Internazionale del Mugello, antes de su Fórmula EP.
                </p>
      </div>
    </div>
  </div>
</div>



<div className="card mb-3 info">
  <div className="row g-0">
    <div className="col-md-6">
      <img src={expo} className="img-fluid rounded-start" alt="expo"/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title"><strong>Expo Cannabis 2022</strong></h5>
        <p>
        Cientos de empresas nacionales e internacionales junto al Estado e instituciones.
        <br />
        Escenario exclusivo para la presentación de productos y servicios.
        <br />
        Una jornada exclusiva de negocios con los actores más relevantes del sector.
        <br />
        Los especialistas médicos y científicos de Argentina y el mundo junto a las empresas más importantes del sector, reunidos en un solo lugar.

        </p>
      </div>
    </div>
  </div>
</div>
<div className="boton">
<button type="button" className="btn btn-outline-dark"><a href="https://forms.gle/iGjvEtfzAHs6R1zPA">Inscribite al sorteo</a></button>
</div>
        </section>
    )
}