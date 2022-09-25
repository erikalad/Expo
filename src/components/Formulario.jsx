import React from "react";
import './Formulario.css'
import Swal from "sweetalert2";


export default function Formulario(){

    


    return(
        <div className="card col-10" id="form">
            <form>
            <h1>Inscripción al sorteo</h1>
            <br />
            <hr />
            <h3>Datos del Comprador</h3>
            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Nombre y Apellido</label>
                <div className="col-sm-10">
                <input type="text" readonly className="form-control" id="staticEmail" placeholder="Nombre y Apellido"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@ejemplo.com"/>
                </div>
            </div>
            
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Teléfono</label>
                <div className="col-sm-10">
                <input type="teléfono" className="form-control" id="exampleFormControlInput1" placeholder="Teléfono"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">DNI</label>
                <div className="col-sm-10">
                <input type="dni" className="form-control" id="exampleFormControlInput1" placeholder="DNI"/>
                </div>
            </div>
            <button id="boton" type="button" className="btn btn-dark">Comprar entrada</button>
            </form>
        </div>
    )
}


