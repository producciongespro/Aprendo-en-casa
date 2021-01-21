import React from 'react';
import './destacados.css';

function Destacados(props) {
console.log(" props.array",  props.array);
    return (
        <React.Fragment>
            {
                props.array.map((item, i) => (
                    <div className="col-sm-2 text-center mb-2 destacados"  key={"tarjeta"+i} >
                        <a href={item.url} target="_blank" rel="noopener noreferrer" >
                            <img 
                            tabIndex="2" role="button"
                            title="Abre en una ventana nueva"
                            src={item.urlImg} 
                            className="img-thumbnail hvr-pop" 
                            alt={item.nombre} />
                        </a>                            
                    </div>
                ))
            }
        </React.Fragment>
                );
 }


 export default Destacados;