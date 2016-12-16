// import React
import React, { Component } from 'react';
import { createContainer }  from 'meteor/react-meteor-data';
import { Employees } 	    from '../../imports/collections/employees';
import EmployeeDetail 	    from './employee_detail';

const PER_PAGE = 20;

class EmployeeList extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		const { employees } = this.props;

		return (
			<div>
				<div className = "employee-list">
					{ 
						employees.map((employee) => {
							return <EmployeeDetail 
										key = { employee._id } 
										employee = { employee } />
						}) 
					}
				</div>

				<button className="btn btn-primary" onClick = { 
					() => {
						Meteor.subscribe('employees', 40)
					}
				}>Load More...</button>
			</div>
		);
	}
}

// export the container and pass the EmployeeList to the props of the EmployeeList component
export default createContainer(() => {

	// set up subscription
	Meteor.subscribe('employees', PER_PAGE);

	// return an object. Whatever we return will be sent to EmployeeList as props
	return { employees: Employees.find({}).fetch() };

}, EmployeeList);
