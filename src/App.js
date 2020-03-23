import React, {useState, useEffect}  from 'react';
import config from './config.json';
import Splash from './componentes/Splash';
import Menu from './componentes/Menu';
import EnlacesCovid from './componentes/EnlacesCovid';

var mainJson=null;
var enlaces=null;

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
      response = await fetch (config.apiServer+"recuperar_datos_covid.php");
      mainJson = await response.json();    
      console.log("mainJson",mainJson);
      response = await fetch (config.apiServer+"recuperar_enlaces-info.php");
      enlaces = await response.json();
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
            <Menu array={mainJson} handleCargarComponente={handleCargarComponente} />                      
        }
        {
          isReady && nombreComponente === "enlaces" &&
            <EnlacesCovid array={enlaces} handleCargarComponente={handleCargarComponente} />                      
        }


    </div>
  );
}

export default App;
