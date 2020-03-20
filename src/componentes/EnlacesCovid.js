import React from 'react';
import imgEncabezadoRec from '../assets/img/encabezado_ch_recursos_covid19.png';


function EnlacesCovid (props) {
    
    return (
        <div className="container">
           <div className="row">
                <div className="col-sm-12 encabRecursos">
                    <img className="img-fluid encab" src={imgEncabezadoRec} alt="Imagen de Encabezado" />
                </div>
            </div>
    
            <div className="row">
                <div className="col-sm-10 text-right">
                    <button data-comp="menu" className="btn btn-info btnvolver" onClick={props.handleCargarComponente} >
                        Volver
                    </button>
                </div>
            </div>
        
            <div className="row-sm">
             Conjunto de recursos en video y pdf, para apoyar en la comprensión del porqué y cómo actuar ante el estado de emergencia COVID-19 en nuestro país. .
            </div>
            <hr/>
            <div className="row-sm">
                {
                    props.array.map((item,i)=>(
                        
                <div key={"tarjeta" + i} className="col-4">
                <div className="card">
                    <img
                        src={item.urlImagen}
                        className="card-img-top"
                        alt={"imagen previa del recurso " + item.nombre}
                    />
                    <div className="card-body">
                        <a href={item.url}
                         target="_blank"
                         rel="noopener noreferrer"
                        >
                            <h5 className="card-title">
                                {item.nombre}
                            </h5>
                        </a>
                        <p className="card-text">
                            {item.descriptivo}
                        </p>
                    </div>
                    <div className="card-body">                        
                        <a
                            href={item.url}
                            className="card-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver recurso <i className="fas fa-eye" ></i>                                    
                    </a>
                    </div>
                </div>
            </div>
                    ))
                    
                }
            </div>
        </div>
    );
}


export default EnlacesCovid;