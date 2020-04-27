import React from 'react';
import './destacados.css';

function Destacados(props) {

    return (
        <React.Fragment>
            {
                props.array.map((item, i) => (
                    <div className="col-sm-3" key={"tarjeta"+i} >
                        <a href={item.url} target="_blank" rel="noopener noreferrer" >
                            <img src={item.urlImg} className="img-thumbnail" alt={item.nombre} />
                        </a>                            
                    </div>
                ))
            }
        </React.Fragment>
                );
 }


 export default Destacados;