import React from 'react';
import filtrar from '../modulos/filtrar';


function Menu(props) {
    const docentes = filtrar(props.array, "poblacion", "Docentes");
    const estudiantes = filtrar(props.array, "poblacion", "Estudiantes");
    const familias = filtrar(props.array, "poblacion", "Familias");
    const img = 'assets/img/';

    return (
        <div className="container">
            <br/>
            <div className="row">
                <div className="col-sm-6">
                    <img src={img +"encabezado_ch_aprendoencasa.png"} alt="Imagen de títiulo" /> 
                </div>
                <div className="col-sm-6 text-right">
                    <button onClick={props.handleCargarComponente} data-comp="enlaces" className="btn btn-success" >Enlaces COVID-19</button>
                </div>
            </div>
            <br/>

            <div className="row">
                <div className="col-sm-4">
                    <h4>Docentes</h4>  
                    <img src={img + "img_ch_docentes.png"} alt="Imagen de docentes"/>                     
                        
                        {                            
                            docentes.map((item, i) => (                    
                                    <div key={"docentes"+i} className="alert alert-primary" role="alert">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <h6>{ item.nombre }</h6>
                                        </a>
                                          {item.descripcion !== "null" &&
                                                <span>{ item.descripcion }</span>
                                          }
                                        
                                    </div>                                                                    
                            ))

                        }
                    
                </div>

                <div className="col-sm-4">                    
                    <h4>Estudiantes</h4>
                    <img src={img + "img_ch_estudiantes.png"} alt="Imagen de estudiantes"/>  
                        {                            
                            estudiantes.map((item, i) => (                    
                                    <div key={"docentes"+i} className="alert alert-primary" role="alert">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <h6>{ item.nombre }</h6>
                                        </a>
                                        {item.descripcion !== "null" &&
                                                <span>{ item.descripcion }</span>
                                          }
                                    </div>                                                                    
                            ))

                        }
                    </div>

                <div className="col-sm-4">
                    <h4>Familia</h4>
                    <img src={img + "img_ch_familia.png"} alt="Imagen de familia"/>  
                        
                        {                           
                            familias.map((item, i) => (                    
                                    <div key={"docentes"+i} className="alert alert-primary" role="alert">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <h6>{ item.nombre }</h6>
                                        </a>
                                        {item.descripcion !== "null" &&
                                                <span>{ item.descripcion }</span>
                                          }
                                    </div>                                                                    
                            ))

                        }
                    </div>
            </div>

        </div>
    )

}

export default Menu;