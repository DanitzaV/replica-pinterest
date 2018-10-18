import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Input, 
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import imgpin from './../../img/icon-pint.png';
import './Navbar.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" className="navbar-pin" style={{ padding: "9px", borderBottom: "1px solid #ded2d2", marginBottom: "9px", }}>
          <img src={imgpin} style={{ width: "38px", marginLeft: "19px" }} alt=""/>
          <Input style={{ width: "51%", marginLeft: "22px", backgroundColor: "#EFEFEF" }} />
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse style={{marginLeft: "59px", "font-size": "16px"}} isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="btn-navbar" href="#">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="btn-navbar" href="#">Siguiendo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="btn-navbar" href="#">Usuario</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className=" icon-navbar" href="#"><FontAwesomeIcon icon={faCommentDots} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className=" icon-navbar" href="#"><FontAwesomeIcon icon={faEllipsisH} /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

//          <div >

// <Button className="btn-navbar" style={{ marginLeft: "30px" }}>Inicio</Button>
// <Button className="btn-navbar">Siguiendo</Button>
// <Button className="btn-navbar">Usuario</Button>
// <Button className="btn-navbar icon-navbar">
//   <FontAwesomeIcon icon={faCommentDots} />
// </Button>
// <Button className="btn-navbar icon-navbar">
//   <FontAwesomeIcon icon={faBell} />
// </Button>
// <Button className="btn-navbar icon-navbar">
//   <FontAwesomeIcon icon={faEllipsisH} />
// </Button>
// </div>