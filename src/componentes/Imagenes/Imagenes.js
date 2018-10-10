import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from './../CircularProgress/CircularProgress';
import qwest from 'qwest';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Modal from './../../Modal/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
 
  
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
  });  


class Ejemplo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
            page: 1,
            open: false,
            item: [],
        };
    }
      

    loadItems() {
        var self = this;

        var url = `https://api.unsplash.com/search/photos?page=${this.state.page}&query=iphone&client_id=a322a1eeefcea7de09bd284c21489afcb274af47aed1dbda8a9e197546780f93`;
        qwest.get(url, {
                cache: true
            })
            .then(function(xhr, resp) {
                if(resp) {
                    console.log(resp)
                    var tracks = self.state.tracks;
                    resp.results.map((track) => {
                        console.log(track)
                        tracks.push(track);      
                    });
                    if(resp.next_href) {
                       return
                    } else {
                        self.setState({
                            hasMoreItems: true,
                            page: self.state.page + 1
                        });
                    }
                }
            });
    }

    datos(e){
        console.log(e)
        this.setState({item: {img: e.urls.small}})
    
    
    }
    handleOpen = () => {

            this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
        

    render() {
        const { classes } = this.props;
        const loader = <CircularProgress></CircularProgress>;
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}>

               
                        <div className=" container">
                    {
                        this.state.tracks.map((track, i) => {
            return(
                <div className=" items" key={i}>
                        <img onClick={() => {
                            this.datos(track)
                            this.handleOpen()
                        }
                         } src={track.urls.small} alt="img" />
                       
                </div>
                
            );
        })}
            <Modal data={this.state.item} img={this.state.item.img} close={this.handleClose} open={this.state.open} />
                </div>
               
            </InfiniteScroll>
        );
    }
};

Ejemplo.propTypes = {
    classes: PropTypes.object.isRequired,
  };
//   const SimpleModalWrapped = ;

export default withStyles(styles)(Ejemplo);