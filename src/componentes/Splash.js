import React from 'react';
import imgVirus from '../assets/img/virus01.gif';


function Splash() {

    return (
        
        <div className="div-centrado text-center ">
                <div className="row">
            <div className="col-sm-12 mt-5">
                <img className="img-logo" src={imgVirus} alt="Imagen de virus animado"/>
            </div>
        </div>        
        <div className="row">
            <div className="col-sm-12">
                <strong className="cargando">
                    Cargando datos, por favor espere...
                </strong>
                
            </div>
        </div>
        </div>
        
    )

}


export default Splash;