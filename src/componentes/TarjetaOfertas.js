import React from 'react';

const obtenerHorarios=(cadena )=> {
    let tmpArray=null;
    if (cadena) {
        tmpArray = cadena.split(";")
    }
return tmpArray;
}


function TerjetaOfertas(props) {

    let horarios = obtenerHorarios(props.item.descripcion);
    console.log("horarios", horarios);     



    return (
        <div className="alert" role="alert" tabIndex={props.tabIndex}  >
            <a href={props.item.link} target="_blank" rel="noopener noreferrer">
                <h1 className="textEnc">{props.item.nombre}</h1>
            </a>
            <ul>
            {
            /*props.item.descripcion !== "null" &&
                <span>{props.item.descripcion}</span>
            */
            
            horarios &&
            horarios.map((item,i)=>(
                <li key={"horario"+i }> {item} </li>
            ))
            }
            </ul>

        </div>
    )

}

export default TerjetaOfertas;