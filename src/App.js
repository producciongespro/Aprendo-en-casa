import React, {useState, useEffect}  from 'react';
import config from './config.json';
import Splash from './componentes/Splash';
import Menu from './componentes/Menu';
import EnlacesCovid from './componentes/EnlacesCovid';

import jsonDestacados from './DESTACADOS.json';

var enlacesMenu=null;
var enlacesCovid=null;
var destacados=jsonDestacados;

function App() {
  const [isReady, setIsReady ] = useState(false);
  const [nombreComponente, setNombreComponente ]  = useState("menu");


  useEffect(()=>{
  cargarDatos();
  }, []);



  function handleCargarComponente (e) {        
      setNombreComponente(e.target.dataset.comp)           
  }

  async function cargarDatos() {
    let response;
      response = await fetch (config.apiServer+"obtener_menu.php");
      enlacesMenu = await response.json();    
      console.log("enlacesMenu",enlacesMenu);
      response = await fetch (config.apiServer+"recuperar_enlaces-info.php");
      enlacesCovid = await response.json();
      //console.log("enlaces", enlaces);
      setIsReady(true);
      
  }


  return (
    <div className="APP">
      {
          !isReady &&
          <Splash />
      }
        {

          isReady && nombreComponente === "menu" &&
            <Menu array={enlacesMenu} destacados={destacados} handleCargarComponente={handleCargarComponente} />                      
        }
        {
          isReady && nombreComponente === "enlaces" &&
            <EnlacesCovid array={enlacesCovid} handleCargarComponente={handleCargarComponente} />                      
        }


    </div>
  );
}

export default App;
