import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import './../../App.css';

class Imagenes extends Component {
    constructor(){
        super();
        this.state = {
            imgs: [],
            hasMoreItems: false,
        }
        this.cargarImagenes = this.cargarImagenes.bind(this);
        // this.cargarImagenes()
    }

    // cargarImagenes(){
    // }
    async cargarImagenes(){
        const response = await fetch(`https://api.unsplash.com/search/photos?query=iphone&client_id=a322a1eeefcea7de09bd284c21489afcb274af47aed1dbda8a9e197546780f93`);
        const json = await response.json();
        this.setState({ imgs: json.results});
    }
 
    
    render() {
        console.log(this.state.imgs)
        const loader = <div className="loader">Loading ...</div>;
        // var items = [];
        // this.state.imgs.map((e, i) => {
        //     items.push(
        //         <div className="items">
        //             <img  src={e.urls.small} />
        //         </div>
        //     );        })
        return (
           
            <InfiniteScroll
                pageStart={0}
                loadMore={this.cargarImagenes()}
                hasMore={true}
                loader={loader}>

                 <div className="container">
                    {
                        this.state.imgs.map((e, i) => {
                            console.log(e)
            return(
                <div className="items">
                    <img  src={e.urls.small} />
                </div>
            );        
            })
                    }
                </div>
            </InfiniteScroll>
          
        )
    }
}
export default Imagenes;