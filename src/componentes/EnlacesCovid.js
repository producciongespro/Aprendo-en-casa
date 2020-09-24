import React from 'react';
import imgEncabezadoRec from '../assets/img/encabezado_ch_recursos_covid19.png';
import imgVolver from '../assets/img/btn_ch_volver.png';

function EnlacesCovid (props) {
    
    return (
        <div className="container">
           <div className="row">
                <div className="col-sm-12 encabRecursos mt-1">
                    <img 
                    tabIndex="1" role="banner"
                    className="img-fluid encab" 
                    src={imgEncabezadoRec} 
                    alt="Banner de Recursos Covid" />
                </div>
            </div>
                
            <div className="row my-3">
                <div className="col-sm-12 hvr-wobble-horizontal text-center img-fluid btn-volver">
                    <img 
                        tabIndex="1" role="button"
                        src={imgVolver}
                        alt="volver a la página de aprendo en casa" 
                        data-comp="menu" 
                        onClick={props.handleCargarComponente}
                    />
                    
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-12">
                    <strong 
                    tabIndex="1" 
                    className="indicaciones">Conjunto de recursos en video y pdf, para apoyar en la comprensión del porqué y cómo actuar ante el estado de emergencia COVID-19 en nuestro país.
                    </strong>
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
                        alt={"imagen previa del recurso" + item.nombre}
                    />
                    <div className="card-body">
                        <a 
                        tabIndex="2"
                        href={item.url}
                         target="_blank"
                         alt= "Visitar recurso en una ventana nueva"
                         rel="noopener noreferrer"      
                        >
                            <h1 className="card-title textEnc" 
                            title="Abre el enlace en una ventana nueva">
                               {item.nombre}
                            </h1>
                        </a>
                        <p className="card-text"
                        tabIndex="2"
                        >
                            {item.descriptivo }
                        </p>
                    </div>
                    <div className="card-body">                        
                        <a
                            tabIndex="2"
                            title="desde una ventana nueva"
                            href={item.url}
                            className="card-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver recurso<i className="fas fa-eye" ></i>                                    
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