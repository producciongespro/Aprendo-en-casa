import React from 'react';
import './destacados.css';

function Destacados(props) {

    return (
        <React.Fragment>
            {
                props.array.map((item, i) => (
                    <div className="card tarjeta" key={"tarjeta"+i} >
                        <a href={item.url} target="_blank" rel="noopener noreferrer" >
                            <img src={item.urlImg} className="card-img-top img-previa" alt={item.nombre} />
                        </a>
                        
                            <div className="card-body">
                                {
                                    //<p className="card-text"> {item.descripcion} </p>
                                }
                            </div>
                    </div>
                ))
            }
        </React.Fragment>
                );
 }


 export default Destacados;