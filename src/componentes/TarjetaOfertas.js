import React from 'react';

function TerjetaOfertas(props) {
    return (
        <div className="alert" role="alert" tabIndex={props.tabIndex}  >
            <a href={props.item.link} target="_blank" rel="noopener noreferrer">
                <h1 className="textEnc">{props.item.nombre}</h1>
            </a>
            {props.item.descripcion !== "null" &&
                <span>{props.item.descripcion}</span>
            }

        </div>
    )

}

export default TerjetaOfertas;