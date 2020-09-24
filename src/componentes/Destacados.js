import React from 'react';
import './destacados.css';

function Destacados(props) {

    return (
        <React.Fragment>
            {
                props.array.map((item, i) => (
                    <div className="col-sm-3 text-center mb-2" key={"tarjeta"+i} >
                        <a href={item.url} target="_blank" rel="noopener noreferrer" >
                            <img 
                            tabIndex="2" role="button"
                            title="Abre en una ventana nueva"
                            src={item.urlImg} 
                            className="img-thumbnail" 
                            alt={item.nombre} />
                        </a>                            
                    </div>
                ))
            }
        </React.Fragment>
                );
 }


 export default Destacados;