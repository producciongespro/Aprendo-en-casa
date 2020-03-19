import React, {useState, useEffect}  from 'react';
import Splash from './componentes/Splash';
import Menu from './componentes/Menu';
import mainJson from './data-oferta.json';

function App() {
  const [isReady, setIsReady ] = useState(false);


  useEffect(()=>{
  cargarDatos();
  }, []);

  function cargarDatos() {
    setTimeout(function () { 
      setIsReady(true)
     }, 1000);    
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
