// import React
import React 			   from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } 	   from '../../imports/collections/employees';
import EmployeeDetail 	   from './employee_detail';

// create component
const EmployeeList = (props) => {
	// reference props.employees array
	const { employees } = props;

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
		</div>
	);
};

// export the container and pass the EmployeeList to the props of the EmployeeList component
export default createContainer(() => {

	// set up subscription
	Meteor.subscribe('employees');

	// return an object. Whatever we return will be sent to EmployeeList as props
	return { employees: Employees.find({}).fetch() };

}, EmployeeList);
