import React from 'react';
import TarjetaOfertas from '../componentes/TarjetaOfertas';
import filtrar from '../modulos/filtrar';

//imagenes
import imgEncabezado from '../assets/img/encabezado_ch_aprendoencasa.png';
import imgDocentes from '../assets/img/img_ch_docentes.png';
import imgEstudiantes from '../assets/img/img_ch_estudiantes.png';
import imgFamilia from '../assets/img/img_ch_familia.png';
import imgOfertaTelevisiva from '../assets/img/btn_ch_oferta_tv.png';
import imgOfertaVirtual from '../assets/img/btn_ch_oferta_virtual.png';


function Menu(props) {
    const docentes = filtrar(props.array, "poblacion", "Docentes");
    const estudiantes = filtrar(props.array, "poblacion", "Estudiantes");  
    const familias = filtrar(props.array, "poblacion", "Familias");
    
    const ofertaTelevisivaDocentes = filtrar(docentes, "categoria", "Oferta televisiva");
    const ofertaVirtualDocentes = filtrar(docentes, "categoria", "Oferta virtual");
    const ofertaTelevisivaEstudiantes = filtrar(estudiantes, "categoria", "Oferta televisiva");


    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-sm-12">
                    <img className="img-fluid" src={imgEncabezado} alt="Imagen de títiulo" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-right">
                    <button onClick={props.handleCargarComponente} data-comp="enlaces" className="btn btn-success" >Enlaces COVID-19</button>
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col-sm-4">
                    <img className="img-fluid" src={imgDocentes} alt="Imagen de docentes" />
                    <br />
                    <img className="img-fluid" src={imgOfertaTelevisiva} alt="oferta televisiva" />
                    {
                        ofertaTelevisivaDocentes.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"televisivaDocentes" + i} />
                        ))

                    }

                    <img className="img-fluid" src={imgOfertaVirtual} alt="oferta televisiva" />
                    {
                        ofertaVirtualDocentes.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"virtualDocentes" + i} />                            
                        ))

                    }

                </div>

                <div className="col-sm-4">
                    <img src={imgEstudiantes} alt="Imagen de estudiantes" />
                    {
                        ofertaTelevisivaEstudiantes &&
                        ofertaTelevisivaEstudiantes.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"televisivaEstudiantes" + i} />                            
                        ))

                    }
                </div>

                <div className="col-sm-4">
                    <img src={imgFamilia} alt="Imagen de familia" />

                    {
                        familias.map((item, i) => (
                            <div key={"docentes" + i} className="alert alert-primary" role="alert">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <h6>{item.nombre}</h6>
                                </a>
                                {item.descripcion !== "null" &&
                                    <span>{item.descripcion}</span>
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