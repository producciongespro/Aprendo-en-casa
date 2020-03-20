import React from 'react';
import imgVirus from '../assets/img/virus01.gif';


function Splash() {

    return (
        
        <div className="container text-center">
                <div className="row">
            <div className="col-sm-12 m-10">
                <img className="img-fluid" src={imgVirus} alt="Imagen de virus animado"/>
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-sm-12">
                <h3 className="cargando" >Cargando datos, por favor espere...</h3>
            </div>
        </div>
        </div>
        
    )

}


export default Splash;