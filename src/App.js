import React, { Component } from 'react';
import './App.css';
import Appbar from './componentes/Appbar/Appbar';
import Imagenes from './componentes/Imagenes/Imagenes';

class App extends Component {
  render() {
    return (
      <div >
        <Appbar></Appbar>
          <Imagenes/>
      </div>
    );
  }
}

export default App;

    
