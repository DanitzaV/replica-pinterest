import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Modal.css';

export default class ButtonDropdown2 extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return (
			<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="color-b">
				<DropdownToggle caret className="color-btns">
					Button Dropdown
        </DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>Header</DropdownItem>
					<DropdownItem disabled>Action</DropdownItem>
					<DropdownItem>Another Action</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Another Action</DropdownItem>
				</DropdownMenu>
			</ButtonDropdown>
		);
	}
}