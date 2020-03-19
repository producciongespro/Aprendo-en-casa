import React, {useState, useEffect}  from 'react';
import config from './config.json';
import Splash from './componentes/Splash';
import Menu from './componentes/Menu';

console.log(config);
var mainJson=null;
var enlaces=null;

function App() {
  const [isReady, setIsReady ] = useState(false);


  useEffect(()=>{
  cargarDatos();
  }, []);

  async function cargarDatos() {
    let response;
      response = await fetch (config.apiServer+"recuperar_datos_covid.php");
      mainJson = await response.json();    
      console.log(mainJson);
      response = await fetch (config.apiServer+"recuperar_enlaces-info.php");
      enlaces = await response.json();
      console.log("enlaces", enlaces);
      setIsReady(true);    
  }


  return (
    <div className="APP">
        {
          !isReady ?
            <Splash />
            :
            <Menu array={mainJson} />
        }
    </div>
  );
}

export default App;
