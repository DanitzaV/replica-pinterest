import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  function Transition(props) {
    return <Slide direction="up" {...props} />;
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
      width: theme.spacing.unit * 70,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
  });

class Modales extends Component {
    constructor(props){
        super(props);
        this.datos = this.props.data
        
    }

    
    render(){
        
        console.log(this.props.open)
        const { classes } = this.props;
        return(
            <Dialog
          open={this.props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.open}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
          <img src={this.props.img} alt="img"/>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() =>this.props.close()} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
          
    
        )
    }
}

  const SimpleModalWrapped =  withStyles(styles)(Modales );
export default SimpleModalWrapped;


//   <Modal
//           aria-labelledby="simple-modal-title"
//           aria-describedby="simple-modal-description"
//           open={this.props.open}
//           onClose={this.props.open}
//         >
//           <div style={getModalStyle()} className={classes.paper}>
//             <Typography variant="h6" id="modal-title">
//               Text in a modal
//             </Typography>
           
//             <Typography variant="subtitle1" id="simple-modal-description">
//               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//             </Typography>
//             <Button onClick={() => this.props.close()}>Cerrar</Button>
//             <SimpleModalWrapped />
//           </div>
//         </Modal>