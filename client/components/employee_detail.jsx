import React, { Component } from 'react';

class EmployeeDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { avatar, name, phone, email } = this.props.employee;

		return (
			<div className = "thumbnail">
				<img src = { avatar } />
				<div className = "caption">
					<h3>{ name }</h3>
					<ul className="list-group">
						<li className="list-group-item">Email: { email }</li>
						<li className="list-group-item">Phone: { phone }</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default EmployeeDetail;
