
                    <div className="container artistas">
                    {/*--ARTISTA PRINCIPAL---*/}
                    <div className="card mb-3 card1">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={img9} className="img-fluid rounded-start" alt="Nico"/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">NICO FERRA DJ-ANFITRIÓN</h5>
                                <p className="card-text">Influencer de la movida electrónica, dj y productor desde el 2012. militante del groove y
excelente lector de pista, su música extremadamente bailable, ondera, sensual y estilosa
es capaz de poner a bailar al público más exigente. carismático dentro y fuera de la
cabina, logra transmitir la enegría que necesita la pista. sin dudas un artista en
ascenso que logra cautivar los corazones de la gente, quienes empatizan no solo con
su sonido sino también con sus ideas y valores.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    
                   
                    {/*--ARTISTA 2---*/}
                        <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 card2">
                            <img src={img7} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Fernanda Gasbarro CONDUCTORA OFICIAL</h5>
                                <p className="card-text">Fernanda Gasbarro aka. LøqløK @loqlok.ofc será la encargada de conducir los streaming de La Tombola de La Joda.
Conductora de "Cultura Dreamers" @culturadreamers , el programa de la productora DREAMERS MUSIC @dreamersmusic.ar, todos los Jueves de 18 a 20hs. Dedicado exclusivamente a la música electrónica, habiendo entrevistado a figuras como el mismísimo Hernan Cattaneo, Soul Button, Darin Epsilon, Blancah, Morttagua, Eleonora por nombrar algunos y emitido por Vorterix Mar del Plata 104.5.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    {/*--ARTISTA 3---*/}
                        <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 card3">
                            <img src={img8} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Sebastián Gallo</h5>
                                <p className="card-text">GALØ con base en Mar Del Plata comenzó sus primeros pasos por la música electrónica en el año 2015, 
Si bien sus sonidos son bien melódicos y oscuros, así como también voladores e hipnóticos, aún conserva la presencia del género progresivo a la hora del armado de sus sets, lo que permite que el artista se destaque en cada show y que su público viaje a través de su música.</p>
                            </div>
                            </div>
                        </div>
                        </div>

                         {/*--MUSICO INVITADO---*/}
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={img6} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Pablo Albornoz</h5>
                                <p className="card-text">Lonoz set live es un proyecto electrónico de Pablo José Albornoz musico violinista compositor y productor electrónico (San Juan) en el cual realiza sus set en vivo con intervenciones de violín en loops y synthes en sincronía con su música. Realiza constantes tours por Argentina y Europa  conjuntamente con D-Mol (tango electrónico)  la cual fue creador desde 2014.</p>
                            </div>
                            </div>
                        </div>
                        </div> 
                    </div>



{/*----- Carrousel cocinero & boton compra -----*/}
<div className="coci-compra">
{/*----- Carrousel cocinero -----*/}
<div className="card mt-5" id="cocinero">
<div className="row justify-content-md-center">
 <div className="col-md-12 text-center">
<div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={img2} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={img3} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={img5} className="d-block w-100" alt="..."/>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>

</div>
<div className="col-md-4 text-center">
<div class="card-img-overlay">
            <h5 className="card-title text-center" style={{marginRight:"2rem" , color:"white"}}><h1><strong>Santiago Uribe</strong></h1></h5>
            <br />
            <br />
            <br />
            <p style={{color:"white"}}>Cocinero ejecutivo<br />
            Para brindar la mejor comida en este Evento!</p>
        </div>
</div>
</div>
</div>



<div className="col-md-4 mt-5 " id="entradas" >

<h3 className="titu"><ImArrowDownRight className="ic"/><div className="noafu">NO TE QUEDES AFUERA!</div><ImArrowDownLeft className="ic"/></h3>      
<a href="https://www.passline.com/eventos/tombola-de-la-joda-31102022"><button  type="button" className="btn btn-dark" id="entra"> COMPRÁ AHORA  <CgShoppingCart /> </button></a>



    <div className="card mb-3 text-center text-bg-light" >
    <h3 className="card-header" >SEGUINOS</h3>
  
    <div className="card-body" id="redes">
        
    <div className='logo'>
        <a href="https://www.instagram.com/andarproductions/" className='logo' id="ig"><IoLogoInstagram /></a>
       
        </div>

        <div className='logo' >
    <a href="https://www.twitch.tv/andarproductions" id="twitch" className='logo'><SiTwitch /></a>
    
        </div>
    </div>
    </div>

</div>
</div>