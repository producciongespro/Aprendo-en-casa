import React from 'react';
import TarjetaOfertas from '../componentes/TarjetaOfertas';
import Destacados from '../componentes/Destacados';
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
import imgGespro from '../assets/img/banner_gespro.gif';
import imgDestacados from '../assets/img/titulo_destacados.png';


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
        <div className="container">
            <br />

            <div className="row">
                <div className="col-sm-10 encabAprend">
                    <img 
                    tabIndex="1" role="banner"
                    className="img-fluid" 
                    src={imgEncabezado} 
                    alt="Banner de Aprendo en casa" />
                </div>

                <div className="col-sm-2 pt-4">
                    <img 
                    tabIndex="7" role="button"
                    className="btn img-fluid btn-recursos" 
                    src={imgRecursosCovid} 
                    onClick={props.handleCargarComponente} 
                    onKeyPress={props.handleCargarComponente} 
                    data-comp="enlaces" 
                    alt="Enlace a una página para ver recursos COVID-19" />
                </div>
            </div>


            <br />
            <div className="row">
                <div className="col-sm-4 mb-2">
                    <img 
                    tabIndex="2" role="button"
                    className="img-fluid" 
                    src={imgDestacados} 
                    alt="Sección de destacados" />
                </div>                
            </div>

            <div className="row"   >
                          
                    <Destacados  array={props.destacados }/>                
            </div>
            <br />  

            <div className="row">
                <div className="col-sm-4">
                    {
                        //***********DOCENTES
                    }
                    <img 
                    tabIndex="3" role="heading" aria-level="1"
                    className="img-fluid" 
                    src={imgDocentes} 
                    alt="Oferta para los Docentes" />
                    <br />
                    {
                        //oferta televisiva docentes
                    }
                    <img 
                    tabIndex="3" role="heading" aria-level="2"
                    className="img-fluid hvr-bob" 
                    src={imgOfertaTelevisiva} 
                    alt="oferta televisiva Docentes" />
                    {
                        ofertaTelevisivaDocentes &&
                        ofertaTelevisivaDocentes.map((item, i) => (
                            <TarjetaOfertas 
                            item={item} 
                            i={i} 
                            key={"televisivaDocentes" + i} 
                           />
                        ))

                    }
                    {
                        //oferta Virtual
                    }
                    <img 
                    tabIndex="3" role="heading" aria-level="3"
                    className="img-fluid hvr-bob" 
                    src={imgOfertaVirtual} 
                    alt="Oferta Virtual Docentes" />
                    {
                        ofertaVirtualDocentes &&
                        ofertaVirtualDocentes.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"virtualDocentes" + i} />
                        ))

                    }

                    {
                        //MEP informa
                        mepInformaDocentes > 0 &&
                        <img 
                        tabIndex="3" role="heading" aria-level="4"
                        className="img-fluid" 
                        src={imgMepInforma} 
                        alt="MEP informa Docentes" />
                    }
                    {

                        mepInformaDocentes &&
                        mepInformaDocentes.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"mepInformaDoc " + i} />
                        ))

                    }


                </div>





                <div className="col-sm-4">
                    {
                        //***********ESTUDIANTES
                    }
                    <img 
                    tabIndex="4" role="heading" aria-level="1"
                    src={imgEstudiantes} 
                    alt="Oferta para la Estudiantes" />
                    <br />
                    {
                        //oferta televisiva  estudiantes
                    }
                    <img 
                    tabIndex="4" role="heading" aria-level="2"
                    className="img-fluid hvr-bob" 
                    src={imgOfertaTelevisiva} 
                    alt="Oferta Televisiva Estudiantes" />
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
                    {
                        ofertaVirtualEstudiantes.length > 0 &&
                        <img 
                        tabIndex="4" role="heading" aria-level="3"
                        className="img-fluid" 
                        src={imgOfertaVirtual} 
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
                            <TarjetaOfertas item={item} i={i} key={"virtualEstudiantes" + i} />
                        ))

                    }

                    {

                        //MEP informa
                        mepInformaEstudiantes > 0 &&
                        <img 
                        tabIndex="4" role="heading" aria-level="4"
                        className="img-fluid" 
                        src={imgMepInforma} 
                        alt="MEP informa Estudiantes" />
                    }
                    {

                        mepInformaEstudiantes &&
                        mepInformaEstudiantes.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"mepInformaESt" + i} />
                        ))

                    }
                </div>

                <div className="col-sm-4">
                    <img 
                    tabIndex="5" role="heading" aria-level="1"
                    src={imgFamilia} 
                    alt="Oferta para la Familia" />

                    {
                        // FAMILIA

                    }

                    <img 
                    tabIndex="5" role="heading" aria-level="2"
                    className="img-fluid hvr-bob" 
                    src={imgOfertaTelevisiva} 
                    alt="oferta virtual Familia" />
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
                        <img 
                        tabIndex="5" role="heading" aria-level="3"
                        className="img-fluid" 
                        src={imgOfertaVirtual} 
                        alt="oferta virtual Familia" />
                    }

                    {

                        ofertaVirtualFamilias &&
                        ofertaVirtualFamilias.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"virtualFamilia" + i} />
                        ))

                    }
                    <img 
                    tabIndex="5" role="heading" aria-level="4"
                    className="img-fluid hvr-bob" 
                    src={imgMepInforma} 
                    alt="MEP informa Familia" />
                    {
                        //FAMILIA - MEP informa                       
                        mepInformaFamilias &&
                        mepInformaFamilias.map((item, i) => (
                            <TarjetaOfertas item={item} i={i} key={"mepInformaFam" + i} />
                        ))

                    }
                </div>
            </div>

            <div className="row">
                <div className="col-sm-8 mb-2">
                    <img 
                    tabIndex="6" 
                    className="img-fluid" 
                    src={imgGespro} 
                    alt="Banner Gespro" />
                </div>

                <div className="col-sm-4 text-right">
                    <img 
                    tabIndex="6" 
                    className="img-fluid logos" 
                    src={imgLogo} 
                    alt="Logos del MEP,Canal 13, Café Nacional, y UNED "/>
                </div>
            </div>
            <br />

        </div>
    )

}

export default Menu;