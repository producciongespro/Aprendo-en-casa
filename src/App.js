import React, {useState, useEffect}  from 'react';
import Splash from './componentes/Splash';
import Menu from './componentes/Menu';


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
            <Menu/>
        }
    </div>
  );
}

export default App;
