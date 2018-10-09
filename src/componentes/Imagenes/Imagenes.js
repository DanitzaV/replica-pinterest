import React, { Component } from 'react';
import imgfetch from './../../funciones/imagenesfetch.js';
import './../../App.css';

class Imagenes extends Component {
    constructor(){
        super();
        this.state = {
            imgs: []
        }
        this.cargarImagenes = this.cargarImagenes.bind(this);
        this.cargarImagenes()
    }

    componentWillMount(){
        
    }
    componentDidMount(){
        
    }

    async cargarImagenes(){
        const response = await fetch(`https://api.unsplash.com/search/photos?query=iphone&client_id=a322a1eeefcea7de09bd284c21489afcb274af47aed1dbda8a9e197546780f93`);
        const json = await response.json();
        this.setState({ imgs: json.results });
    }
    componentWillUnmount(){
        
    }
    
    render() {
        console.log(this.state.imgs);
        return (
            <div className="container">
                {
                    this.state.imgs.map((e, i) => {
                        console.log(e)
                        return (
                            <div className="items">
                                <img key={i} src={e.urls.small} />
                            </div>
                        )
                    })
                }
               
            </div>
        )
    }
}
export default Imagenes;