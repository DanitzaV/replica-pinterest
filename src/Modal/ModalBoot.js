import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faEllipsisH, faUpload, faExternalLinkAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './Modal.css'
import ButtonDropdown2 from './ButtonDropdown';
import {
	Button,
	Modal,
	ModalBody,
	Nav,
	NavItem,
	NavLink,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse
} from 'reactstrap';

class ImgModal extends Component {
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
			<Modal isOpen={this.props.open} toggle={this.props.open} className={this.props.className}>
				<div className="icon-back" >
					<Button id="desktop-angle" style={{ display: "inline-flex", backgroundColor: "transparent ", border: "none", color: "#333232 " }} onClick={() => this.props.close()}>
						<FontAwesomeIcon className="iconarrow" icon={faAngleLeft} />
						<p className="p-inicio">Inicio</p>
					</Button>
				</div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="#" id="btn-angle" onClick={() => this.props.close()}><Button style={{ display: "inline-flex", backgroundColor: "transparent ", border: "none", color: "#333232 " }} >
						<FontAwesomeIcon className="iconarrow" icon={faAngleLeft} />
						<p className="p-inicio">Inicio</p>
					</Button></NavbarBrand>
					<NavbarBrand href="#" id="points"><FontAwesomeIcon className="btn-icon" icon={faEllipsisH} style={{ fontSize: '28px' }} /></NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="#"><Button className="btn-enviar"><FontAwesomeIcon icon={faUpload} /> Enviar</Button></NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#"><ButtonDropdown2 /><Button className="btn-danger" color="danger">GUARDAR</Button></NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<div className="modal-img">
					<ModalBody style={{ display: "flex" }}>
						<img className="img-props" src={this.props.img} alt="img" />
						<div className="" >
							<div>
								<p className="body-description">{this.props.description}</p>
							</div>
							<div style={{ display: "flex", justifyContent: "space-around" }}>
								<img style={{ width: "53px", height: "50px", borderRadius: "50%", marginTop: "5px" }} src={this.props.imguser} alt={this.props.user} />
								<div>
									<p style={{ paddingTop: "12px" }}>{this.props.username}</p>
								</div>
								<Button color="danger" style={{ padding: "7px" }}>Seguir</Button>
							</div>
							<div>
								<Button href={this.props.web} target="_blank"
									style={{ backgroundColor: "rgb(195, 190, 190) ", marginTop: "9px", marginLeft: "9px", border: "none", color: "#333232 ", width: "229px" }}
									size="lg">
									<FontAwesomeIcon style={{ marginRight: "5px" }} icon={faExternalLinkAlt} />
									sitio web
								</Button>
							</div>
						</div>
					</ModalBody>
				</div>
			</Modal>
		);
	}
}

export default ImgModal;