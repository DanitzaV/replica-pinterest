import React, { Component } from 'react';
import './App.css';
import Appbar from './componentes/Appbar/Navbar';
import Imagenes from './componentes/Imagenes/Imagenes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

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

library.add(fab, faCheckSquare, faCoffee)

    
