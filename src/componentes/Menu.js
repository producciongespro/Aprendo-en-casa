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
import imgRecursosCovid from '../assets/img/btn_ch_recursos_covid19.png';
import imgLogo from '../assets/img/logotipos_ch_mep_sinart_cafenal.png';
import imgMepInforma from '../assets/img/btn_ch_mep_informa.png';

function Menu(props) {
    const docentes = filtrar(props.array, "poblacion", "Docentes");
    const estudiantes = filtrar(props.array, "poblacion", "Estudiantes");  
    const familias = filtrar(props.array, "poblacion", "Familias");

    console.log(docentes);
    
    
    //Array filtrados docentes:
    const ofertaTelevisivaDocentes = filtrar(docentes, "categoria", "Oferta televisiva");
    const ofertaVirtualDocentes = filtrar(docentes, "categoria", "Oferta virtual");
    const mepInformaDocentes = filtrar(docentes, "categoria", "Mep informa");
    
    
    //Array filtrados estudiantes:
    const ofertaTelevisivaEstudiantes = filtrar(estudiantes, "categoria", "Oferta televisiva");
    const ofertaVirtualEstudiantes = filtrar(estudiantes, "categoria", "Oferta virtual");

    //Array filtrados familias:
    const ofertaTelevisivaFamilias = filtrar(familias, "categoria", "Oferta televisiva");
    const ofertaVirtualFamilias = filtrar(familias, "categoria", "Oferta virtual");


    return (
        <div className="container">
            <br />
            <div className="row">
                <div className="col-sm-12 encabAprend">
                    <img className="img-fluid" src={imgEncabezado} alt="Imagen de títiulo" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-right">
                <img className="btn img-fluid btn-recursos hvr-push" src={imgRecursosCovid} onClick={props.handleCargarComponente} data-comp="enlaces" alt="Enlaces COVID-19" />        
                </div>
            </div>
            <br />

            <div className="row">
                <div className="col-sm-4">
                    {
                        //***********DOCENTES
                    }
                    <img className="img-fluid" src={imgDocentes} alt="Imagen de docentes" />
                    <br />
                    {
                        //oferta televisiva docentes
                    }
                    <img className="img-fluid" src={imgOfertaTelevisiva} alt="oferta televisiva" />
                    {
                        ofertaTelevisivaDocentes &&
                        ofertaTelevisivaDocentes.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"televisivaDocentes" + i} />
                        ))

                    }
                    {
                        //oferta Virtual
                    }
                    <img className="img-fluid" src={imgOfertaVirtual} alt="Oferta televisiva" />
                    {
                        ofertaVirtualDocentes &&
                        ofertaVirtualDocentes.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"virtualDocentes" + i} />                            
                        ))

                    }

                    {
                        //MEP informa
                        //<img className="img-fluid" src={imgMepInforma} alt="MEP informa" />
                    }                                     
                    {
                        /*
                        mepInformaDocentes &&
                        mepInformaDocentes.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"mepInforma" + i} />                            
                        ))
                        */
                    }


                </div>

                <div className="col-sm-4">
                {
                        //***********ESTUDIANTES
                    }
                    <img src={imgEstudiantes} alt="Imagen de estudiantes" />
                    <br/>
                    {
                        //oferta televisiva  estudiantes
                    }
                    <img className="img-fluid" src={imgOfertaTelevisiva} alt="oferta virtual" />
                    {
                        //Valida que el arreglo no esté vacio:
                        ofertaTelevisivaEstudiantes &&
                        //Mapeo del arreglo para renderizar
                        ofertaTelevisivaEstudiantes.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"televisivaEstudiantes" + i} />                            
                        ))

                    }
                     {
                        //oferta virtual estudiantes
                    }
                    <img className="img-fluid" src={imgOfertaVirtual} alt="oferta virtual" />
                    {
                        //Valida que el arreglo no esté vacio:
                        ofertaVirtualEstudiantes &&
                        //Mapeo del arreglo para renderizar
                        ofertaVirtualEstudiantes.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"virtualEstudiantes" + i} />                            
                        ))

                    }
                </div>

                <div className="col-sm-4">
                    <img src={imgFamilia} alt="Imagen de familia" />

                    {
                            // FAMILIA

                    }

                <img className="img-fluid" src={imgOfertaTelevisiva} alt="oferta virtual" />
                    {
                        //Valida que el arreglo no esté vacio:
                        ofertaTelevisivaFamilias &&
                        //Mapeo del arreglo para renderizar
                        ofertaTelevisivaFamilias.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"televisivaFamilia" + i} />                            
                        ))

                    }
                     {
                        //oferta virtual familia
                        //<img className="img-fluid" src={imgOfertaVirtual} alt="oferta virtual" />
                    }
                    
                    {
                     /*
                        ofertaVirtualFamilias &&
                     
                        ofertaVirtualFamilias.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"virtualFamilia" + i} />                            
                        ))
                    */
                    }
                </div>


            </div>

         <div className="row">
            <div className="col-sm-10">
            <strong className="creditos"> DIRECCIÓN DE RECURSOS TECNOLÓGICOS EN EDUCACIÓN <br/> DIRECCIÓN DE DESARROLLO CURRICULAR</strong>
            </div>
            <div className="col-sm-2">
                <img src={imgLogo} alt="Imagen de virus animado"/>
            </div>
        </div>




        </div>
    )

}

export default Menu;