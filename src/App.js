import React, {useState, useEffect}  from 'react';
import config from './config.json';
import Splash from './componentes/Splash';
import Menu from './componentes/Menu';

console.log(config);
var mainJson=null;

function App() {
  const [isReady, setIsReady ] = useState(false);


  useEffect(()=>{
  cargarDatos();
  }, []);

  async function cargarDatos() {
    const response = await fetch (config.apiServer+"recuperar_datos_covid.php");
    mainJson = await response.json();
    console.log(mainJson);
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
