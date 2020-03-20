import React from 'react';
import imgEncabezadoRec from '../assets/img/encabezado_ch_recursos_covid19.png';


function EnlacesCovid (props) {
    
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Enlaces COVID-19</h1>
                <img className="img-derecha" data-comp="menu" onClick={props.handleCargarComponente} src="www.imagen.png" alt="Botón volver" role="button" />
            </div>            
            <div className="row">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis unde quidem esse minus deserunt eligendi, pariatur, optio eius enim a officia quod laborum necessitatibus ad ipsum? Necessitatibus hic quidem consectetur.
            </div>
            <hr/>
            <div className="row">
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