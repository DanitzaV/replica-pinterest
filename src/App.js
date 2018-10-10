import React, { Component } from 'react';
import './App.css';
import Appbar from './componentes/Appbar/Appbar';
import Imagenes from './componentes/Imagenes/Imagenes';
import Ejemplo from './Ejemplo';

class App extends Component {
  render() {
    return (
      <div >
        <Appbar></Appbar>
       <Ejemplo/>
       
      
      </div>
    );
  }
}

export default App;
  {/* <Imagenes/> */}
    
