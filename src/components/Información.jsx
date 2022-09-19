import React from "react";
import info from './../assest/info.jpeg'
import './Información.css'


export default function Info(){
    return(
        <section className="place-holder">
      
        <div className="container-fluid">
            <div className="row">


                <div className="col-md-6 col-sm-12 pl-0 pr-0 ">
                <img  src={info} alt="charlotte" id="charlotte"/>
                 
                </div>


                <div className="col-md-6 col-sm-12">
                <h3 className="col" id="premios" ><strong>Charlotte de Witte</strong></h3>
                <div className="col">
                <p>
                Charlotte de Witte es una DJ y productora discográfica belga. Su estilo es un techno de marcada tendencia minimal, así como influencias del ácid.1​ Al inicio de su carrera pinchaba con alias de Raving George. Es la fundadora del sello KNTXT. comenzó a explorar la escena de los clubes nocturnos subterráneos de Gante, donde se sintió atraída por la música electrónica. Comenzó a pinchar en 2010, principalmente tocando música electro; su trabajo de producción comenzó unos dos años después. Ganó un concurso de DJ de Studio Brussel en 2011 y posteriormente actuó en el festival Tomorrowland.
                <br />
                <br />
                En 2015, de Witte cambió su nombre artístico por su nombre real, lanzando el EP debut, Weltschmerz, bajo el sello Turbo Recordings. Estos fueron seguidos por una serie de EPs en 2017, así como Heart of Mine y The Healer, 2018. de Witte se ha presentado en varios eventos notables de música electrónica, incluido el Festival Junction 2, Boiler Room y Printworks .
                
                En 2019, lanzó su propio sello, KNTXT. Artistas como Chris Liebing, Monoloc, Alignment han publicado para KNTXT.2​
                
                El 31 de diciembre de 2020, actuó en Tomorrowland, que se llevó a cabo en línea virtualmente debido al COVID-19.1​3​
                
                El 5 de febrero de 2021, anunció su compromiso con el DJ y productor de techno italiano Enrico Sangiuliano a través de las redes sociales.4​
               
                El 29 de abril de 2021, transmitió en colaboración con la Fórmula 1, desde el autódromo Internazionale del Mugello, antes de su Fórmula EP.
                </p>
                </div>
                </div>
            </div>
        </div>
        </section>
    )
}