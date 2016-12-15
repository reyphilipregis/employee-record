import _ 		   		from 'lodash';
import {Meteor}    		from 'meteor/meteor';
import {Employees} 		from '../imports/collections/employees';
import {image, helpers} from 'faker';

Meteor.startup(() => {
	// check if data exists in the collection
	const numberRecords = Employees.find({}).count();

	if (!numberRecords) {
		// generate some data
		_.times(5000, () => {
			const {name, email, phone} = helpers.createCard();

			Employees.insert({
				name, email, phone,
				avatar : image.avatar()
			});
		});
	}
});
