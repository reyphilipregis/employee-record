//Declare our collection
import { Mongo } from 'meteor/mongo';

// create the collection and export
export const Employees = new Mongo.Collection('employees');
