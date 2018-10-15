import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAngleLeft, faEllipsisH, faUpload, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import './Modal.css'
import ButtonDropdown2 from './ButtonDropdown';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Container,
	Row,
	Col,
	Input,
	Form
} from 'reactstrap';

class ImgModal extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Modal isOpen={this.props.open} toggle={this.props.open} className={this.props.className}>
					<div className="icon-back" >
						<Button style={{display: "inline-flex",backgroundColor: "transparent ", border: "none",color: "#333232 "}} onClick={() => this.props.close()}>
						<FontAwesomeIcon className="iconarrow" icon={faAngleLeft}  />
						<p className="p-inicio">Inicio</p>
						</Button>
					
					</div>
					<div className="btns-flex">
						<Button className="btn-icon">
							<FontAwesomeIcon icon={faEllipsisH} style={{fontSize: '28px'}} />
						</Button>
						<div>
							<Button className="btn-enviar"><FontAwesomeIcon icon={faUpload} /> Enviar</Button>
							<ButtonDropdown2 />
							<Button className="btn-danger" color="danger">GUARDAR</Button>
						</div>

					</div>
					<div className="modal-img">
						<ModalBody style={{display: "flex"}}>
						
								<img className="img-props" src={this.props.img} alt="img" />
								<div className="" >
								<div>
									<p className="body-description">{this.props.description}</p>
								</div>
								<div style={{display: "flex",justifyContent: "space-around"}}>
								<img style={{width: "53px",height: "50px",borderRadius: "50%",marginTop: "5px"}} src={this.props.imguser} alt={this.props.user} />
								<div>
									<p style={{paddingTop: "12px"}}>{this.props.username}</p>
									
								</div>
								<Button color="danger" style={{padding: "7px"}}>Seguir</Button>
							</div>
							<div>
								<Button href={this.props.web} target="_blank"
								style={{backgroundColor: "rgb(195, 190, 190) ", marginTop: "9px", marginLeft: "9px", border: "none",color: "#333232 ",width: "229px"}} 
								size="lg">
								<FontAwesomeIcon style={{marginRight: "5px"}} icon={faExternalLinkAlt} />
								sitio web
								</Button>
							</div>
							</div>
						

						</ModalBody>
					</div>

				</Modal>
			</div>
		);
	}
}

export default ImgModal;
			

			  {/* <Modal fade={false} isOpen={this.props.open} toggle={this.props.open} className={this.props.className}>
      
			<ModalHeader>
				<Button color="secondary" className="btn_back" onClick={() =>this.props.close()}>
					<FontAwesomeIcon className="iconArrow" icon="arrow-left" />
					Inicio
				</Button>
			</ModalHeader>

			<ModalBody>
				<Container>
					<Row>
						<Col xs="2">
							<Button color="secondary" className="btn_puntos">
								<FontAwesomeIcon className="ellip_color" icon="ellipsis-h" />
							</Button>
						</Col>
						<Col xs="4"></Col>
						<Col xs="2">
							<Button color="secondary" className="right btn_upload">
								<FontAwesomeIcon icon="upload" />
								Enviar
							</Button>
						</Col>
						<Col xs="4">
							<Form inline>
								<Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
									<option value="true">Imagen</option>
								</Input>
								{' '}
								<Button color="danger">Guardar</Button>
							</Form>
						</Col>
						<Col xs="6" className="mrgn_top">
							<img className="imgmodal"  src={this.props.img}/>
						</Col>
						<Col xs="6" className="mrgn_top">
							<p>hola</p>
						</Col>
					</Row>
				</Container>
			</ModalBody>
		</Modal> */}