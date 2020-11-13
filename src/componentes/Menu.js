import React from 'react';
import TarjetaOfertas from '../componentes/TarjetaOfertas';
import Destacados from '../componentes/Destacados';
import filtrar from '../modulos/filtrar';

function Menu(props) {
    const docentes = filtrar(props.array, "poblacion", "Docentes");
    const estudiantes = filtrar(props.array, "poblacion", "Estudiantes");
    const familias = filtrar(props.array, "poblacion", "Familias");

    //console.log(docentes);


    //Array filtrados docentes:
    const ofertaTelevisivaDocentes = filtrar(docentes, "categoria", "Oferta televisiva");
    const ofertaVirtualDocentes = filtrar(docentes, "categoria", "Oferta virtual");
    const mepInformaDocentes = filtrar(docentes, "categoria", "Mep informa");


    //Array filtrados estudiantes:
    const ofertaTelevisivaEstudiantes = filtrar(estudiantes, "categoria", "Oferta televisiva");
    const ofertaVirtualEstudiantes = filtrar(estudiantes, "categoria", "Oferta virtual");
    const mepInformaEstudiantes = filtrar(estudiantes, "categoria", "Mep informa");

    //Array filtrados familias:
    const ofertaTelevisivaFamilias = filtrar(familias, "categoria", "Oferta televisiva");
    const ofertaVirtualFamilias = filtrar(familias, "categoria", "Oferta virtual");
    const mepInformaFamilias = filtrar(familias, "categoria", "Mep informa");


    return (
        <div 
        className="container">              
   

            <div className="row text-center">
                
                <div className="col-sm-12">
                    <img 
             
                    tabIndex="1" role="banner"
                    className="img-fluid" 
                    src='./assets/img/banner_aprendoencasatv.png'
                    alt="Banner de Aprendo en casa" 
                    Title="Sitio que tiene como fin proveer orientaciones, guías específicas y recursos de apoyo a la comunidad educativa nacional, ante la suspensión de lecciones en centros educativos, a raíz de la declaratoria de Emergencia Nacional provocada por el COVID 19"      
                    />
                </div>
                </div>
                <div className="row text-right">
                <div className="col-sm-12 pt-4">
                    <img 
                    tabIndex="7" role="button"
                    className="btn img-fluid btn-recursos hvr-pop"
                     src="./assets/img/btn_recursos_covid.png" 
                    onClick={props.handleCargarComponente} 
                    onKeyPress={props.handleCargarComponente} 
                    data-comp="enlaces" 
                    alt="Enlace a una página para ver recursos COVID-19" 
                    title="Abre en una ventana nueva"
                    />
                </div>
            </div>


            <br />
            <div className="row">
                <div className="col-sm-4 mb-2">
                    <img 
                    tabIndex="2"
                   className="img-fluid" 
                    src="./assets/img/titulo_destacados.png" 
                    alt="Sección de destacados"
                    />
                </div>                
            </div>

            <div className="row" >
                          
                    <Destacados  array={props.destacados }/>                
            </div>
            <br />  

            <div className="row">
                <div className="col-sm-4" >
                    {
                        //***********DOCENTES
                    }
                    <img 
                    tabIndex="3"
                    role="heading" aria-level="1"
                    className="img-fluid" 
                    src="./assets/img/img_ch_docentes.png" 
                    alt="Oferta para los Docentes"
                  />
                    <br />
                    {
                        //oferta televisiva docentes
                    }
                    <img 
                    tabIndex="3"
                    role="heading" aria-level="2"
                    className="img-fluid hvr-bob" 
                    src="./assets/img/btn_ch_oferta_tv.png" 
                    alt="oferta televisiva Docentes" />
                    {
                        ofertaTelevisivaDocentes &&
                        ofertaTelevisivaDocentes.map ((item, i)=> (
                            <TarjetaOfertas 
                            tabIndex="3"
                            item={item} 
                            i={i }
                            key={"televisivaDocentes" + i} 
                           />
                        ))

                    }
                    {
                        //oferta Virtual
                    }
                    <img 
                    tabIndex="3"
                    role="heading" aria-level="3"
                    className="img-fluid hvr-bob" 
                    src="./assets/img/btn_ch_oferta_virtual.png" 
                    alt="Oferta Virtual Docentes" />
                    {
                        ofertaVirtualDocentes &&
                        ofertaVirtualDocentes.map((item, i) => (
                            <TarjetaOfertas 
                            tabIndex="3"
                            item={item} 
                            i={i} 
                            key={"virtualDocentes" + i} 
                            />
                        ))

                    }

                    {
                        //MEP informa
                        mepInformaDocentes > 0 &&
                        <img 
                        tabIndex="3" role="heading" aria-level="4"
                        className="img-fluid" 
                        src="./assets/img/btn_ch_mep_informa.png" 
                        alt="MEP informa Docentes" />
                    }
                    {

                        mepInformaDocentes &&
                        mepInformaDocentes.map((item, i) => (
                            <TarjetaOfertas 
                            tabIndex="3"
                            item={item} 
                            i={i} key={"mepInformaDoc " + i}
                             />
                        ))

                    }


                </div>





                <div className="col-sm-4">
                    {
                        //***********ESTUDIANTES
                    }
                    <img
                    tabIndex="4" 
                    className="img-fluid"
                    role="heading" aria-level="1"
                    src="./assets/img/img_ch_estudiantes.png" 
                    alt="Oferta para la Estudiantes" />
                    <br />
                    {
                        //oferta televisiva  estudiantes
                    }
                    <img
                    tabIndex="4" 
                    role="heading" aria-level="2"
                    className="img-fluid hvr-bob" 
                    src="./assets/img/btn_ch_oferta_tv.png" 
                    alt="Oferta Televisiva Estudiantes" />



                    {
                        //Valida que el arreglo no esté vacio:
                        ofertaTelevisivaEstudiantes &&
                        //Mapeo del arreglo para renderizar
                        ofertaTelevisivaEstudiantes.map((item, i) => (
                            <TarjetaOfertas 
                            tabIndex="4"
                            item={item} 
                            i={i}
                            key={"televisivaEstudiantes" + i} />
                        ))

                    }


                    {
                        //oferta virtual estudiantes
                    }
                    {
                        ofertaVirtualEstudiantes.length > 0 &&
                        <img 
                        tabIndex="4"
                        role="heading" aria-level="3"
                        className="img-fluid hvr-bob" 
                        src="./assets/img/btn_ch_oferta_virtual.png" 
                        alt="oferta virtual Estudiantes" />
                    }
                    {
                        console.log("ofertaVirtualEstudiantes", ofertaVirtualEstudiantes)
                    }


                    {
                        //Valida que el arreglo no esté vacio:
                        ofertaVirtualEstudiantes &&
                        //Mapeo del arreglo para renderizar
                        ofertaVirtualEstudiantes.map((item, i) => (
                            <TarjetaOfertas 
                            tabIndex="4"
                            item={item} i={i} 
                            key={"virtualEstudiantes" + i} />
                        ))
                    }

                    {

                        //MEP informa
                        mepInformaEstudiantes > 0 &&
                        <img 
                        tabIndex="4"
                        role="heading" aria-level="4"
                        className="img-fluid hvr-bob" 
                        src="./assets/img/btn_ch_mep_informa.png" 
                        alt="MEP informa Estudiantes" />
                    }
                    {

                        mepInformaEstudiantes &&
                        mepInformaEstudiantes.map((item, i) => (
                            <TarjetaOfertas 
                            tabIndex="4"
                            item={item} 
                            i={i} 
                            key={"mepInformaESt" + i} 
                            />
                        ))

                    }
                </div>

                <div className="col-sm-4" >
                    <img 
                    tabIndex="5"
                    className="img-fluid"
                     role="heading" aria-level="1"
                    src="./assets/img/img_ch_familia.png" 
                    alt="Oferta para la Familia" />

                    {
                        // FAMILIA tabIndex="5"

                    }

                    <img
                    tabIndex="5" 
                    role="heading" aria-level="2"
                    className="img-fluid hvr-bob" 
                    src="./assets/img/btn_ch_oferta_tv.png" 
                    alt="oferta televisiva Familia" />
                    {
                        //Valida que el arreglo no esté vacio:
                        ofertaTelevisivaFamilias &&
                        //Mapeo del arreglo para renderizar
                        ofertaTelevisivaFamilias.map((item, i) => (
                            <TarjetaOfertas 
                            tabIndex="5"
                            item={item} 
                            i={i} key={"televisivaFamilia" + i} />
                        ))

                    }
                    {
                        //oferta virtual familia
                        <img 
                        tabIndex="5"
                        role="heading" aria-level="3"
                        className="img-fluid hvr-bob" 
                        src="./assets/img/btn_ch_oferta_virtual.png" 
                        alt="oferta virtual Familia" />
                    }

                    {

                        ofertaVirtualFamilias &&
                        ofertaVirtualFamilias.map((item, i) => (
                            <TarjetaOfertas 
                            tabIndex="5"
                            item={item} 
                            i={i} key={"virtualFamilia" + i} 
                            />
                        ))

                    }
                    <img 
                    tabIndex="5"
                     role="heading" aria-level="4"
                    className="img-fluid hvr-bob" 
                    src="./assets/img/btn_ch_mep_informa.png" 
                    alt="MEP informa Familia" />
                    {
                        //FAMILIA - MEP informa                       
                        mepInformaFamilias &&
                        mepInformaFamilias.map((item, i) => (
                            <TarjetaOfertas 
                            tabIndex="5"
                            item={item} i={i} 
                            key={"mepInformaFam" + i}
                             />
                        ))

                    }
                </div>
            </div>

            <div className="row" tabIndex="6">
                <div className="col-sm-8 mb-2">
                    <img 
                     
                    className="img-fluid" 
                    src="./assets/img/banner_gespro.gif" 
                    alt="Banner Gespro" />
                </div>

                <div className="col-sm-4 text-right">
                    <img                     
                    className="img-fluid logos" 
                    src="./assets/img/logotipos_ch_mep_sinart_cafenal.png" 
                    alt="Logos del MEP,Canal 13, Café Nacional, y UNED "/>
                </div>
            </div>
            <br />

        </div>
    )

}

export default Menu;