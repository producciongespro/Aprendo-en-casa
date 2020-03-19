import React, {useState, useEffect}  from 'react';
import Splash from './componentes/Splash';


function App() {

  const [isReady, setIsReady ] = useState(false);

  function cargarDatos() {
    setTimeout(function () { 
      setIsReady(true)
     }, 1000);    
  }


  return (
    <div className="APP">
      <Splash />
    </div>
  );
}

export default App;
