import React from "react";
import './Presentación.css'
import img1 from './../assest/passline.png'
import img6 from './../assest/lonoz.jpeg'
import img7 from './../assest/fernanda.jpeg'
import img8 from './../assest/galo.jpeg'
import img9 from './../assest/nico.jpeg'
import img10 from './../assest/malvi.jpeg'
import img11 from './../assest/martina.jpeg'

export default function Presentación(){
    return(
        <div className="container fluid" id="información">
        
{/*---- PASSLINE ----*/}
                    <div className="card mt-5" id="passline">
                        <div className="row justify-content-md-center">
                        <div className="col-md-10 text-center">
                        <img src={img1} className="img-fluid" alt="evento" id="img1"/>
                        </div>
                    </div>
                    </div>

{/*----- ARTISTAS -----*/}
<div className="artis">
                    <h1 className="col text-center" >CON LA PARTICIPACIÓN DE</h1>
                    <hr />
                    <body>
	<div class="wrap">
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card1">
                <img src={img9} className="img-fluid rounded-start" alt="Nico"/>
                </div>
				<div class="atras">
                <h5>NICO FERRA DJ-ANFITRIÓN</h5>
					<p>Influencer de la movida electrónica, dj y productor desde el 2012. militante del groove y
excelente lector de pista</p>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card2">
                <img src={img7} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5 >FERNANDA GASBARRO</h5>
					<p>Será la encargada de conducir los streaming de La Tombola de La Joda.</p>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card3">
                <img src={img8} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5>SEBASTIÁN GALLO</h5>
					<p>Si bien sus sonidos son bien melódicos y oscuros, así como también voladores e hipnóticos, aún conserva la presencia del género progresivo a la hora del armado de sus sets, lo que permite que el artista se destaque en cada show y que su público viaje a través de su música.</p>
				</div>
			</div>
		</div>
	</div>
</body>

<body>
	<div class="wrap">
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card1">
                <img src={img6} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5 className="card-title">PABLO ALBORNOZ</h5>
					<p>Músico violinista compositor y productor electrónico. </p>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card2">
                <img src={img10} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5 className="card-title">MALVI-DJ VINILOS</h5>
					<p>DJ de alto nivel desde una corta edad.</p>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card3">
                <img src={img11} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5 className="card-title">MARTINA DJ</h5>
					<p>Sus sets están teñidos de sonidos del house, desde un deep hasta un minimal tech.</p>
				</div>
			</div>
		</div>
	</div>
</body>
</div>                  



{/*----- ARTISTAS-CELU -----*/}
<div className="artis-celu">
<h1 className="col text-center" >CON LA PARTICIPACIÓN DE</h1>
                    <hr />
                    <body>
	<div class="wrap">
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card1">
                <img src={img9} className="img-fluid rounded-start" alt="Nico"/>
                </div>
				<div class="atras">
                <h5>NICO FERRA DJ-ANFITRIÓN</h5>
					<p>Influencer de la movida electrónica, dj y productor desde el 2012. militante del groove y
excelente lector de pista</p>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card2">
                <img src={img7} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5 >FERNANDA GASBARRO</h5>
					<p>Será la encargada de conducir los streaming de La Tombola de La Joda.</p>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card3">
                <img src={img8} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5>SEBASTIÁN GALLO</h5>
					<p>Si bien sus sonidos son bien melódicos y oscuros, así como también voladores e hipnóticos, aún conserva la presencia del género progresivo a la hora del armado de sus sets, lo que permite que el artista se destaque en cada show y que su público viaje a través de su música.</p>
				</div>
			</div>
		</div>
	</div>
</body>

<body>
	<div class="wrap">
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card1">
                <img src={img6} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5 className="card-title">PABLO ALBORNOZ</h5>
					<p>Músico violinista compositor y productor electrónico. </p>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card2">
                <img src={img10} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5 className="card-title">MALVI-DJ VINILOS</h5>
					<p>DJ de alto nivel desde una corta edad.</p>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card3">
                <img src={img11} className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5 className="card-title">MARTINA DJ</h5>
					<p>Sus sets están teñidos de sonidos del house, desde un deep hasta un minimal tech.</p>
				</div>
			</div>
		</div>
	</div>
</body>
</div>            
        </div>
    )
}