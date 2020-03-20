import React from 'react';

function TerjetaOfertas(props) {
    return (
        <div className="alert" role="alert">
        <a href={props.item.link} target="_blank" rel="noopener noreferrer">
            <h6>{props.item.nombre}</h6>
        </a>
        {props.item.descripcion !== "null" &&
            <span>{props.item.descripcion}</span>
        }

    </div>
    )
    
}

export default TerjetaOfertas;