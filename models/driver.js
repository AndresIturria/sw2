const mongoose = require('mongoose')
const { Schema } = mongoose;

const driverSchema = new Schema({
	driverId: {type: String, unique: true, required: true},
	driverRef: {type: String, unique: true, required: true},
	number: {type: String, required: true},
	code: {type: String, required: true},
	forename: {type: String, required: true},
	surname: {type: String, required: true},
	dob: {type: String, required: true},
	nationality: {type: String, required: true}

});

module.exports = mongoose.model('driver', driverSchema)