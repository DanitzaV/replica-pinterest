import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input, Button, IconButton
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBell, faEllipsisH, faUpload, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import imgpin from './../../img/icon-pint.png';
import './Navbar.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" className="navbar-pin" style={{ padding: "9px", borderBottom: "1px solid #ded2d2", marginBottom: "9px", }}>
          <img src={imgpin} style={{ width: "38px", marginLeft: "19px" }} />
          <Input style={{ width: "51%", marginLeft: "22px", backgroundColor: "#EFEFEF" }} />
          <NavbarToggler onClick={this.toggle} />
          <div >

            <Button className="btn-navbar" style={{ marginLeft: "30px" }}>Inicio</Button>
            <Button className="btn-navbar">Siguiendo</Button>
            <Button className="btn-navbar">Usuario</Button>
            <Button className="btn-navbar icon-navbar">
              <FontAwesomeIcon icon={faCommentDots} />
            </Button>
            <Button className="btn-navbar icon-navbar">
              <FontAwesomeIcon icon={faBell} />
            </Button>
            <Button className="btn-navbar icon-navbar">
              <FontAwesomeIcon icon={faEllipsisH} />
            </Button>
          </div>
        </Navbar>
      </div>
    );
  }
}