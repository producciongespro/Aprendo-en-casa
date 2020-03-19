import React from 'react';
import filtrar from '../modulos/filtrar';



function Menu(props) {
    const docentes = filtrar(props.array, "poblacion", "Docentes");
    console.log(docentes);

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Menu</h1>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <h4>Docentes</h4>                        
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est possimus libero reprehenderit cum optio expedita.
                    </p>
                        
                        {
                            docentes &&
                            docentes.map((item, i) => (                    
                                    <div key={"docentes"+i} className="alert alert-primary" role="alert">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <h6>{ item.nombre }</h6>
                                        </a>
                                        <span>{ item.descripcion }</span>
                                    </div>                                                                    
                            ))

                        }
                    
                </div>

                <div className="col-sm-4">                    
                    <h4>Estudiantes</h4>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est possimus libero reprehenderit cum optio expedita dolorum natus aut commodi porro. Tempora vitae est officiis rem praesentium doloribus veritatis, molestias suscipit?
                    </div>

                <div className="col-sm-4">
                    <h4>Familia</h4>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est possimus libero reprehenderit cum optio expedita dolorum natus aut commodi porro. Tempora vitae est officiis rem praesentium doloribus veritatis, molestias suscipit?
                    </div>
            </div>

        </div>
    )

}

export default Menu;