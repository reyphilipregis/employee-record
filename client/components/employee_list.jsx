// import React
import React, { Component } from 'react';
import ReactMeteorData  	from 'meteor/react-meteor-data';
import EmployeeDetail 	    from './employee_detail';
import { Employees } 	    from '../../imports/collections/employees';

const PER_PAGE = 20;

class EmployeeList extends Component {
	componentWillMount() {
		this.page = 1;
	}

	constructor( props ) {
		super( props );
	}

	handleButtonClick() {
		Meteor.subscribe( 'employees', ( PER_PAGE * (this.page + 1) ) );
		this.page += 1;
	}

	render() {
		const { employeesData } = this.props;

		return (
			<div>
				<div className = "employee-list">
					{ 
						employeesData.map( 
							( employee ) => <EmployeeDetail key = { employee._id } employee = { employee } />
						)
					}
				</div>

				<button className = "btn btn-primary" onClick = { this.handleButtonClick.bind( this ) }>
					Load More...
				</button>
			</div>
		);
	}
}

// export the container and pass the EmployeeList to the props of the EmployeeList component
export default ReactMeteorData.createContainer( () => {

	// set up subscription
	Meteor.subscribe( 'employees', PER_PAGE );

	// return an object. Whatever we return will be sent to EmployeeList as props
	return { employeesData: Employees.find({}).fetch() };

}, EmployeeList );
