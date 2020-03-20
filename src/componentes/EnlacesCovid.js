import React from 'react';
import imgEncabezadoRec from '../assets/img/encabezado_ch_recursos_covid19.png';
import imgVolver from '../assets/img/btn_ch_volver.png';

function EnlacesCovid (props) {
    
    return (
        <div className="container">
           <div className="row">
                <div className="col-sm-12 encabRecursos mt-1">
                    <img className="img-fluid encab" src={imgEncabezadoRec} alt="Imagen de Encabezado" />
                </div>
            </div>
                
            <div className="row my-3">
                <div className="col-sm-12 text-center img-fluid btn-volver">
                    <img 
                        src={imgVolver}
                        alt="botón volver" 
                        data-comp="menu" 
                        onClick={props.handleCargarComponente}
                    />
                    
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-12">
                    <strong className="indicaciones">Conjunto de recursos en video y pdf, para apoyar en la comprensión del porqué y cómo actuar ante el estado de emergencia COVID-19 en nuestro país.</strong>
                </div>
            </div>
            <hr/>
            <div className="row">
                {
                    props.array.map((item,i)=>(
                        
                <div key={"tarjeta" + i} className="col-sm-4 my-2">
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